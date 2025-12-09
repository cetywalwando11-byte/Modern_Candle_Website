import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { useCart } from "../CartContext";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "1",
    name: "Std Glass candles",
    scent: "",
    price: 165,
    image: "src/assets/Std Glass candles.jpg",
    description: "Classic glass jar candles for everyday use"
  },
  {
    id: "2",
    name: "Jumbo glass jar",
    scent: "",
    price: 185,
    image: "src/assets/Jumbo glass jar.jpg",
    description: "Large size for extended burn time"
  },
  {
    id: "3",
    name: "Modern Pillar candle",
    scent: "",
    price: 100,
    image: "src/assets/Modern Pillar candle.jpg",
    description: "Contemporary pillar design"
  },
  {
    id: "4",
    name: "Bubble candles",
    scent: "",
    price: 80,
    image: "src/assets/Bubble candles.jpg",
    description: "Unique bubble-shaped decorative candles"
  },
  {
    id: "5",
    name: "Sip and Melt",
    scent: "",
    price: 500,
    image: "src/assets/Sip and Melt.jpg",
    description: "Premium candle and beverage experience set"
  }
];

export function ShopPage() {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      scent: product.scent,
      image: product.image,
    });

    // Show added state
    setAddedItems(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
              Our Candle Collection
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8">
              Handcrafted candles in a variety of styles. Each candle is made with 100% natural soy wax and premium essential oils.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-md border-2 border-amber-100">
                <p className="text-sm sm:text-base"><span className="text-amber-600">50+</span> hours burn time</p>
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-md border-2 border-amber-100">
                <p className="text-sm sm:text-base"><span className="text-amber-600">100%</span> natural soy wax</p>
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-md border-2 border-amber-100">
                <p className="text-sm sm:text-base"><span className="text-amber-600">R80 - R500</span> range</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {products.map((product) => {
              const isAdded = addedItems.has(product.id);
              
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="relative aspect-square overflow-hidden rounded-t-3xl">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl mb-2">{product.name}</h3>
                    {product.scent && <p className="text-sm sm:text-base text-amber-600 mb-2">{product.scent}</p>}
                    <p className="text-xs sm:text-sm text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl sm:text-2xl text-amber-600">R{product.price}</span>
                      <span className="text-xs sm:text-sm text-gray-500">50+ hours</span>
                    </div>
                    
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className={`w-full rounded-full transition-all duration-300 ${
                        isAdded
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'
                      }`}
                      size="lg"
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Buy Now
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">🕯️</span>
              </div>
              <h3 className="text-base sm:text-lg mb-2">Handcrafted</h3>
              <p className="text-xs sm:text-sm text-gray-600">Each candle is lovingly hand-poured</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">🌿</span>
              </div>
              <h3 className="text-base sm:text-lg mb-2">Natural</h3>
              <p className="text-xs sm:text-sm text-gray-600">100% soy wax and essential oils</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">🎁</span>
              </div>
              <h3 className="text-base sm:text-lg mb-2">Gift Ready</h3>
              <p className="text-xs sm:text-sm text-gray-600">Beautiful packaging included</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
