import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import collectionImage from "figma:asset/00b36f880fdb05bdc0371b1e628631b6df19e37c.png";

const products = [
  {
    id: 1,
    name: "Std Glass candles",
    scent: "",
    price: "R165.00",
    image: "https://images.unsplash.com/photo-1631021967299-59d54f546248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGphciUyMGNhbmRsZXxlbnwxfHx8fDE3NjI4MDI5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: null
  },
  {
    id: 2,
    name: "Jumbo glass jar",
    scent: "",
    price: "R185.00",
    image: "https://images.unsplash.com/photo-1641837225643-f999493f6375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW1ibyUyMGphciUyMGNhbmRsZXxlbnwxfHx8fDE3NjI4MDI5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: null
  },
  {
    id: 3,
    name: "Modern Pillar candle",
    scent: "",
    price: "R100.00",
    image: "https://images.unsplash.com/photo-1681394962525-45cb10b65d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxsYXIlMjBjYW5kbGUlMjBtb2Rlcm58ZW58MXx8fHwxNzYyODAyOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: null
  },
  {
    id: 4,
    name: "Bubble candles",
    scent: "",
    price: "R80.00",
    image: "https://images.unsplash.com/photo-1658760046471-896cbc719c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWJibGUlMjBjYW5kbGUlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzYyODAyOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: null
  },
  {
    id: 5,
    name: "Sip and Melt",
    scent: "",
    price: "R500.00",
    image: "https://images.unsplash.com/photo-1583699520128-c1c9a80733ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5kbGUlMjBtZWx0aW5nJTIwd2F4fGVufDF8fHx8MTc2MjgwMjkzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: null
  }
];

export function ProductCollection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">Our Collection</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Carefully curated scents for every mood and moment
          </p>
        </div>

        {/* Featured Collection Image */}
        <div className="mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-100">
            <img
              src={collectionImage}
              alt="Radiance of Love Collection"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Circular Product Image */}
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 scale-95"></div>
                
                <div className="relative aspect-square rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:shadow-2xl transition-shadow duration-300">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {product.badge && (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                    <Badge className="rounded-full bg-amber-500 text-white border-2 border-white shadow-lg text-xs sm:text-sm">
                      {product.badge}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="text-center px-2">
                <h3 className="text-lg sm:text-xl mb-1 sm:mb-2">{product.name}</h3>
                {product.scent && <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">{product.scent}</p>}
                <p className="text-xl sm:text-2xl text-amber-600 mb-3 sm:mb-4">{product.price}</p>
                <Button className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 w-full text-sm sm:text-base py-2 sm:py-3">
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="rounded-full border-2 border-amber-500 text-amber-600 hover:bg-amber-50 w-full sm:w-auto px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}