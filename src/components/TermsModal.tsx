import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const TermsModal = () => {

  return (
    <div style={{
      marginTop:"150px",
      paddingTop: "100px",
      padding: "20px",
      marginBottom: "20px",
      maxWidth: "800px",
      marginLeft: "auto",
      marginRight: "auto",
    }}>
      <h1 className="text-2xl font-bold">Terms & Conditions</h1>

      <div className="space-y-6 text-sm text-muted-foreground">

        <p>
        These Terms & Conditions govern your use of the website www.brandworld.co.in and the services, products and voucher trading platform operated by BrandWorld. By accessing the website, placing orders, purchasing products, or redeeming vouchers you agree to be legally bound by these Terms.
        </p>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Definitions</h3>
          <p>
          “BrandWorld”, “Firm”, “We”, “Us” or “Our” refers to BrandWorld, an independent partnership firm operating as a trading and procurement platform.  
          “User”, “Client”, “Customer”, “You” refers to any individual or entity accessing the website.  
          “Products” refer to goods, corporate gifts, merchandise or other items offered for sale.  
          “Vouchers” refer to digital or physical brand vouchers issued through the platform.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Nature of Business</h3>
          <p>
          BrandWorld operates primarily as a procurement and trading platform facilitating business-to-business (B2B) and direct-to-consumer (D2C) transactions including corporate gifting, brand voucher distribution, marketplace procurement, MICE services and media planning solutions across India.
          </p>
          <p className="mt-3">
          BrandWorld may act as a reseller, trading intermediary or facilitator between suppliers, brands and customers. Unless expressly stated, BrandWorld does not manufacture the products listed on the platform.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Eligibility</h3>
          <p>
          By using this website you confirm that you are at least 18 years of age and legally capable of entering binding contracts under applicable Indian law.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Payment</h3>
          <p>
          Payments for products and brand vouchers must be made in advance through the payment gateways available on the website including Credit Cards, Debit Cards, UPI, Net Banking or Wallets.
          </p>
          <p className="mt-3">
          BrandWorld shall not be responsible for payment failures caused by banking networks, payment gateways or technical errors.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Order Acceptance</h3>
          <p>
          All orders are subject to product availability and supplier confirmation. BrandWorld reserves the right to cancel or modify orders due to pricing errors, stock unavailability, technical errors or supplier restrictions.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Voucher Policy</h3>
          <p>
          BrandWorld distributes brand vouchers issued by third-party brands. Upon successful payment voucher codes may be delivered digitally.
          </p>
          <p className="mt-3">
          Once voucher codes are issued, BrandWorld shall not be responsible for redemption restrictions, expiry, availability of products or services at the brand level. Redemption terms are governed by the respective brand issuing the voucher.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Cancellation Policy</h3>
          <p>Orders may be cancelled under the following circumstances:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
            <li>Payment not received successfully</li>
            <li>Product or voucher unavailable</li>
            <li>Brand supplier declines fulfilment</li>
            <li>Technical or pricing error</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Refund Policy</h3>
          <p>
          Refunds or replacements may be processed only in cases where products are received damaged, defective or materially different from the description.
          </p>
          <p className="mt-3">
          Complaints must be raised within 48 hours of delivery with video proof of unboxing. Products must be returned in original packaging with accessories where applicable.
          </p>
          <p className="mt-3">
          BrandWorld reserves the right to make the final decision on refund or replacement requests.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Intellectual Property</h3>
          <p>
          All content on the website including text, graphics, design, logos and software is the property of BrandWorld or its licensors. Unauthorized reproduction or commercial use is prohibited.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Third Party Links</h3>
          <p>
          The website may contain links to third-party websites or services. BrandWorld is not responsible for the content, privacy policies or practices of such third-party platforms.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Disclaimer</h3>
          <p>
          The website and services are provided on an “as is” and “as available” basis. BrandWorld does not guarantee uninterrupted access, accuracy of information or suitability of products for specific purposes.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Limitation of Liability</h3>
          <p>
          To the maximum extent permitted under Indian law BrandWorld shall not be liable for indirect, incidental or consequential damages including loss of profits, data or business opportunities arising from use of the platform.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Indemnity</h3>
          <p>
          Users agree to indemnify and hold BrandWorld harmless from any claims, damages, liabilities or expenses arising from misuse of the website or breach of these Terms.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Force Majeure</h3>
          <p>
          BrandWorld shall not be liable for delays or failure to perform obligations due to events beyond reasonable control including natural disasters, war, government restrictions, internet outages or supply chain disruptions.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Dispute Resolution</h3>
          <p>
          Any disputes arising from these Terms shall first be attempted to be resolved amicably. If unresolved within thirty days, the dispute shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996.
          </p>
          <p className="mt-3">
          The seat of arbitration shall be Mumbai, Maharashtra and proceedings shall be conducted in English.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Governing Law</h3>
          <p>
          These Terms shall be governed by and interpreted in accordance with the laws of India. Courts located in Mumbai, Maharashtra shall have exclusive jurisdiction.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Registered Office</h3>
          <p>
          BrandWorld  
          Unit Part B on 3rd Floor, Corporate Centre  
          Andheri Kurla Road, Opp. VITS Hotel  
          Andheri East, Mumbai – 400059  
          Maharashtra, India
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-foreground mb-3">Contact Information</h3>
          <p>Email: business@brandworld.co.in</p>
          <p>Phone: +91 98677 38393</p>
        </section>

      </div>
    </div>
  );
};

export default TermsModal;