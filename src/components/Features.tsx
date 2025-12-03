import { Leaf, Heart, Sparkles, Clock } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Made with premium soy wax and essential oils, free from harmful chemicals"
  },
  {
    icon: Heart,
    title: "Hand-Poured",
    description: "Each candle is carefully crafted with love and attention to detail"
  },
  {
    icon: Sparkles,
    title: "Premium Scents",
    description: "Curated fragrances that create the perfect ambiance for any space"
  },
  {
    icon: Clock,
    title: "Long-Lasting",
    description: "Up to 50 hours of burn time for extended enjoyment"
  }
];

export function Features() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">Why Choose Candid candles and more</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Quality, sustainability, and craftsmanship in every candle
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group px-4">
                {/* Circular Icon Container */}
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </div>
                  </div>
                </div>

                {/* Feature Content */}
                <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
