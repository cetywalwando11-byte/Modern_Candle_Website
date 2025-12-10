import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function About() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-xs sm:max-w-md mx-auto">
              {/* Main circular image */}
              <div className="relative rounded-full overflow-hidden aspect-square shadow-2xl border-4 sm:border-8 border-amber-50">
                <ImageWithFallback
                  src="/4Home_Placement.jpg"
                  alt="4Home_Placement"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative circles */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
              Crafted with Care, Made with Love
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Our mission at Candid candles and more is to bring light in the darkest hours and provide comfort and relaxation in the process. We pride ourselves in creating handcrafted, long-lasting candles that can be used for lighting, room mood enhancements, and even insect repellent.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-6">
              We also offer gifting options that can be customized for your needs. We also offer team building event specials, cooperate events and more hand crafted items.
            </p>
            
            {/* Stats in circular design */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl text-amber-600">1</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Year</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl text-amber-600">5</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Customers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl text-amber-600">100%</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Eco-Friendly</p>
              </div>
            </div>

            <Button size="lg" className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 w-full sm:w-auto px-8">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
