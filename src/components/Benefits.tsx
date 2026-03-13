import { Percent, Users, Zap, Shield } from "lucide-react";

const benefits = [
  {
    icon: Percent,
    title: "Multi - brand universe",
    description: "Access a wide network of brands, products, and services through a single trading partner",
  },
  {
    icon: Users,
    title: "Seamless B2B & D2C",
    description: "Enabling smooth buying and selling for both organizations and individual customers",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "Acting as a reliable trading agency for sourcing and fulfilling diverse business needs",
  },
  {
    icon: Zap,
    title: "Fast delivery & support",
    description: "Ensuring efficient order fulfilment with dedicated customer support",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Why Choose BrandWorld
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Unmatched benefits & Best deals
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