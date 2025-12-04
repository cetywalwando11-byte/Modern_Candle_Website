import { useState } from "react";
import { CartProvider } from "./components/CartContext";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'shop' | 'checkout'>('home');

  const handleNavigate = (page: 'home' | 'about' | 'shop' | 'checkout') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo */}
              <button
                onClick={() => handleNavigate('home')}
                className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
              >
                <img src="/a808e91a19884ca676f823c3db771ad05c6384e2.png" alt="Candid Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                <span className="text-base sm:text-lg md:text-xl">
                  Candid <span className="text-amber-600">candles and more</span>
                </span>
              </button>

              {/* Navigation Links */}
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => handleNavigate('home')}
                  className={`rounded-full text-sm sm:text-base px-3 sm:px-6 py-2 transition-all ${
                    currentPage === 'home'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                      : 'text-gray-700 hover:text-amber-600'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavigate('about')}
                  className={`rounded-full text-sm sm:text-base px-3 sm:px-6 py-2 transition-all ${
                    currentPage === 'about'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                      : 'text-gray-700 hover:text-amber-600'
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => handleNavigate('shop')}
                  className={`rounded-full text-sm sm:text-base px-3 sm:px-6 py-2 transition-all ${
                    currentPage === 'shop'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                      : 'text-gray-700 hover:text-amber-600'
                  }`}
                >
                  Shop
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        {currentPage === 'home' && (
          <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left content */}
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 leading-tight">
                    Illuminate Your Space with Warmth
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                    Hand-poured, eco-friendly candles crafted with love. Transform your home into a sanctuary of peace and tranquility.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <button className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 shadow-lg transition-all">
                      Shop Collection
                    </button>
                    <button className="rounded-full border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-3 transition-all">
                      Learn More
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12 max-w-md mx-auto lg:mx-0">
                    <div className="text-center lg:text-left">
                      <div className="text-2xl sm:text-3xl text-amber-600 mb-1">100%</div>
                      <div className="text-xs sm:text-sm text-gray-600">Natural Soy</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl sm:text-3xl text-amber-600 mb-1">40+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Unique Scents</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-2xl sm:text-3xl text-amber-600 mb-1">50hrs</div>
                      <div className="text-xs sm:text-sm text-gray-600">Burn Time</div>
                    </div>
                  </div>
                </div>

                {/* Right content - Hero Image */}
                <div className="relative mt-8 lg:mt-0">
                  <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full blur-2xl opacity-20 scale-110"></div>
                    
                    <div className="relative rounded-full overflow-hidden aspect-square shadow-2xl border-4 sm:border-8 border-white">
                      <img
                        src="/2Radiance_Of_Love.jpg"
                        alt="Radiance Of Love"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzllYTNhOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNhbmRsZSBJbWFnZTwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Simple About/Shop/Checkout pages */}
        {currentPage === 'about' && (
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl text-center mb-8">About Us</h1>
            <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
              We are passionate about creating beautiful, eco-friendly candles that bring warmth and ambiance to your home.
            </p>
          </div>
        )}

        {currentPage === 'shop' && (
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl text-center mb-8">Shop</h1>
            <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
              Explore our collection of handcrafted candles.
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Modern Candle Website. All rights reserved. v2.0</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}
