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
      title: "Celebrate Moments",
      subtitle: "Gift with Brandworld",
      description: "Perfect for every special moment and celebration",
      color: "from-purple-600/90 to-pink-600/90"
    },
    {
      image: heroTravelImage,
      title: "Escape in Style",
      subtitle: "Premium Hotel Vouchers",
      description: "Hotel & staycation experiences for memorable getaways",
      color: "from-emerald-600/90 to-teal-500/90"
    },
    {
      image: heroElectronicsImage,
      title: "Tech That Delights",
      subtitle: "Top Electronic Picks",
      description: "Cutting-edge gadgets and electronics at special prices",
      color: "from-blue-600/90 to-cyan-500/90"
    },
    {
      image: heroDiningImage,
      title: "Treat Their Taste Buds",
      subtitle: "Dining Vouchers & More",
      description: "Exquisite flavors and memorable dining experiences",
      color: "from-orange-600/90 to-amber-500/90"
    },
    {
      image: heroLifestyleImage,
      title: "Style That Speaks",
      subtitle: "Fashion-Focused Vouchers",
      description: "Elegance and style that defines your personality",
      color: "from-pink-600/90 to-rose-500/90"
    }
  ];

  const redirectToExplore = () => {
    window.open("https://voucher.brandworld.co.in/login", "_blank");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Video-Style Background */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[ken-burns_8s_ease-in-out_infinite]"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} transition-all duration-1000`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Main Brand Title */}
          <div className="mb-8">
            <h1 className="text-white text-6xl md:text-8xl drop-shadow-2xl font-black tracking-wide mb-4 animate-[slideInDown_1s_ease-out]">
              BrandWorld
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-medium drop-shadow-xl animate-[slideInUp_1s_ease-out_0.2s_both]">
              Buy Gift Vouchers & Curated Products at Special Prices
            </p>
          </div>

          {/* Dynamic Content Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl animate-[zoomIn_1s_ease-out_0.4s_both]">
            <div className="mb-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 animate-[fadeInLeft_0.8s_ease-out]">
                {slides[currentSlide].title}
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-white/95 mb-3 animate-[fadeInRight_0.8s_ease-out_0.1s_both]">
                {slides[currentSlide].subtitle}
              </h3>
              <p className="text-lg text-white/85 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
                {slides[currentSlide].description}
              </p>
            </div>
            
            <Button 
              onClick={redirectToExplore}
              variant="hero" 
              size="lg"
              className="text-lg px-12 py-6 h-auto transition-all duration-500 hover:scale-110 shadow-2xl border-2 border-white/40 hover:border-white/70 animate-[bounceIn_1s_ease-out_0.6s_both]"
            >
              Explore to Buy
              <ArrowRight className="ml-3 h-6 w-6" />
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

        {/* Progress Bar */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64">
          <div className="bg-white/20 rounded-full h-1 overflow-hidden">
            <div 
              className="bg-white h-full transition-all duration-300 ease-linear"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicHero;