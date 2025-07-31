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
              The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this Website and accepting the firm's terms and conditions. "The Firm", "Ourselves", "We" and "Us", refers to our Firm. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect of provision of the firm's stated services/products, in accordance with and subject to, prevailing Indian Law. Any use of the above terminology or other words in the singular, plural, capitalisation, and/or he/she or they, are taken as interchangeable and therefore as referring to the same.
            </p>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Privacy Statement</h3>
              <p>
                We are committed to protecting your privacy. Only authorized personnel, on a strict need-to-know basis, may use any information collected from individual customers, and handled in compliance with applicable data protection laws. We constantly review our systems and data to ensure the best possible service to our customers.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Confidentiality</h3>
              <p>
                Any information concerning the Client and their respective Client Records may be passed to third parties. However, Client records are regarded as confidential and therefore will not be divulged to any third party, other than our manufacturer/supplier(s), and if legally required to do so, to the appropriate authorities. Clients have the right to request sight of, and copies of any and all Client Records we keep, on the proviso that we are given reasonable notice of such a request. Clients are requested to retain copies of any literature issued in relation to the provision of our services. Where appropriate, we shall issue Clients with appropriate written information, handouts, or copies of records as part of an agreed contract, for the benefit of both parties.
              </p>
              
              <p className="mt-3">
                All information concerning the Client and their records shall be treated as confidential. Such records will not be disclosed to any third party except:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>where disclosure is necessary for the performance of our services (e.g., to our suppliers or service partners);</li>
                <li>Where the Client has given explicit consent; or</li>
                <li>Where required by law or regulatory authority.</li>
              </ul>
              
              <p className="mt-3">
                Clients may request access to their records, subject to providing reasonable notice. We reserve the right to verify the identity of the requester.
              </p>
              
              <p className="mt-3">
                Clients are advised to retain copies of any documents, communications, or literature provided in the course of service delivery. Where applicable, we will provide Clients with written documentation, handouts, or other materials in accordance with the agreed terms of engagement.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Disclaimer</h3>
              <h4 className="font-medium text-foreground mb-2">Exclusions and Limitations</h4>
              <p>
                The information on this Website is provided on an "as is" basis. To the fullest extent permitted by law, the Firm hereby:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Disclaims all representations and warranties, whether express or implied, relating to this Website, including but not limited to any warranties of accuracy, completeness, merchantability, fitness for a particular purpose, or non-infringement. This also includes any representations or warranties that may be provided by affiliates or third parties, and any errors, omissions, or inaccuracies contained in the Website, or related materials.</li>
                <li>Excludes all liability for any loss or damage, whether direct, indirect, incidental, consequential, or special, arising out of or in connection with your use of, or inability to use, the Website. This includes, without limitation, loss of business, revenue, profits, anticipated savings, goodwill, data, or damage to hardware, software, or other equipment, regardless of whether such losses were foreseeable or whether the Firm had been advised of the possibility of such losses.</li>
              </ul>
              
              <p className="mt-3">
                This Firm does not, however, exclude liability for death or personal injury caused by its negligence. The above exclusions and limitations apply only to the extent permitted by law. None of your statutory rights as a consumer are affected.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Payment</h3>
              <p>
                Payment to www.Brand World.co.in will be processed by Payment Gateways, which offers the following payment options:
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
              <h3 className="text-lg font-semibold text-foreground mb-3">Availability</h3>
              <p>
                Redistribution or republication of any part of this Website or its content is prohibited, including such by framing or other similar or any other means, without the express written consent of the Firm. The Firm does not warrant that the service from this Website will be uninterrupted, timely, or error-free, although it is provided to the best of our ability. By using this service, you thereby indemnify the Firm, its employees, agents, and affiliates against any loss or damage, in whatever manner, howsoever caused.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Links to this Website</h3>
              <p>
                You may not create a link to any page of this Website without our prior written consent. If you do create a link to a page of this platform, you do so at your own risk, and the exclusions and limitations set out above will apply to your use by linking to it.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Links from this Website</h3>
              <p>
                We do not actively monitor or review the content of other party's websites which are linked to from this Website. Opinions expressed or material appearing on such websites are not necessarily shared or endorsed by us and should not be regarded as the publisher of such opinions or material. Please be aware that we are not responsible for the privacy practices or content of those sites. We encourage our users to be aware when they leave our platform and to read the privacy statements of such sites. You should evaluate the security and trustworthiness of any other site connected to this platform or accessed through it before disclosing any personal information. The Firm will not accept any responsibility for any loss or damage in whatever manner, howsoever caused, resulting from your disclosure to third parties of personal information. We reserve the right to cancel any order for any reason, including suspected fraud or pricing errors.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Copyright Notice</h3>
              <p>
                Copyright and other relevant intellectual property rights exist on all text relating to the Firm's services and the full content of this Website.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Communication</h3>
              <p>
                We have several different e-mail addresses for different queries. These, and other contact information, can be found on our 'Contact Us' link on the Website, via official Firm literature, or through the Firm's stated telephone or mobile contact numbers. Email shall be considered the primary mode of communication.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Firm Registration</h3>
              <p>
                This Firm is registered in India as BrandWorld, having its registered office at Floor No.: 1407 Wing C, Building No./Flat No.: Fantasy Land, Name Of Premises/Building: CTS no 1, Road/Street: J V Link Road, Locality/Sub Locality: Jogeshwari East, City/Town/Village: Mumbai, District: Mumbai Suburban, State: Maharashtra, PIN Code: 400060
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Force Majeure</h3>
              <p>
                Neither party shall be liable to the other for any failure to perform any obligation under any Agreement due to events beyond their control. These may include, but are not limited to: Acts of God, terrorism, war, political insurgence, insurrection, riot, civil unrest, act of civil or military authority, uprising, earthquake, flood, or any other natural or manmade disaster, which causes the termination of an agreement or contract entered into, and which could not have been reasonably foreseen. The affected party must promptly notify the other of such an event and shall use reasonable efforts to comply with the terms of the agreement.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Waiver</h3>
              <p>
                Failure of either party to insist upon strict performance of any provision of this or any Agreement, or the failure to exercise any right or remedy available, shall not be construed as a waiver of such provisions and shall not affect the validity of this Agreement or any part thereof. Any waiver of any provision of this Agreement shall be effective only if expressly made in writing and duly signed by both parties. Such waiver shall not be construed as a continuing waiver or a waiver of any other provision, right, or remedy unless explicitly stated.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Electronic Communications</h3>
              <p>
                The communications between you and the Firm shall be primarily through electronic means. Whether you use the Site or send us emails, or whether the Firm posts notices on the Site or communicates with you via email or other electronic methods (including app notifications or SMS), you expressly consent to receive such communications in electronic form.
              </p>
              <p className="mt-3">For contractual purposes, you:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>consent to receive communications from the Firm in an electronic form; and</li>
                <li>agree that all terms and conditions, agreements, notices, disclosures, and other communications provided to you electronically by the Firm satisfy any legal requirement that such communications would satisfy if they were in hard copy or written form under applicable law in India.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">General</h3>
              <p>
                The laws of the Republic of India govern these terms and conditions. By accessing this Website [and using our services/buying our products], you consent to these terms and to the exclusive jurisdiction of the courts of India in all disputes arising out of such access. If any of these terms are deemed invalid or unenforceable for any reason (including, but not limited to, the exclusions and limitations set out above), then the invalid or unenforceable provision will be severed, and the remaining terms will continue to apply. Failure of the Firm to enforce any provision shall not constitute a waiver of its right to enforce that or any other provision. These Terms and Conditions shall not be amended, modified, or supplemented except in writing signed by duly authorised representatives of the Firm.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Notification of Changes</h3>
              <p>
                The Firm reserves the right to change these conditions from time to time as it sees fit, and your continued use of the Website will signify your acceptance of any adjustment to these terms. If there are any changes to our privacy policy, we will announce that these changes have been made on our home page and on other key pages on our platform. If there are any changes in how we use our site customers' Personally Identifiable Information, notification by e-mail will be made to those affected by this change. Any changes to our privacy policy will be posted on our Website 30 days prior to these changes taking place. You are therefore advised to re-read this statement on a regular basis.
              </p>
              <p className="mt-3">
                These terms and conditions form part of the Agreement between the Client and ourselves. Your accessing of this Website and/or undertaking of a booking or Agreement indicates your understanding, agreement to, and acceptance of the Disclaimer Notice and the full Terms and Conditions contained herein. Your statutory Consumer Rights are unaffected.
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
              <p className="mt-3">
                Cancellation requests should be accompanied by a valid reason, valid evidences and a clear statement of the decision.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Refund Policy</h3>
              <p>
                Refund policy in terms of which the option of replacement and/or refund is solely decided by the Firm. All Vouchers/product listed under a particular category may not have the same refund policy.
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mt-3">
                <li>If you've received Products in a condition that is physically damaged, has missing parts or accessories, is defective, or is different from their description on the product detail page on www.brandworld.co.in.</li>
                <li>Return will be proceeded only if
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>A formal communication is raised by client to facilitate the resolution of disputes.</li>
                    <li>It is determined that the Product was damaged when a client received it.</li>
                    <li>The Product is returned in original condition (with brand's/manufacturer's box, price tag intact, user manual, warranty card and all the accessories therein).</li>
                  </ul>
                </li>
                <li>If a client wishes to return an electronic device that stores any personal information, please ensure that you have removed all such personal information from the device prior to returning. The Firm shall not be liable in any manner for any misuse or usage of such information.</li>
                <li>However, in the unlikely event of a damaged, defective or wrong item delivered to you. We may contact you to assist or ascertain the damage or defect in the Product prior to issuing a refund or/replacement.</li>
                <li>The Products may be eligible for replacement only if the Brand has the exact same item in stock or products that are accepted by the client, or the same value will be refunded to the client. (The Firm reserves the right to provide a final decision that will be binding on the parties)</li>
                <li>In the event the clients are found to misuse the return policy by excessively returning, or cancelling or not accepting the orders placed, The Firm reserves the right to warn and/or suspend and/or block and/or terminate such client's account, as necessary. Further, the client has to bear the return cost.</li>
                <li>Client shall commence the following steps before asking for Return/Refund:
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>The client must record a video on the Mobile phone, or Digital Camera while unboxing the Products.</li>
                    <li>The client must notify regarding fault, defect, deficiency, damage, imperfection, etc., in the Products within 48 hours of delivery. Further, the same shall be notified with supporting evidence.</li>
                    <li>The client shall convey the above-mentioned complaint via email to The Firm. representative.</li>
                    <li>If nothing about the Product/s is mentioned within 48 hours of delivery, then it will be considered as a successful delivery, and furthermore, no complaints will be entertained.</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">The Procedure to Return the Products</h3>
              <p>
                The member must initiate the process for returning products by raising a formal concern via email to the Firm's representative within 48 hours from the time of product receipt. The member is required to provide a detailed explanation specifying the reason behind the product's return. To substantiate the claim, the member is obligated to submit requisite photographic and video evidence during the unboxing process of the products. Following the submission of the concern and evidence, the Firm will undertake a thorough scrutiny and inspection of the reported issue. The Firm shall render a final decision based on the findings of the inspection. It is important to note that the decision made by the Firm shall be considered final and binding on all parties involved in the transaction.
              </p>
              <p className="mt-3">For any disputes:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Email: business@brandworld.co.in</li>
                <li>Contact: +91 88283 26776/+91 93262 88638</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Voucher Policy</h3>
              <p>
                This Voucher Policy governs the terms and conditions applicable to the purchase, redemption, and use of vouchers. By purchasing, redeeming, or using any voucher, clients (hereinafter referred to as "you" or "the voucher holder" or "user") agree to be bound by this Voucher Policy. It is recommended that you carefully read and understand the terms and conditions outlined herein
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-3">
                <li>Upon successful payment by client, the Firm releases the Codes for Vouchers.</li>
                <li>Upon the transmission of these Codes to the client, Brandworld would not be responsible, liable, or accountable for any issues that may arise from the use of the Voucher Codes.</li>
                <li>Brandworld operates as a website platform to buy vouchers and does not assume responsibility for any issues or guarantees associated with brand vouchers. Clients are advised to exercise caution, perform necessary verifications, and rely on their own judgements when engaging with vouchers obtained through the platform. This disclaimer is an integral part of the Brandworld Terms of Service and applies to all clients accessing the website platform and utilising the voucher-related services.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Website Terms of Use</h3>
              <p>
                The BrandWorld website, located at BrandWorld.co.in is a copyrighted work belonging to BrandWorld India. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features.
              </p>
              <p className="mt-3">
                All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
              </p>
              <p className="mt-3">
                These Terms of Use describe the legally binding terms and conditions that oversee your use of the Website. BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS APPLY and you represent that you have the authority and capacity to enter into these Terms. YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE WITH ALL OF THE PROVISIONS OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE PLATFORM.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Access to the Site</h3>
              <p>
                Subject to these Terms, the Firm grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, non-commercial use.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Certain Restrictions</h3>
              <p>The rights approved to you in these Terms are subject to the following restrictions:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site;</li>
                <li>you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site;</li>
                <li>you shall not access the Site in order to build a similar or competitive website;</li>
                <li>except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means.</li>
              </ul>
              <p className="mt-3">
                Unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms. All copyright and other proprietary notices on the Site must be retained on all copies thereof.
              </p>
              <p className="mt-3">
                The Firm reserves the right to change, suspend, or cease the Site with or without notice to you. You acknowledge that the Firm will not be held liable to you or any third-party for any change, interruption, or termination of the Site or any part thereof.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">No Support or Maintenance</h3>
              <p>
                You agree that the Firm will have no obligation to provide you with any support in connection with the Site.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Intellectual Property Rights</h3>
              <p>
                Excluding any User Content that you may provide, you acknowledge that all intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by the Firm or the Firm's suppliers. The Firm and its suppliers reserve all rights not granted in these Terms.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Third-Party Links & Ads; Other Users</h3>
              <p>
                The Website may contain links to third-party websites and services and/or display advertisements for third parties. Such third-party links and ads are not under the control of the Firm, and the Firm is not responsible for any of them. The Firm provides access to these third-party links and ads only as a convenience to you and does not review, approve, monitor, endorse, warrant, or make any representations with respect to them. You access all third-party links and ads at your own risk and should apply a suitable level of caution and discretion in doing so. When you click on any third-party link or ad, the applicable third party's terms and policies apply, including their privacy and data gathering practices.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Disclaimers</h3>
              <p>
                The Website are provided on an "as is" and "as available" basis. The Firm and its suppliers expressly disclaim any and all warranties and conditions of any kind—whether express, implied, or statutory—including but not limited to warranties or conditions of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement. We and our suppliers do not guarantee that the site will meet your requirements, or that it will be available without interruption, timely, secure, or error-free, or that it will be accurate, reliable, virus-free, complete, legal, or safe.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Limitation on Liability</h3>
              <p>
                To the maximum extent permitted by applicable law, in no event shall the Firm or its suppliers be liable to you or any third party for any lost profits, lost data, costs of procuring substitute products, or any indirect, consequential, exemplary, incidental, special, or punitive damages arising from or related to these Terms or your use of—or inability to use—the Website, even if the Firm has been advised of the possibility of such damages.
              </p>
              <p className="mt-3">
                You access and use the Website at your own discretion and risk and will be solely responsible for any damage to your device or computer system or loss of data resulting from such use.
              </p>
              <p className="mt-3">
                The existence of more than one claim does not increase the Firm's liability. You agree that our suppliers will have no liability of any kind under this Agreement.
              </p>
              <p className="mt-3 italic">
                Note: Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above may not apply to you.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Term and Termination</h3>
              <p>
                Subject to this section, these Terms will remain in full force and effect while you use the Website. We may suspend or terminate your rights to use the Website at any time for any reason at our sole discretion, including for any use that violates these Terms.
              </p>
              <p className="mt-3">
                Upon termination of your rights, your account and right to access the Website will immediately cease. You understand that termination may include deletion of your user content from our live databases. The Firm will not be liable to you for any termination of your rights under these Terms.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Copyright Policy</h3>
              <p>
                The Firm respects the intellectual property of others and expects users of the Website to do the same. In accordance with applicable copyright laws, we have adopted a policy to remove infringing material and terminate the accounts of repeat infringers.
              </p>
              <p className="mt-3">
                If you believe your copyrighted work has been used unlawfully on our platform, you must provide our designated Copyright Agent with the following:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Your physical or electronic signature</li>
                <li>Identification of the copyrighted work you believe has been infringed</li>
                <li>Identification of the infringing material and its location</li>
                <li>Your address, phone number, and email</li>
                <li>A statement affirming your good faith belief that the use is unauthorized</li>
                <li>A statement that the above information is accurate and that you are the copyright owner or authorized to act on their behalf, under penalty of perjury</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Applicability of Arbitration Agreement</h3>
              <p>
                All claims and disputes arising out of or relating to these Terms or the use of any product or service provided by the Firm, that cannot be resolved informally or in a small claims court, shall be resolved through binding arbitration on an individual basis, in accordance with this Arbitration Agreement.
              </p>
              <p className="mt-3">
                Unless otherwise agreed, all arbitration proceedings shall be conducted in English. This Arbitration Agreement applies to you and the Firm, as well as to all subsidiaries, affiliates, agents, employees, predecessors in interest, successors, and assigns. It also extends to any authorized or unauthorized users or beneficiaries of the services or goods provided under these Terms.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Notice Requirement and Informal Dispute Resolution</h3>
              <p>
                Before initiating arbitration, the party seeking resolution must first provide the other party with a written Notice of Dispute, outlining the nature and basis of the claim or dispute, along with the specific relief sought.
              </p>
              <p className="mt-3">
                Any Notice intended for the Firm should be sent to: BrandWorld India, 501,5th Floor Meadows Tower, Sahar Plaza, Andheri East. Upon receipt of the Notice, both parties shall attempt to resolve the dispute amicably through informal discussion.
              </p>
              <p className="mt-3">
                If no resolution is reached within thirty (30) calendar days from the date the Notice is received, either party may commence arbitration proceedings. The amount of any prior settlement offer made by either party must not be disclosed to the arbitrator until after the arbitrator has determined the final award, if any, to which either party is entitled.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Additional Rules for Non-Appearance-Based Arbitration</h3>
              <p>
                Where both parties mutually agree, the arbitration may be conducted through remote means, including telephone calls, video conferencing, or exchange of written submissions. The arbitrator shall decide the most appropriate mode of communication depending on the nature and complexity of the dispute.
              </p>
              <p className="mt-3">
                Unless expressly objected to by either party with valid justification, the arbitration proceedings may be concluded without physical appearance, provided the arbitrator is satisfied that such method ensures fairness, transparency, and adequate opportunity for both parties to present their case.
              </p>
              <p className="mt-3">
                Any such decision to conduct proceedings remotely shall be recorded in writing by the arbitrator and shall carry the same legal weight as a physical hearing.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Time Limits</h3>
              <p>
                Any arbitration proceedings under these Terms shall be initiated within the period of limitation prescribed under the Limitation Act, 1963, read with applicable provisions of the Arbitration and Conciliation Act, 1996, or any amendments thereof.
              </p>
              <p className="mt-3">
                The limitation period shall begin from the date on which the cause of action arises or when the dispute first becomes known to the aggrieved party, whichever is earlier.
              </p>
              <p className="mt-3">
                Failure to initiate arbitration within the applicable limitation period may result in dismissal of the claim, unless condoned by the arbitrator under the law.
              </p>
              <p className="mt-3">
                The arbitrator shall have the discretion to determine whether the claim is time-barred, taking into account any evidence or explanation provided by the parties.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Authority of Arbitrator</h3>
              <p>
                Once arbitration is initiated, the sole arbitrator appointed in accordance with the Arbitration and Conciliation Act, 1996 shall have the full authority to determine the rights, liabilities, and obligations of both parties in relation to the dispute. The arbitrator shall be empowered to decide all questions of law and fact, grant interim or final relief, and pass awards that may include monetary compensation, specific performance, declaratory relief, or any other remedy available under applicable Indian laws. The arbitrator may also adjudicate on preliminary objections, including jurisdictional challenges and limitation issues. The award rendered shall be final, binding, and enforceable in accordance with Part I of the Arbitration and Conciliation Act, 1996, and may be enforced through courts of competent jurisdiction in India. A written and reasoned award shall be issued unless the parties agree otherwise in writing. The arbitrator shall not have the authority to consolidate proceedings or hear multiple disputes jointly unless agreed upon by all parties.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Waiver of Civil Litigation</h3>
              <p>
                By agreeing to these Terms, both parties mutually consent to resolve any disputes arising out of these Terms or use of the services exclusively through arbitration, as governed by the Arbitration and Conciliation Act, 1996.
              </p>
              <p className="mt-3">
                Both parties understand and accept that arbitration proceedings are final, binding, and typically more time-efficient, cost-effective, and procedurally simplified compared to traditional court litigation.
              </p>
              <p className="mt-3">
                By accepting this Agreement, the parties expressly waive any right to initiate or continue civil litigation in Indian courts, except for enforcement of arbitral awards or where injunctive/interim relief is sought as permitted under the law.
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