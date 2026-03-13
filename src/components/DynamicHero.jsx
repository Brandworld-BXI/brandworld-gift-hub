import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import hero images
import hero1 from "@/assets/Hero1.svg";
import hero2 from "@/assets/Hero2.svg";
import hero3 from "@/assets/Hero3.svg";
import hero4 from "@/assets/Hero4.svg";

const DynamicHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: hero1,
      title: "Celebrate Moments",
      subtitle: "Gift with Brandworld",
      description: "Perfect for every special moment and celebration",
      color: "from-purple-600/90 to-pink-600/90"
    },
    {
      image: hero2,
      title: "Explore & Discover",
      subtitle: "Curated Picks",
      description: "Handpicked products and vouchers for every occasion",
      color: "from-emerald-600/90 to-teal-500/90"
    },
    {
      image: hero3,
      title: "Tech That Delights",
      subtitle: "Top Electronic Picks",
      description: "Cutting-edge gadgets and electronics at special prices",
      color: "from-blue-600/90 to-cyan-500/90"

    },
    {
      image: hero4,
      title: "Escape in Style",
      subtitle: "Premium Hotel Vouchers",
      description: "Hotel & staycation experiences for memorable getaways",
      color: "from-orange-600/90 to-amber-500/90"
    },
  ];

  const redirectToExplore = () => {
    window.open("https://voucher.brandworld.co.in/", "_blank");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
  <section className="scroll-mt-20 md:scroll-mt-24 relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="absolute top-6 right-8 z-50 text-white text-lg font-semibold">
  {slides[currentSlide].mouseText}
</div>
      {/* No overlay content: hero shows only background slides (no text/boxes/button) */}
    </section>
  );
};

export default DynamicHero;