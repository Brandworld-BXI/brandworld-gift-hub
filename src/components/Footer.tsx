import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const openInstagram = () => {
    window.open("https://instagram.com/brandworld.co.in", "_blank");
  };

  const openFacebook = () => {
    window.open("https://facebook.com/brandworld.co.in", "_blank");
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src="/lovable-uploads/9040e52d-de76-4a94-9cf1-147a9404e0c9.png" 
              alt="BrandWorld Logo" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Making gifting smarter with exclusive brand vouchers and digital gift cards at discounted rates.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="mailto:business@brandworld.co.in" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <button 
                onClick={openInstagram}
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button 
                onClick={openFacebook}
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </button>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              business@brandworld.co.in<br />
              +91 88283 26776
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 BrandWorld. All rights reserved. | Designed with ❤️ for smart gifting solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;