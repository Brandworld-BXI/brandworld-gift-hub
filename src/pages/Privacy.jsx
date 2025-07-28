import Header from "../components/Header";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Personal information (name, email address, phone number)</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Communication preferences</li>
                <li>Purchase history and voucher usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Process and fulfill your orders</li>
                <li>Send you digital vouchers and receipts</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>With brand partners to fulfill voucher orders</li>
                <li>With payment processors to complete transactions</li>
                <li>With service providers who assist in our operations</li>
                <li>When required by law or to protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Request information about how we use your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Third-Party Links</h2>
              <p>
                Our service may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: business@brandworld.co.in
                <br />
                Phone: +91 88283 26776
                <br />
                Address: 501, Meadows Tower, Sahar Plaza, Sir M.V. Road, Andheri (E), Mumbai 400059
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
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

export default Privacy;