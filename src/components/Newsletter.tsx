import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-amber-500 to-orange-500 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Circular Icon */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-3 sm:mb-4">
            Join Our Community
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 px-4">
            Subscribe to get special offers, free giveaways, and exclusive updates
          </p>

          {/* Newsletter Form */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-full bg-white/95 backdrop-blur-sm border-0 text-gray-900 placeholder:text-gray-500 flex-1 h-12"
            />
            <Button size="lg" className="rounded-full bg-white text-amber-600 hover:bg-white/90 shadow-lg w-full sm:w-auto px-8 h-12">
              Subscribe
            </Button>
          </div>

          <p className="text-xs sm:text-sm text-white/75 mt-4 sm:mt-6 px-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
