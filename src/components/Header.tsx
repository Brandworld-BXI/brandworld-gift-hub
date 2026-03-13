import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Header = () => {
  const redirectToExplore = () => {
    window.open("https://voucher.brandworld.co.in/", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg transition-all duration-300 supports-[backdrop-filter]:bg-background/75">
  <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex flex-col md:flex-row items-center md:items-center justify-between gap-2">
  <div className="flex flex-col md:flex-row items-center md:items-center space-y-1 md:space-y-0 md:space-x-3" style={{ minWidth: "160px" }}>
          <div className="flex-shrink-0">
            <img
              src="/lovable-uploads/9040e52d-de76-4a94-9cf1-147a9404e0c9.png"
              alt="BrandWorld Logo"
              style={{ width: "100%", height: "auto", maxWidth: "110px" }}
            />
          </div>

          <div className="mt-2 md:mt-0 text-center md:text-left max-w-xl">
            <div className="text-sm md:text-sm text-foreground font-medium">Smarter Trading, Seamless Procurement</div>
            <div className="text-xs md:text-xs text-muted-foreground mt-1 whitespace-nowrap">
              Connecting businesses and consumers to curated products and services with speed, authenticity, and efficiency
            </div>
          </div>
        </div>

        <div className="flex items-center mt-3 md:mt-0">
          <Button onClick={redirectToExplore} variant="brand" size="sm">
            <ExternalLink className="mr-2 h-4 w-4" />
            Explore to Buy
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;