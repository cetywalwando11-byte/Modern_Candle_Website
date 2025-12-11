import { ShoppingCart, Menu, X } from 'lucide-react'; // ADDED: Menu and X icons
import { Button } from './ui/button';
import { useCart } from './CartContext';
import { useState } from 'react'; // ADDED: React state hook

interface NavigationProps {
  currentPage: 'home' | 'about' | 'shop' | 'checkout';
  onNavigate: (page: 'home' | 'about' | 'shop' | 'checkout') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  // --- Step 1.2: Add Menu State ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  // --- Step 1.3: Create a Handler ---
  // Handles navigation and closes the menu (better mobile UX)
  const handleNavigate = (page: 'home' | 'about' | 'shop' | 'checkout') => {
    onNavigate(page);
    setIsMenuOpen(false); // Close menu after selection
  };

  // --- Step 1.4: Extract Links for Reusability ---
  const NavLinks = (
    <>
      <Button
        variant={currentPage === 'home' ? 'default' : 'ghost'}
        onClick={() => handleNavigate('home')}
        className={`w-full md:w-auto justify-center rounded-full text-sm sm:text-base px-3 sm:px-6 transition-colors ${
          currentPage === 'home'
            ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        Home
      </Button>
      <Button
        variant={currentPage === 'about' ? 'default' : 'ghost'}
        onClick={() => handleNavigate('about')}
        className={`w-full md:w-auto justify-center rounded-full text-sm sm:text-base px-3 sm:px-6 transition-colors ${
          currentPage === 'about'
            ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        About
      </Button>
      <Button
        variant={currentPage === 'shop' ? 'default' : 'ghost'}
        onClick={() => handleNavigate('shop')}
        className={`w-full md:w-auto justify-center rounded-full text-sm sm:text-base px-3 sm:px-6 transition-colors ${
          currentPage === 'shop'
            ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        Shop
      </Button>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/a808e91a19884ca676f823c3db771ad05c6384e2.png" 
              alt="Candid Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain" 
            />
            <span className="text-base sm:text-lg md:text-xl font-semibold whitespace-nowrap">
              Candid <span className="text-amber-600">candles and more</span>
            </span>
          </button>

          {/* 1. Desktop Navigation Links (Step 2.1: Hidden on mobile, visible on medium screens and up) */}
          <div className="hidden md:flex items-center gap-2 sm:gap-4">
            {NavLinks}
          </div>

          {/* Right-hand side controls (Cart and Mobile Toggle) */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Cart Button */}
            <Button
              variant="outline"
              onClick={() => handleNavigate('checkout')}
              className="rounded-full relative border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-3 sm:px-4"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* 2. Mobile Menu Button (Step 2.2: Only visible on mobile) */}
            <Button
              variant="ghost"
              className="md:hidden p-2 rounded-full text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Menu Dropdown (Step 2.3: Conditionally rendered on small screen) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 absolute top-16 sm:top-20 w-full">
          <div className="flex flex-col p-4 space-y-2">
            {NavLinks} 
          </div>
        </div>
      )}
    </nav>
  );
}