import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Box } from "lucide-react";

const PrivacyModal = () => {
  return (
    <div style={{
      paddingTop:"100px",
      padding: "20px",
      marginBottom: "20px",
      maxWidth: "800px",
      margin: "0 auto",
    }}>
      <div style={{height:"150px"}}></div>
      <h1 className="text-2xl font-bold">Privacy Policy</h1>

        <div className="space-y-6 text-sm text-muted-foreground">

          <p>
            This Privacy Policy describes how BrandWorld collects, uses, processes and protects personal information when you access or use the website www.brandworld.co.in and any services provided through the platform. BrandWorld is committed to safeguarding the privacy of users and maintaining the confidentiality of personal information in accordance with applicable laws in India including the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023.
          </p>

          <p>
            By accessing or using the Website, you agree to the terms of this Privacy Policy and consent to the collection, storage and use of information in accordance with this policy. If you do not agree with the practices described herein, you are advised not to use or access the Website.
          </p>

          <p>
            BrandWorld, registered under the Indian Partnership Act, 1932 (hereinafter referred to as “BrandWorld”, “Firm”, “we”, “us” or “our”), operates as a procurement and trading platform offering services including corporate gifting, brand voucher distribution, procurement solutions, media planning support and MICE related services across India.
          </p>

          <p>
            This Privacy Policy forms an integral part of the Terms & Conditions governing the use of the Website.
          </p>

          <p>
            BrandWorld may revise this Privacy Policy from time to time by updating this page. Continued use of the Website after such changes shall constitute your acceptance of the revised Privacy Policy.
          </p>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Collection of Personally Identifiable Information
            </h3>

            <p>
              When you use our Website, we may collect personal information that you voluntarily provide. This information enables us to provide efficient services and improve user experience.
            </p>

            <p className="mt-3">
              Personal information that may be collected includes but is not limited to:
            </p>

            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and shipping address</li>
              <li>Company or business details</li>
              <li>Transaction information</li>
              <li>Payment confirmation details</li>
            </ul>

            <p className="mt-3">
              You may browse certain areas of the Website without registering or revealing personal information. However, certain features such as placing orders, redeeming vouchers or accessing procurement services may require you to provide personal information.
            </p>

            <p className="mt-3">
              We may also automatically collect certain technical information including IP address, browser type, operating system, device information, referring URLs and pages visited on the Website. This information is used to analyse trends and improve platform performance.
            </p>

            <p className="mt-3">
              Cookies and similar technologies may be used to enhance website functionality, analyse user behaviour and maintain secure sessions. Users may disable cookies through browser settings, though some features of the Website may not function properly if cookies are disabled.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Use of Personal Information
            </h3>

            <p>
              The personal information collected by BrandWorld may be used for the following purposes:
            </p>

            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Processing orders and delivering products or vouchers</li>
              <li>Providing procurement and trading services</li>
              <li>Facilitating payments and transaction verification</li>
              <li>Responding to customer inquiries and support requests</li>
              <li>Improving website functionality and user experience</li>
              <li>Detecting and preventing fraud or illegal activities</li>
              <li>Sending transactional communications and service updates</li>
              <li>Complying with legal obligations</li>
            </ul>

            <p className="mt-3">
              From time to time we may also send promotional communications regarding products, services or offers that may be of interest to you. Users may opt out of such communications where applicable.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Sharing of Personal Information
            </h3>

            <p>
              BrandWorld may share personal information with trusted third parties strictly for the purpose of operating the Website and providing services. These parties may include logistics partners, payment processors, technology service providers, marketing service providers and vendors assisting in order fulfilment.
            </p>

            <p className="mt-3">
              Personal information may also be disclosed if required by law, government authorities, regulatory bodies or judicial orders, or where such disclosure is necessary to protect the rights, property or safety of BrandWorld, its users or the public.
            </p>

            <p className="mt-3">
              In the event of business restructuring, merger, acquisition or transfer of assets, user information may be transferred to the successor entity, provided such entity agrees to comply with this Privacy Policy.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Links to Third-Party Websites
            </h3>

            <p>
              The Website may contain links to third-party websites or services that are not operated or controlled by BrandWorld. We are not responsible for the privacy practices, content or policies of such third-party websites.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Data Security
            </h3>

            <p>
              BrandWorld implements reasonable technical and organisational security measures to protect personal information from unauthorised access, misuse, loss or disclosure. These measures may include secure servers, restricted access to sensitive information and encryption where appropriate.
            </p>

            <p className="mt-3">
              While we strive to protect user data, no method of electronic transmission or storage is completely secure and therefore we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Data Retention
            </h3>

            <p>
              Personal information will be retained only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes and enforce our agreements.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              User Rights
            </h3>

            <p>
              Subject to applicable laws, users may request access to their personal information, request correction of inaccurate information, or request deletion of their personal data where legally permissible.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Your Consent
            </h3>

            <p>
              By using the Website and providing your personal information, you consent to the collection, storage and processing of such information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Registered Office
            </h3>

            <p>
              BrandWorld  
              Unit Part B on 3rd Floor, Corporate Centre  
              Andheri Kurla Road, Opp. VITS Hotel  
              Andheri East, Mumbai – 400059  
              Maharashtra, India
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Contact
            </h3>

            <p>
              For any questions, requests or concerns regarding this Privacy Policy please contact:
            </p>

            <p className="mt-2">
              Email: business@brandworld.co.in
            </p>
          </section>

        </div>
    </div>
  );
};

export default PrivacyModal;