import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-vouchers.jpg";

const Hero = () => {
  const redirectToExplore = () => {
    window.open("https://brandworld-voucher.netlify.app", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          <span className="block text-accent">BrandWorld</span>
          <span className="block text-2xl md:text-4xl font-normal mt-2">
            Smart Gifting at Discounted Prices
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto">
          Premium vouchers, instant delivery
        </p>
        
        <Button 
          onClick={redirectToExplore}
          variant="hero" 
          size="lg"
          className="text-lg px-8 py-4 h-auto"
        >
          Explore to Buy
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;