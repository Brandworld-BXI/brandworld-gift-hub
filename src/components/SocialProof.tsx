import { Star, Users, Shield, Zap } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "HR Manager, Tech Corp",
    content: "BrandWorld made our employee rewards program seamless. Great discounts and instant delivery!",
    rating: 5
  },
  {
    name: "Raj Patel",
    role: "Event Organizer",
    content: "Perfect for bulk gifting. Saved 45% on gift vouchers for our corporate event.",
    rating: 5
  },
  {
    name: "Anita Gupta",
    role: "Marketing Head",
    content: "Trusted partner for all our gifting needs. Wide range of brands and excellent service.",
    rating: 5
  }
];

const trustIcons = [
  { icon: Zap, label: "Instant Delivery" },
  { icon: Shield, label: "100% Secure" },
  { icon: Users, label: "200+ Brands" },
  { icon: Star, label: "Verified Platform" }
];

const SocialProof = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Why Brands & Professionals Trust BrandWorld
          </h2>
          <p className="text-muted-foreground">
            Join thousands of satisfied customers who choose us for their gifting needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-soft">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-foreground text-sm">
                  {testimonial.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustIcons.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-success/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <item.icon className="h-6 w-6 text-success" />
              </div>
              <div className="text-sm font-medium text-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;