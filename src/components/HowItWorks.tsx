import { Search, ShoppingCart, Gift } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse by Category",
    description: "Explore our wide range of gift vouchers and digital cards across multiple categories",
  },
  {
    icon: ShoppingCart,
    title: "Click Explore to Buy",
    description: "Get redirected to our secure purchase portal to complete your order seamlessly",
  },
  {
    icon: Gift,
    title: "Receive Vouchers Instantly",
    description: "Get your digital vouchers delivered instantly to your email and start using them right away",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple steps to get your favorite brand vouchers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <step.icon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;