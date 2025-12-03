import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24">
      {/* Circular decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/20 rounded-full blur-3xl"></div>

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
              <Button size="lg" className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg w-full sm:w-auto px-8">
                Shop Collection
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-2 border-amber-500 text-amber-600 hover:bg-amber-50 w-full sm:w-auto px-8">
                Learn More
              </Button>
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
              {/* Circular background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full blur-2xl opacity-20 scale-110"></div>
              
              {/* Main circular image */}
              <div className="relative rounded-full overflow-hidden aspect-square shadow-2xl border-4 sm:border-8 border-white">
                <ImageWithFallback
                  src="src\assets\2Radiance_Of_Love.jpg"
                  alt="2Radiance_Of_Love"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small circular accent images */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-white hidden lg:block">
                <ImageWithFallback
                  src="src\assets\1Healing_Flame_Collection.jpg"
                  alt="1Healing_Flame_Collection"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-white hidden lg:block">
                <ImageWithFallback
                  src="src\assets\3Radiance_Of_Love_Collection.jpg"
                  alt="3Radiance_Of_Love_Collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
