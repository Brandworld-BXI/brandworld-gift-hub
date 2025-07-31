import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface TermsModalProps {
  children: React.ReactNode;
}

const TermsModal = ({ children }: TermsModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Terms & Conditions</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-6 text-sm text-muted-foreground">
            <p>
              By using our Website, placing an order, or accessing any part of the platform, you:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Confirm that you are legally capable of entering binding contracts;</li>
              <li>Accept and agree to be bound by these Terms & Conditions;</li>
            </ul>
            
            <p>
              The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this Website and accepting the firm's terms and conditions. "The Firm", "Ourselves", "We" and "Us", refers to our Firm. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.
            </p>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Privacy Statement</h3>
              <p>
                We are committed to protecting your privacy. Only authorized personnel, on a strict need-to-know basis, may use any information collected from individual customers, and handled in compliance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Confidentiality</h3>
              <p>
                Any information concerning the Client and their respective Client Records may be passed to third parties. However, Client records are regarded as confidential and therefore will not be divulged to any third party, other than our manufacturer/supplier(s), and if legally required to do so, to the appropriate authorities.
              </p>
              
              <p className="mt-3">
                All information concerning the Client and their records shall be treated as confidential. Such records will not be disclosed to any third party except:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>where disclosure is necessary for the performance of our services (e.g., to our suppliers or service partners);</li>
                <li>Where the Client has given explicit consent; or</li>
                <li>Where required by law or regulatory authority.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Disclaimer</h3>
              <h4 className="font-medium text-foreground mb-2">Exclusions and Limitations</h4>
              <p>
                The information on this Website is provided on an "as is" basis. To the fullest extent permitted by law, the Firm hereby:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Disclaims all representations and warranties, whether express or implied, relating to this Website</li>
                <li>Excludes all liability for any loss or damage, whether direct, indirect, incidental, consequential, or special</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Payment</h3>
              <p>
                Payment to www.BrandWorld.co.in will be processed by Payment Gateways, which offers the following payment options:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Credit Cards</li>
                <li>Debit Cards</li>
                <li>UPI</li>
                <li>Wallets</li>
                <li>Netbanking</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Payment Policy</h3>
              <p>
                Payments for the Products/ Brand Value Vouchers have to be made upfront for buying Products/ Value Vouchers from BrandWorld.co.in.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Cancellation Policy</h3>
              <p>Cancellation may happen on account of the following:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>The total payment towards the cost of the "Voucher/Products" is not received</li>
                <li>The requested "Voucher/Product" may no longer be available / or is out of stock</li>
                <li>The principal brand whose "Voucher/Product" we are selling decides to decline to provide the "Voucher/Product"</li>
                <li>Any other technical reason</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Refund Policy</h3>
              <p>
                Refund policy in terms of which the option of replacement and/or refund is solely decided by the Firm. All Vouchers/product listed under a particular category may not have the same refund policy.
              </p>
              
              <h4 className="font-medium text-foreground mb-2 mt-3">The Procedure to Return the Products</h4>
              <p>
                The member must initiate the process for returning products by raising a formal concern via email to the Firm's representative within 48 hours from the time of product receipt.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Voucher Policy</h3>
              <p>
                This Voucher Policy governs the terms and conditions applicable to the purchase, redemption, and use of vouchers.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Upon successful payment by client, the Firm releases the Codes for Vouchers.</li>
                <li>Upon the transmission of these Codes to the client, Brandworld would not be responsible, liable, or accountable for any issues that may arise from the use of the Voucher Codes.</li>
                <li>Brandworld operates as a website platform to buy vouchers and does not assume responsibility for any issues or guarantees associated with brand vouchers.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Contact Information</h3>
              <p>For any disputes:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Email: business@brandworld.co.in</li>
                <li>Contact: +91 88283 26776/+91 93262 88638</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Firm Registration</h3>
              <p>
                This Firm is registered in India as BrandWorld, having its registered office at Floor No.: 1407 Wing C, Building No./Flat No.: Fantasy Land, Name Of Premises/Building: CTS no 1, Road/Street: J V Link Road, Locality/Sub Locality: Jogeshwari East, City/Town/Village: Mumbai, District: Mumbai Suburban, State: Maharashtra, PIN Code: 400060
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Agreement Confirmation</h3>
              <p>I, by using the Website, agree and accept the following:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cancellation & Refund Policy</li>
              </ul>
              <p className="mt-3">
                You are requested to stop using the site immediately if you don't agree to the Terms & Conditions.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8 font-medium">
              Last updated: December 2024
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsModal;