import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyModalProps {
  children: React.ReactNode;
}

const PrivacyModal = ({ children }: PrivacyModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Privacy Policy</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-6 text-sm text-muted-foreground">
            <p>
              This Privacy Policy describes how BrandWorld manages personal information and respects your privacy across its platforms, including the Website. This policy may be amended periodically, so please review it regularly. We value the trust you place in us. That's why we insist upon the highest standards for secure transactions and customer information privacy. Please read the following statement to learn about our information gathering and dissemination practices.
            </p>

            <p>
              By visiting this Website, you agree to be bound by the terms and conditions of this Privacy Policy. We encourage you to review it carefully to make informed decisions about your use of our services. If you do not agree, we respectfully advise that you refrain from using or accessing our Website.
            </p>

            <p>
              By mere use of the Website, you expressly consent to our use and disclosure of personal information provided by you in accordance with this Privacy Policy. This Privacy Policy is incorporated into and subject to the Terms of Use.
            </p>

            <p>
              BrandWorld, registered under Partnership Act, 1932 (hereinafter referred to as "Firm," "we," "us," or "our"), is committed to protecting your privacy and personal information. To provide uninterrupted services, we may collect and occasionally disclose information about you. This notice explains our information practices and the choices you can make regarding the collection and use of your information.
            </p>

            <p>
              All visitors to www.BrandWorld.co.in (Website) are advised to read and understand our Privacy Policy carefully. By accessing the Website, you agree to be bound by this Privacy Policy and consent to the collection, storage, and use of your information as provided herein.
            </p>

            <p>
              BrandWorld may revise this Privacy Policy by posting the revised policy on our Website and updating the "Last Updated" date at the top. We may also notify you through the contact information provided by you. Any changes will be effective immediately unless stated otherwise. By continuing to use our Website, you agree to the revised Privacy Policy.
            </p>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Collection of Personally Identifiable Information and Other Information</h3>
              <p>
                When you use our Website, we collect and store personal information provided by you from time to time. Our primary goal is to provide you with a safe, efficient, and customized experience, allowing us to deliver services and features tailored to your needs. We collect only necessary personal information to achieve this goal.
              </p>
              
              <p className="mt-3">
                You can generally browse the Website without revealing personal information. Once you provide personal information, you are no longer anonymous. We clearly indicate required and optional fields. You always have the choice to not provide information by avoiding certain services or features.
              </p>

              <p className="mt-3">
                We may automatically track information about your behaviour on our Website. This data is used internally to better understand user demographics, interests, and behaviour. This information includes URLs you visit, browser details, and your IP address are analysed on an aggregated basis.
              </p>

              <p className="mt-3">
                We use "cookies" on certain pages to analyse webpage flow, measure promotional effectiveness, and promote trust and safety. Cookies are small files placed on your hard drive to assist in providing services. Most cookies are session cookies that delete automatically at the end of the session. You may decline cookies via browser settings, although this may limit certain Website features. Additionally, you may encounter "cookies" or other similar devices on certain pages of the Website that are placed by third parties, we do not control third-party cookies.
              </p>

              <p className="mt-3">
                If you make purchases on the Website, we collect data about your buying behaviour, preferences, and information you provide. For transactions, we collect additional details such as billing address, payment instrument details, and tracking information.
              </p>

              <p className="mt-3">
                If you post messages, leave feedback, or use voice commands on the Website, we collect and retain this information as necessary to resolve disputes and provide support. Personal correspondence, like emails or letters, including communications about your activities on the Website, may be collected in a file specific to you.
              </p>

              <p className="mt-3">
                We collect personally identifiable information (email address, name, phone number, credit card / debit card / other payment instrument details, etc.) from you when you set up a free account with us. While you can browse some sections of our Website without being a registered member, certain activities (such as placing an order) do require registration. We use contact information to send offers based on previous orders and interests.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Use of Demographic/Profile Data</h3>
              <p>
                We use personal information to provide the services requested by you. To the extent we utilize your personal information for marketing purposes, we will provide clear opt-out mechanisms. Your personal information helps us handle and fulfill orders, enhance your customer experience, resolve disputes, troubleshoot issues, ensure service security, collect payments, measure consumer interest in our products and services, inform you about online and offline offers, products, services, and updates, customize and enhance your browsing experience, detect and protect against errors, fraud, and criminal activity, enforce our terms and conditions, and fulfill other purposes described at the time of data collection.
              </p>
              
              <p className="mt-3">
                With your explicit consent, we may access your SMS messages, contacts stored in your device directory, location, and device information. Additionally, we may request you to provide your PAN and Know-Your-Customer (KYC) details to verify your eligibility for certain products and services, including but not limited to credit and payment solutions, offered by us, our affiliates, or lending partners. Access, storage, and usage of this data comply strictly with applicable laws. Withdrawal of your consent may affect your ability to access these products or services.
              </p>

              <p className="mt-3">
                In our continuous efforts to improve our offerings, we and our affiliates analyse demographic and profile data reflecting user activity on our Website. Your IP address is identified and used specifically to help diagnose server issues, administer the Website effectively, identify users, and gather broad demographic insights.
              </p>

              <p className="mt-3">
                Occasionally, we may request your participation in optional online surveys. These surveys may collect personal and contact information, demographic details (such as ZIP code, age, or income level), attributes including your interests, household or lifestyle characteristics, purchasing behaviours or history, preferences, and similar data provided voluntarily by you. This information is used exclusively to tailor and enhance your experience on our Website, offering you personalized content aligned with your interests and preferences.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Sharing of Personal Information</h3>
              <p>
                We may share personal information with our corporate entities and affiliates. These entities and affiliates may market to you as a result of such sharing unless you explicitly opt out.
              </p>
              
              <p className="mt-3">
                We may disclose personal information to third parties if required to provide you access to our services, fulfill your orders, enhance your experience, comply with our legal obligations, enforce our User Agreement, facilitate marketing and advertising activities, or prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our services. However, we will not disclose your personal information to third parties for their marketing and advertising purposes without your explicit consent.
              </p>

              <p className="mt-3">
                We may disclose personal information if required by law, or if we believe in good faith that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal processes. Additionally, we may disclose personal information to law enforcement agencies, third-party rights owners, or others if we believe that such disclosure is reasonably necessary to enforce our Terms or Privacy Policy, respond to claims that advertisements, postings, or other content violates third-party rights, or protect the rights, property, or personal safety of our users or the general public.
              </p>

              <p className="mt-3">
                Furthermore, we and our affiliates may share or sell some or all of your personal information to another business entity if we (or our assets) plan to merge with, be acquired by, reorganize, amalgamate, or restructure our business. Should such a transaction occur, the other business entity (or the new combined entity) will be required to adhere strictly to this Privacy Policy regarding your personal information.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Links to Other Sites</h3>
              <p>
                Our Website may link to other websites that may collect personally identifiable information about you. BrandWorld.co.in is not responsible for the privacy practices or the content of those linked websites.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Security Precautions</h3>
              <p>
                Our Website has stringent security measures in place to protect against the loss, misuse, and alteration of information under our control. Whenever you change or access your account information, we provide a secure server. Once your information is in our possession, we adhere strictly to security guidelines to safeguard it against unauthorised access.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Advertisements on BrandWorld.co.in</h3>
              <p>
                We use third-party advertising companies to serve advertisements when you visit our Website. These companies may utilize information (excluding your name, address, email address, or telephone number) regarding your visits to this and other websites to deliver targeted advertisements about products and services that may interest you.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Your Consent</h3>
              <p>
                By using the Website and providing your information, you consent explicitly to the collection, use, and sharing of your information as outlined in this Privacy Policy. If you provide personal information of other individuals, you represent and confirm that you have the necessary authority and consent from them to permit us to use their information according to this Privacy Policy.
              </p>
              
              <p className="mt-3">
                If we update or change our Privacy Policy, those changes will be posted on this page and within the Website. Please regularly review our Privacy Policy to stay informed about the information we collect, how we use it, and under what circumstances we may disclose it.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Questions</h3>
              <p>
                For questions or concerns regarding this privacy policy, contact us at business@brandworld.co.in.
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

export default PrivacyModal;