import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry from ${formData.name} - BrandWorld`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACompany: ${formData.company}%0D%0AMessage: ${formData.message}`;
    window.open(`mailto:business@brandworld.co.in?subject=${subject}&body=${body}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-16 px-4 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Get in touch for bulk orders, corporate gifting, or any inquiries
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Corporate Office</h3>
                <p className="text-muted-foreground text-sm">
                  501, Meadows Tower, Sahar Plaza,<br />
                  Sir M.V. Road, Andheri (E), Mumbai 400059
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">
                  +91 88283 26776<br />
                  +91 93262 88638
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">
                  business@brandworld.co.in
                </p>
              </div>
            </div>

            <div className="h-64 bg-muted rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0846688834073!2d72.8673597749139!3d19.114258982125676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c85c14406565%3A0x93e2ea4ecad7c8a7!2sMeadows%20Tower%2C%20Sahar%20Plaza%2C%20Sir%20M.V.%20Rd%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400059!5e0!3m2!1sen!2sin!4v1674567890123!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-soft">
            <h3 className="text-xl font-semibold text-foreground mb-6">Contact Support</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="company"
                    placeholder="Company Name (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full" variant="brand">
                <Send className="mr-2 h-4 w-4" />
                Send Enquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;