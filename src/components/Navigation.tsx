import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from './CartContext';
import logo from "figma:asset/a808e91a19884ca676f823c3db771ad05c6384e2.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Candid Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            <span className="text-base sm:text-lg md:text-xl">
              Candid <span className="text-amber-600">candles and more</span>
            </span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant={currentPage === 'home' ? 'default' : 'ghost'}
              onClick={() => onNavigate('home')}
              className={`rounded-full text-sm sm:text-base px-3 sm:px-6 ${
                currentPage === 'home'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'
                  : ''
              }`}
            >
              Home
            </Button>
            <Button
              variant={currentPage === 'about' ? 'default' : 'ghost'}
              onClick={() => onNavigate('about')}
              className={`rounded-full text-sm sm:text-base px-3 sm:px-6 ${
                currentPage === 'about'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'
                  : ''
              }`}
            >
              About
            </Button>
            <Button
              variant={currentPage === 'shop' ? 'default' : 'ghost'}
              onClick={() => onNavigate('shop')}
              className={`rounded-full text-sm sm:text-base px-3 sm:px-6 ${
                currentPage === 'shop'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'
                  : ''
              }`}
            >
              Shop
            </Button>
            
            {/* Cart Button */}
            <Button
              variant="outline"
              onClick={() => onNavigate('checkout')}
              className="rounded-full relative border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-3 sm:px-4"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
