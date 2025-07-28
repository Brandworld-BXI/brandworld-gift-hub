import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import hero images
import heroGiftingImage from "@/assets/hero-gifting.jpg";
import heroElectronicsImage from "@/assets/hero-electronics.jpg";
import heroDiningImage from "@/assets/hero-dining.jpg";
import heroEntertainmentImage from "@/assets/hero-entertainment.jpg";
import heroLifestyleImage from "@/assets/hero-lifestyle.jpg";
import heroTravelImage from "@/assets/hero-travel.jpg";

const DynamicHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: heroGiftingImage,
      title: "Premium Gift Vouchers",
      subtitle: "Perfect for every special moment and celebration",
      color: "from-purple-600/85 to-pink-600/85"
    },
    {
      image: heroElectronicsImage,
      title: "Electronics & Gadgets",
      subtitle: "Cutting-edge technology at unbeatable prices",
      color: "from-blue-600/85 to-cyan-500/85"
    },
    {
      image: heroDiningImage,
      title: "Dining & Culinary",
      subtitle: "Exquisite flavors and memorable dining experiences",
      color: "from-orange-600/85 to-amber-500/85"
    },
    {
      image: heroEntertainmentImage,
      title: "Entertainment Hub",
      subtitle: "Movies, games, music and endless fun",
      color: "from-purple-600/85 to-violet-500/85"
    },
    {
      image: heroLifestyleImage,
      title: "Lifestyle & Fashion",
      subtitle: "Elegance and style that defines you",
      color: "from-pink-600/85 to-rose-500/85"
    },
    {
      image: heroTravelImage,
      title: "Travel & Adventures",
      subtitle: "Discover amazing destinations and create memories",
      color: "from-emerald-600/85 to-teal-500/85"
    }
  ];

  const redirectToExplore = () => {
    window.open("https://brandworld-voucher.netlify.app", "_blank");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-[ken-burns_8s_ease-in-out_infinite]"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.color}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block text-white text-5xl md:text-7xl drop-shadow-2xl font-black tracking-wide">
                BrandWorld
              </span>
              <span className="block text-xl md:text-3xl font-medium mt-4 drop-shadow-xl text-white/95 leading-relaxed">
                Buy Gift Vouchers & Curated Products at Special Prices
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-lg font-medium leading-relaxed">
              Available for individual and corporate gifting — explore & purchase instantly.
            </p>
            
            <Button 
              onClick={redirectToExplore}
              variant="hero" 
              size="lg"
              className="text-lg px-10 py-5 h-auto transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-white/30 hover:border-white/50"
            >
              Explore to Buy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Category Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-accent scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Floating Category Label */}
        <div className="absolute top-1/4 right-8 hidden lg:block">
          <div className="bg-black/60 backdrop-blur-md rounded-xl p-6 text-white border border-white/20 shadow-2xl">
            <div className="text-sm opacity-90 font-medium">Now Showing</div>
            <div className="font-bold text-lg mt-1">{slides[currentSlide].title}</div>
            <div className="text-sm opacity-80 mt-1 leading-relaxed">{slides[currentSlide].subtitle}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicHero;