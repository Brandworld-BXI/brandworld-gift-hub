import { Percent, Users, Zap, Shield } from "lucide-react";

const benefits = [
  {
    icon: Percent,
    title: "Save 20–40%",
    description: "Get exclusive discounts on top brand vouchers and gift cards",
  },
  {
    icon: Users,
    title: "Perfect for Bulk Gifting",
    description: "Ideal solution for employee rewards and corporate gifting programs",
  },
  {
    icon: Zap,
    title: "Instant Digital Delivery",
    description: "Receive your vouchers immediately via email after purchase",
  },
  {
    icon: Shield,
    title: "Trusted by 200+ Brands",
    description: "Partner with leading brands across multiple industries",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose BrandWorld
          </h2>
          <p className="text-lg text-muted-foreground">
            Unmatched benefits for smart gifting solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-success/20 transition-colors duration-300">
                <benefit.icon className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;