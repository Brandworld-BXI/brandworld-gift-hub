import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import lifestyleImage from "@/assets/lifestyle-category.jpg";
import giftingImage from "@/assets/gifting-category.jpg";
import electronicsImage from "@/assets/electronics-category.jpg";
import diningImage from "@/assets/dining-category.jpg";
import entertainmentImage from "@/assets/entertainment-category.jpg";
import travelImage from "@/assets/travel-category.jpg";

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
];

const CategoryShowcase = () => {
  const redirectToExplore = () => {
    window.open("https://brandworld-voucher.netlify.app", "_blank");
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our Categories
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover amazing deals across multiple categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={redirectToExplore}
            variant="brand" 
            size="lg"
            className="text-lg px-8 py-4 h-auto"
          >
            Explore to Buy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;