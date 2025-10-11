import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling past first screen
      if (scrollPosition > windowHeight * 0.8 && !isHidden) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHidden]);

  const redirectToExplore = () => {
    window.open("https://voucher.brandworld.co.in/", "_blank");
  };

  const hideCTA = () => {
    setIsHidden(true);
    setIsVisible(false);
  };

  if (!isVisible || isHidden) return null;

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 animate-fade-in">
      <div className="bg-brand text-primary-foreground p-4 rounded-lg shadow-lg flex items-center justify-between">
        <div className="flex-1">
          <div className="font-semibold text-sm">Ready to save on vouchers?</div>
          <div className="text-xs opacity-90">Up to 40% off • Instant delivery</div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            onClick={redirectToExplore}
            variant="secondary"
            size="sm"
            className="text-xs"
          >
            Explore
            <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
          <button 
            onClick={hideCTA}
            className="p-1 hover:bg-white/20 rounded"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileCTA;