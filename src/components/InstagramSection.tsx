import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Using the uploaded promotional images as Instagram post examples
const instagramPosts = [
  {
    id: 1,
    image: "/lovable-uploads/91fca7ec-2452-4918-a6a1-c0b911ce2c40.png",
    alt: "Chinese Vouchers Promotion"
  },
  {
    id: 2,
    image: "/lovable-uploads/fbffd80c-5b13-4534-8dd4-b7c921281fe1.png",
    alt: "Crispy Vouchers Promotion"
  },
  {
    id: 3,
    image: "/lovable-uploads/95c13240-f5e4-4396-a5a2-40f154d501f5.png",
    alt: "Cheesy Vouchers Promotion"
  },
  {
    id: 4,
    image: "/lovable-uploads/570c84e6-7bd8-4f75-a905-181d60df050e.png",
    alt: "Baskin-Robbins Vouchers"
  },
  {
    id: 5,
    image: "/lovable-uploads/c368bed4-2cff-450d-aa44-3510d5fde6ed.png",
    alt: "Karibo Vouchers"
  }
];

const InstagramSection = () => {
  const openInstagram = () => {
    window.open("https://instagram.com/brandworld.co.in", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by brands. Loved by gifters.
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Follow us on Instagram for the latest deals and promotions
          </p>
          <Button 
            onClick={openInstagram}
            variant="outline"
            className="mb-8"
          >
            <Instagram className="mr-2 h-4 w-4" />
            @brandworld.co.in
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {instagramPosts.map((post) => (
            <div 
              key={post.id}
              className="aspect-square overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer group"
              onClick={openInstagram}
            >
              <img 
                src={post.image} 
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;