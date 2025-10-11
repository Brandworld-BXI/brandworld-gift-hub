import Header from "../components/Header";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using BrandWorld's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
              <p>
                BrandWorld provides digital gift vouchers and curated products at discounted rates through our platform. We facilitate the purchase of vouchers from various partner brands for individual and corporate gifting purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Voucher Terms</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>All vouchers are digital and will be delivered via email</li>
                <li>Voucher validity periods are determined by the issuing brand</li>
                <li>Vouchers cannot be exchanged for cash</li>
                <li>Lost or stolen vouchers cannot be replaced</li>
                <li>Vouchers are subject to the terms and conditions of the issuing brand</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment and Pricing</h2>
              <p>
                All prices are displayed in Indian Rupees (INR) and include applicable taxes. Payment must be completed through our secure payment gateway. Discounted rates are subject to availability and may change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Refund Policy</h2>
              <p>
                Due to the digital nature of our products, all sales are final. Refunds may be considered only in cases of technical errors or duplicate transactions, subject to verification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate information during purchase</li>
                <li>Safeguard voucher codes and details</li>
                <li>Use vouchers in accordance with brand terms</li>
                <li>Report any issues within 24 hours of purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p>
                BrandWorld acts as an intermediary between customers and brand partners. We are not liable for issues related to voucher redemption, brand services, or merchant policies beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Information</h2>
              <p>
                For any questions regarding these terms, please contact us at:
                <br />
                Email: business@brandworld.co.in
                <br />
                Phone: +91 98677 38393
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
              <p>
                BrandWorld reserves the right to modify these terms at any time. Updated terms will be posted on our website and will be effective immediately upon posting.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;