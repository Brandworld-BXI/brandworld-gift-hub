import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const PrivacyPolicy: React.FC = () => {
  const [policyText, setPolicyText] = useState("");

  useEffect(() => {
    fetch("/privacy-policy.txt")
      .then((res) => res.text())
      .then((data) => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        // Replace placeholder with today's date
        const updatedData = data.replace("{{DATE}}", formattedDate);
        setPolicyText(updatedData);
      })
      .catch((err) => console.error("Error loading privacy policy:", err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Helmet>
        <title>Privacy Policy - BrandWorld</title>
        <meta
          name="description"
          content="Read the full privacy policy of BrandWorld covering data usage, storage, and security."
        />
      </Helmet>

      {/* Main content with top padding to avoid header overlap */}
      <main className="flex-grow container mx-auto px-4 pt-32 pb-12">
        <h1 className="text-4xl font-bold mb-8 text-center md:text-left">
          Privacy Policy
        </h1>

        <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">
          {policyText || "Loading privacy policy..."}
        </div>
      </main>

      <Footer />
      <MobileCTA />
    </div>
  );
};

export default PrivacyPolicy;
