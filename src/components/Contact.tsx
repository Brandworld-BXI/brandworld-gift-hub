import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team for any inquiries
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  📍 Corporate Office
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  501, Meadows Tower, Sahar Plaza,<br />
                  Sir M.V. Road, Andheri (E), Mumbai 400059
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  📞 Phone
                </h3>
                <p className="text-muted-foreground">
                  +91 88283 26776
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  📧 Email
                </h3>
                <p className="text-muted-foreground">
                  business@brandworld.co.in
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg shadow-soft overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8479563384373!2d72.86736007518945!3d19.11729988207582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c85a7d3f1b7b%3A0x7c0b0b0b0b0b0b0b!2sSahar%20Plaza%2C%20Sir%20M.V.%20Rd%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400059!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BrandWorld Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;