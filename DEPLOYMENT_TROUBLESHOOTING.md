# Vercel Deployment Troubleshooting Guide

## Problem Summary
**Issue**: React application showing blank page or cached old version on Vercel deployment despite successful builds and working local development.

**Symptoms**:
- ✅ Local development works perfectly (`npm run dev`)
- ✅ Build completes successfully (`npm run build`)
- ❌ Deployed site shows blank page or old cached version
- ❌ Browser console may show no errors
- ❌ Multiple deployments don't resolve the issue

---

## Root Cause Analysis

### Primary Issues Identified:

1. **Aggressive Browser/CDN Caching**
   - Vercel's CDN was serving cached versions
   - Browser cache preventing new content from loading
   - Service workers caching old application versions

2. **Build Configuration Problems**
   - Incorrect `vercel.json` configuration
   - Missing cache-control headers
   - Wrong output directory settings

3. **Asset Path Issues**
   - Images using incorrect paths (`/src/assets/` instead of `/`)
   - Assets not properly copied to build output
   - Missing fallback handling for failed asset loads

4. **TypeScript/Build Dependencies**
   - Missing React type definitions
   - Versioned package imports causing build issues
   - Conflicting configuration files

---

## Diagnostic Steps

### Step 1: Verify Local vs Production
```bash
# Test locally
npm run dev
# Open http://localhost:3000

# Test production build locally
npm run build
npm run preview
# Compare with deployed version
```

### Step 2: Check Build Logs
1. Go to Vercel Dashboard → Project → Deployments
2. Click on latest deployment
3. Check "Build Logs" for errors
4. Look for failed asset copying or build warnings

### Step 3: Inspect Network Tab
1. Open deployed site with DevTools
2. Check Network tab for:
   - Failed asset loads (404s)
   - Cached responses (from cache)
   - JavaScript/CSS loading issues

---

## Solution Implementation

### 1. Fix Vercel Configuration

**Create/Update `vercel.json`:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "no-cache, no-store, must-revalidate"
        },
        {
          "key": "Pragma",
          "value": "no-cache"
        },
        {
          "key": "Expires",
          "value": "0"
        }
      ]
    }
  ]
}
```

### 2. Fix Asset Paths

**Move assets to public folder:**
```bash
# Move all images from src/assets/ to public/
mv src/assets/* public/
```

**Update image references:**
```jsx
// ❌ Wrong
<img src="/src/assets/image.jpg" />

// ✅ Correct
<img src="/image.jpg" />
```

### 3. Add Cache Busting

**Update `index.html`:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <title>Your App</title>
  </head>
  <body>
    <script src="/sw-killer.js"></script>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**Create `public/sw-killer.js`:**
```javascript
// Kill any existing service workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
    }
  });
}

// Clear all caches
if ('caches' in window) {
  caches.keys().then(function(names) {
    for (let name of names) {
      caches.delete(name);
    }
  });
}
```

### 4. Fix TypeScript Configuration

**Create `tsconfig.json`:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 5. Update Package Dependencies

**Add missing TypeScript types:**
```json
{
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "typescript": "^5.6.3"
  }
}
```

---

## Emergency Cache Busting Techniques

### Method 1: Nuclear Option - Complete Design Change
When all else fails, deploy a completely different looking design to confirm deployment is working:

```jsx
export default function App() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      color: 'white',
      textAlign: 'center',
      padding: '50px'
    }}>
      <div style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        background: 'red',
        color: 'white',
        padding: '15px',
        fontSize: '20px',
        border: '3px solid yellow'
      }}>
        🚀 NEW VERSION LOADED! {new Date().toISOString()} 🚀
      </div>
      <h1>If you see this, deployment is working!</h1>
    </div>
  );
}
```

### Method 2: Force Fresh Build
```bash
# Change project name in package.json
"name": "your-app-v2"

# Clean everything
rm -rf node_modules dist build
npm install
npm run build

# Commit and push
git add .
git commit -m "Force fresh deployment"
git push
```

### Method 3: Vercel Dashboard Actions
1. Go to Vercel Dashboard → Project → Settings
2. Click "Invalidate Cache"
3. Go to Deployments → Redeploy latest
4. Check "Use existing Build Cache" is UNCHECKED

---

## Prevention Strategies

### 1. Proper Build Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist node_modules && npm install"
  }
}
```

### 2. Environment-Specific Configurations
```javascript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: process.env.NODE_ENV === 'development'
  },
  base: process.env.NODE_ENV === 'production' ? '/' : '/'
});
```

### 3. Deployment Checklist
- [ ] Assets in `public/` folder
- [ ] Correct image paths (no `/src/assets/`)
- [ ] `vercel.json` configured
- [ ] TypeScript types installed
- [ ] Build completes locally
- [ ] Preview works locally
- [ ] No console errors

---

## Common Pitfalls

### ❌ Don't Do This:
```jsx
// Wrong asset paths
<img src="/src/assets/image.jpg" />

// Versioned imports
import { Button } from "@radix-ui/react-button@1.2.3";

// Missing error boundaries
function App() {
  return <ComponentThatMightFail />;
}
```

### ✅ Do This Instead:
```jsx
// Correct asset paths
<img src="/image.jpg" />

// Clean imports
import { Button } from "@radix-ui/react-button";

// With error boundaries
function App() {
  return (
    <ErrorBoundary>
      <ComponentThatMightFail />
    </ErrorBoundary>
  );
}
```

---

## Team Workflow

### When Deployment Issues Occur:

1. **First Response** (5 minutes):
   - Check if local dev works
   - Check Vercel build logs
   - Try hard refresh (Ctrl+F5)

2. **Investigation** (15 minutes):
   - Compare local vs production
   - Check Network tab for failed loads
   - Verify asset paths

3. **Quick Fixes** (30 minutes):
   - Invalidate Vercel cache
   - Redeploy without cache
   - Fix obvious configuration issues

4. **Nuclear Option** (if needed):
   - Deploy completely different design
   - Confirm deployment pipeline works
   - Gradually restore original code

### Escalation Path:
1. Developer → Senior Developer (30 min)
2. Senior Developer → DevOps/Platform Team (1 hour)
3. Platform Team → External Support (2 hours)

---

## Tools & Resources

### Debugging Tools:
- **Vercel CLI**: `vercel logs` for deployment logs
- **Browser DevTools**: Network tab for asset loading
- **Lighthouse**: Performance and caching analysis

### Useful Commands:
```bash
# Local testing
npm run build && npm run preview

# Vercel CLI debugging
npx vercel logs [deployment-url]

# Cache busting
curl -I [your-site-url] | grep -i cache
```

### Documentation Links:
- [Vercel Configuration](https://vercel.com/docs/project-configuration)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [React Deployment](https://create-react-app.dev/docs/deployment/)

---

*Last Updated: December 2025*
*Created by: Anesu Kamombe*