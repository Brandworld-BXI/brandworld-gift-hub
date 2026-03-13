import { Search, ShoppingCart, Gift, Headphones } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse by Category",
    description: "Explore our wide range of offerings of products, services and gift cards",
  },
  {
    icon: ShoppingCart,
    title: "Explore to Buy",
    description: "Pick your requirements and place an order",
  },
  {
    icon: Gift,
    title: "Order Fulfilment",
    description: (
      <>
        Digital - Delivered instantly
        <br />
        Physical - Shipped directly
      </>
    ),
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Smooth delivery & assistance",
  },
];

const HowItWorks = () => {
  return (
  <section id="how-it-works" className="scroll-mt-20 md:scroll-mt-24 py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We have got everything you need – products, services, media solutions, and reward vouchers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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