import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

const CallToAction = () => {
  const redirectToExplore = () => {
    window.open("https://voucher.brandworld.co.in/", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-accent/10 to-coral/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Gift className="h-16 w-16 text-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            🎉 Ready to save on your next gift?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            👉 Tap the button below to start exploring amazing deals!
          </p>
        </div>
        
        <Button 
          onClick={redirectToExplore}
          variant="hero" 
          size="lg"
          className="text-xl px-12 py-6 h-auto"
        >
          Explore to Buy
          <ArrowRight className="ml-3 h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;