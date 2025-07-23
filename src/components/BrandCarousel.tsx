import { useEffect, useState } from "react";

// Mock brand logos - in production, these would be actual brand logos
const brandLogos = [
  { name: "Amazon", logo: "🛒" },
  { name: "Big Bazaar", logo: "🏪" },
  { name: "Starbucks", logo: "☕" },
  { name: "Cinepolis", logo: "🎬" },
  { name: "Treebo", logo: "🏨" },
  { name: "Blowhot", logo: "🔥" },
  { name: "Wallop", logo: "⚡" },
  { name: "Cheesiano", logo: "🧀" },
  { name: "Myntra", logo: "👕" },
  { name: "Flipkart", logo: "📱" },
  { name: "Zomato", logo: "🍔" },
  { name: "BookMyShow", logo: "🎭" }
];

const BrandCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brandLogos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Available Vouchers From Top Brands
          </h2>
          <p className="text-muted-foreground">
            Up to 40% off on Gift Vouchers from 100+ trusted brands
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / 6}%)` }}
          >
            {[...brandLogos, ...brandLogos].map((brand, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-32 mx-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {brand.logo}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {brand.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;