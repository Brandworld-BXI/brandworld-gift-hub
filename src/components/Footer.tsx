import { Instagram, Facebook } from "lucide-react";
import TermsModal from "./TermsModal";
import PrivacyModal from "./PrivacyModal";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const openInstagram = () => {
    window.open("https://instagram.com/brandworld.co.in", "_blank");
  };

  const openFacebook = () => {
    window.open("https://www.facebook.com/profile.php?id=61583914632121", "_blank");
  };

  console.log(new Date().getFullYear());
  const Year = new Date().getFullYear();
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  }

  const handleNavigateAndScrollTop = (path: string) => {
    // Immediately jump to top so the new page/modal opens at the top
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
    navigate(path);
    // A small delay to ensure route change has rendered, then ensure we're at top
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    }, 50);
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // If we're not on the home page (where sections live), navigate there first,
    // then attempt to scroll after a short delay to allow the page to render.
    navigate("/");
    setTimeout(() => {
      const e = document.getElementById(id);
      if (e) e.scrollIntoView({ behavior: "smooth" });
    }, 350);
  }

  return (
  <footer className="bg-primary text-primary-foreground py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <img
              src="/lovable-uploads/9040e52d-de76-4a94-9cf1-147a9404e0c9.png"
              alt="BrandWorld Logo"
              className="h-16 w-auto mb-1 brightness-0 invert"
              style={{ minWidth: "auto", height: "150px", marginTop: "-50px" }}
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed" style={{ marginTop: "-20px" }}>
              Making it easier to discover products, services, media solutions, and brand vouchers in one place
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("about")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("how-it-works")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  How it Works
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigateAndScrollTop("/terms")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms & Conditions
                </button>
              </li>
              <li>
                {/* <PrivacyModal> */}
                <button onClick={() => handleNavigateAndScrollTop("/privacy")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </button>
                {/* </PrivacyModal> */}
              </li>
              <li><a href="mailto:business@brandworld.co.in" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact Support</a></li>
            </ul>
            <br></br>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-2">
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
              GST : 27ABBFB2363D1ZW<br />
              PAN : ABBFB2363D
            </p>
          </div>
        </div>

  <div className="border-t border-primary-foreground/20 pt-2 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {Year} BrandWorld. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;