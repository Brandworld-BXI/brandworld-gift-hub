import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import lifestyleImage from "@/assets/lifestyle-category.jpg";
import giftingImage from "@/assets/gifting-category.jpg";
import electronicsImage from "@/assets/electronics-category.jpg";
import diningImage from "@/assets/dining-category.jpg";
import entertainmentImage from "@/assets/entertainment-category.jpg";
import travelImage from "@/assets/travel-category.jpg";
// media image will be served from the built assets folder

const categories = [
  {
    title: "🛍️ Lifestyle",
    description: "Fashion, beauty, and home essentials",
    image: lifestyleImage,
  },
  {
    title: "🎁 Gifting",
    description: "Perfect presents for every occasion",
    image: giftingImage,
  },
  {
    title: "💻 Electronics",
    description: "Latest gadgets and tech accessories",
    image: electronicsImage,
  },
  {
    title: "🍽️ Dining & Hospitality",
    description: "Restaurants, cafes, and culinary experiences",
    image: diningImage,
  },
  {
    title: "🎬 Entertainment",
    description: "Movies, games, and fun activities",
    image: entertainmentImage,
  },
  {
    title: "🌍 Travel & Stay",
    description: "Hotels, flights, and vacation packages",
    image: travelImage,
  },
  {
    title: "📺 Media",
    description: "Media, advertising and campaign solutions",
    image: "/media.jpg",
  },
];

const CategoryShowcase = () => {
  const redirectToExplore = () => {
    window.open("https://voucher.brandworld.co.in/", "_blank");
  };

  return (
  <section className="scroll-mt-20 md:scroll-mt-24 py-12 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Categories
          </h2>
            <p className="text-base text-muted-foreground mb-6">
            Discover product and services across diverse categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 bg-card aspect-square"
            >
              <div className="h-2/3 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-3 h-1/3 flex items-center justify-center">
                <h3 className="text-sm font-semibold text-foreground text-center">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;