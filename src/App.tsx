import { useState } from "react";
import { Hero } from "./components/Hero";
import { ProductCollection } from "./components/ProductCollection";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { AboutPage } from "./components/pages/AboutPage";
import { ShopPage } from "./components/pages/ShopPage";
import { CheckoutPage } from "./components/pages/CheckoutPage";
import { CartProvider } from "./components/CartContext";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'shop' | 'checkout'>('home');

  const handleNavigate = (page: 'home' | 'about' | 'shop' | 'checkout') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        
        {currentPage === 'home' && (
          <>
            <Hero />
            <ProductCollection />
            <Features />
            <About />
            <Newsletter />
          </>
        )}
        
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'shop' && <ShopPage />}
        {currentPage === 'checkout' && <CheckoutPage />}
        
        <Footer />
        <Toaster />
      </div>
    </CartProvider>
  );
}
