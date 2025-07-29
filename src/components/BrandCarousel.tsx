import { useEffect, useState } from "react";

// Brand logos with actual uploaded images
const brandLogos = [
  { name: "Barbeque Nation", logo: "/lovable-uploads/e0c04fa4-51aa-46d3-afe1-bb69f2a86c33.png" },
  { name: "Wonderla", logo: "/lovable-uploads/4640c789-8104-4448-a5ac-f1b069b5103b.png" },
  { name: "Salt Indian Restaurant", logo: "/lovable-uploads/e1116578-348d-4add-b458-ad7f81ba67dd.png" },
  { name: "Finch", logo: "/lovable-uploads/24141a23-0524-443e-801d-e417abf15a34.png" },
  { name: "Chili's", logo: "/lovable-uploads/4f5ff060-e4b3-44f9-9c99-6452b072a1a2.png" },
  { name: "Cheesiano Pizza", logo: "/lovable-uploads/dd0da23e-ca1d-4606-9cf6-f4707fca102c.png" },
  { name: "Harley's", logo: "/lovable-uploads/9a32946c-82c2-4e28-8d1b-9f4ddc5dd766.png" },
  { name: "Wow! Momo", logo: "/lovable-uploads/27184438-0e88-4131-a176-71b5096aa359.png" },
  { name: "Baskin Robbins", logo: "/lovable-uploads/01bc961b-a073-410f-bd9e-6de14e347f23.png" },
  { name: "Smaaash", logo: "/lovable-uploads/5f294c40-1db4-46b9-8d2c-71a34fee1859.png" }
];

const BrandCarousel = () => {
  return (
    <section className="py-12 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Available Vouchers From Top Brands
          </h2>
          <p className="text-muted-foreground">
            Up to 40% off on Gift Vouchers from 100+ trusted brands
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-32 mx-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-lg shadow-sm flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {brand.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;