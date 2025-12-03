import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Leaf, Heart, Flame, Users, Award, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
              Our Story
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Bringing light in the darkest hours since 2024
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative rounded-full overflow-hidden aspect-square shadow-2xl border-4 sm:border-8 border-amber-50">
                  <ImageWithFallback
                    src="src\assets\4Home_Placement.jpg"
                    alt="4Home_Placement"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-3xl opacity-30"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl mb-4 sm:mb-6">
                Crafted with Care, Made with Love
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                Our mission at Candid candles and more is to bring light in the darkest hours and provide comfort and relaxation in the process. We pride ourselves in creating handcrafted, long-lasting candles that can be used for lighting, room mood enhancements, and even insect repellent.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                We also offer gifting options that can be customized for your needs. We also offer team building event specials, cooperate events and more hand crafted items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Our Values</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Every candle we create embodies our commitment to quality, sustainability, and craftsmanship
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Leaf,
                title: "Eco-Friendly",
                description: "100% natural soy wax and sustainable packaging for a cleaner environment"
              },
              {
                icon: Heart,
                title: "Handcrafted",
                description: "Each candle is carefully hand-poured in small batches with love and attention"
              },
              {
                icon: Flame,
                title: "Long Lasting",
                description: "Premium quality ensures up to 50+ hours of beautiful, consistent burn time"
              },
              {
                icon: Sparkles,
                title: "Premium Scents",
                description: "Carefully selected essential oils create unique, captivating fragrances"
              },
              {
                icon: Users,
                title: "Community",
                description: "We support local artisans and give back to our community"
              },
              {
                icon: Award,
                title: "Quality Assured",
                description: "Rigorous testing ensures every candle meets our high standards"
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" />
                </div>
                <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              { number: "1", label: "Year of Excellence" },
              { number: "5", label: "Happy Customers" },
              { number: "40+", label: "Unique Scents" },
              { number: "100%", label: "Natural Ingredients" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl">
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-amber-600">{stat.number}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Building & Events Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
              Events & Team Building
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10">
              Looking for a unique team building experience or corporate event? We offer specialized candle-making workshops and customized gift options for all occasions.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-100">
                <h3 className="text-lg sm:text-xl mb-2">Team Building</h3>
                <p className="text-sm sm:text-base text-gray-600">Interactive candle-making workshops</p>
              </div>
              <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-100">
                <h3 className="text-lg sm:text-xl mb-2">Corporate Events</h3>
                <p className="text-sm sm:text-base text-gray-600">Custom branded candles for your business</p>
              </div>
              <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-100">
                <h3 className="text-lg sm:text-xl mb-2">Custom Gifts</h3>
                <p className="text-sm sm:text-base text-gray-600">Personalized candles for any occasion</p>
              </div>
            </div>
            <Button size="lg" className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 w-full sm:w-auto px-8">
              Contact Us for Events
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
