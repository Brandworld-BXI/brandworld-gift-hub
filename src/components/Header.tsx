import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Header = () => {
  const redirectToExplore = () => {
    window.open("https://brandworld-voucher.netlify.app", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg transition-all duration-300 supports-[backdrop-filter]:bg-background/75">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-brand/10 to-secondary/10 p-2 rounded-lg">
            <img 
              src="/lovable-uploads/9040e52d-de76-4a94-9cf1-147a9404e0c9.png" 
              alt="BrandWorld Logo" 
              className="h-16 w-auto"
            />
          </div>
          <div className="hidden md:block">
            <div className="text-lg font-bold text-foreground">BrandWorld</div>
            <div className="text-xs text-muted-foreground">Explore Gift Vouchers & Deals</div>
          </div>
        </div>
        
        <Button 
          onClick={redirectToExplore}
          variant="brand"
          size="sm"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Explore to Buy
        </Button>
      </div>
    </header>
  );
};

export default Header;