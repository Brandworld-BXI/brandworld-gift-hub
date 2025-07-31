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
              This Privacy Policy describes how BrandWorld manages personal information and respects your privacy across its platforms, including the Website. This policy may be amended periodically, so please review it regularly.
            </p>

            <p>
              By visiting this Website, you agree to be bound by the terms and conditions of this Privacy Policy. We encourage you to review it carefully to make informed decisions about your use of our services.
            </p>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Collection of Personally Identifiable Information</h3>
              <p>
                When you use our Website, we collect and store personal information provided by you from time to time. Our primary goal is to provide you with a safe, efficient, and customized experience.
              </p>
              
              <p className="mt-3">
                You can generally browse the Website without revealing personal information. Once you provide personal information, you are no longer anonymous. We clearly indicate required and optional fields.
              </p>

              <p className="mt-3">
                We may automatically track information about your behaviour on our Website. This data is used internally to better understand user demographics, interests, and behaviour.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Use of Cookies</h3>
              <p>
                We use "cookies" on certain pages to analyse webpage flow, measure promotional effectiveness, and promote trust and safety. Cookies are small files placed on your hard drive to assist in providing services.
              </p>
              
              <p className="mt-3">
                Most cookies are session cookies that delete automatically at the end of the session. You may decline cookies via browser settings, although this may limit certain Website features.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Use of Demographic/Profile Data</h3>
              <p>
                We use personal information to provide the services requested by you. To the extent we utilize your personal information for marketing purposes, we will provide clear opt-out mechanisms.
              </p>
              
              <p className="mt-3">Your personal information helps us:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Handle and fulfill orders</li>
                <li>Enhance your customer experience</li>
                <li>Resolve disputes and troubleshoot issues</li>
                <li>Ensure service security</li>
                <li>Collect payments</li>
                <li>Measure consumer interest in our products and services</li>
                <li>Inform you about online and offline offers, products, services, and updates</li>
                <li>Customize and enhance your browsing experience</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Sharing of Personal Information</h3>
              <p>
                We may share personal information with our corporate entities and affiliates. These entities and affiliates may market to you as a result of such sharing unless you explicitly opt out.
              </p>
              
              <p className="mt-3">
                We may disclose personal information to third parties if required to provide you access to our services, fulfill your orders, enhance your experience, comply with our legal obligations, or prevent, detect, mitigate, and investigate fraudulent or illegal activities.
              </p>

              <p className="mt-3">
                However, we will not disclose your personal information to third parties for their marketing and advertising purposes without your explicit consent.
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
                Our Website has stringent security measures in place to protect against the loss, misuse, and alteration of information under our control. Whenever you change or access your account information, we provide a secure server.
              </p>
              
              <p className="mt-3">
                Once your information is in our possession, we adhere strictly to security guidelines to safeguard it against unauthorised access.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Advertisements</h3>
              <p>
                We use third-party advertising companies to serve advertisements when you visit our Website. These companies may utilize information (excluding your name, address, email address, or telephone number) regarding your visits to this and other websites to deliver targeted advertisements.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Your Consent</h3>
              <p>
                By using the Website and providing your information, you consent explicitly to the collection, use, and sharing of your information as outlined in this Privacy Policy.
              </p>
              
              <p className="mt-3">
                If you provide personal information of other individuals, you represent and confirm that you have the necessary authority and consent from them to permit us to use their information according to this Privacy Policy.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Data Retention</h3>
              <p>
                We retain your personal information for as long as necessary to provide you with our services and as described in this Privacy Policy. We may also retain certain information to comply with our legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Your Rights</h3>
              <p>
                Subject to applicable law, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Children's Privacy</h3>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Changes to Privacy Policy</h3>
              <p>
                If we update or change our Privacy Policy, those changes will be posted on this page and within the Website. Please regularly review our Privacy Policy to stay informed about the information we collect, how we use it, and under what circumstances we may disclose it.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Contact Information</h3>
              <p>
                For questions or concerns regarding this privacy policy, contact us at:
                <br />
                <strong>Email:</strong> business@brandworld.co.in
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