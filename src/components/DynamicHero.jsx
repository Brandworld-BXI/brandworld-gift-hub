import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import category images
import diningImage from "@/assets/dining-category.jpg";
import electronicsImage from "@/assets/electronics-category.jpg";
import entertainmentImage from "@/assets/entertainment-category.jpg";
import giftingImage from "@/assets/gifting-category.jpg";
import lifestyleImage from "@/assets/lifestyle-category.jpg";
import travelImage from "@/assets/travel-category.jpg";

const DynamicHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: giftingImage,
      title: "Premium Gift Vouchers",
      subtitle: "Perfect for every occasion",
      color: "from-purple-600/80 to-pink-600/80"
    },
    {
      image: electronicsImage,
      title: "Electronics & Gadgets",
      subtitle: "Latest tech at amazing prices",
      color: "from-blue-600/80 to-cyan-600/80"
    },
    {
      image: diningImage,
      title: "Dining & Food",
      subtitle: "Delicious experiences await",
      color: "from-orange-600/80 to-red-600/80"
    },
    {
      image: entertainmentImage,
      title: "Entertainment",
      subtitle: "Movies, games & more",
      color: "from-purple-600/80 to-indigo-600/80"
    },
    {
      image: lifestyleImage,
      title: "Lifestyle & Fashion",
      subtitle: "Style that speaks to you",
      color: "from-pink-600/80 to-rose-600/80"
    },
    {
      image: travelImage,
      title: "Travel & Adventures",
      subtitle: "Explore the world",
      color: "from-green-600/80 to-teal-600/80"
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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-[scale-zoom_4s_ease-in-out_infinite]"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color}`} />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            <span className="block text-accent text-5xl md:text-7xl drop-shadow-lg">
              BrandWorld
            </span>
            <span className="block text-2xl md:text-4xl font-normal mt-2 drop-shadow-md">
              Buy Gift Vouchers & Curated Products at Special Prices
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto drop-shadow-sm">
            Available for individual and corporate gifting — explore & purchase instantly.
          </p>
          
          <Button 
            onClick={redirectToExplore}
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-4 h-auto animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
          >
            Explore to Buy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
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
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
            <div className="text-sm opacity-80">Now Showing</div>
            <div className="font-semibold">{slides[currentSlide].title}</div>
            <div className="text-xs opacity-70">{slides[currentSlide].subtitle}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicHero;