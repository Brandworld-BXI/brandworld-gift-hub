import Header from "@/components/Header";
import DynamicHero from "@/components/DynamicHero";
import About from "@/components/About";
import BrandCarousel from "@/components/BrandCarousel";
import CategoryShowcase from "@/components/CategoryShowcase";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import CallToAction from "@/components/CallToAction";
import InstagramSection from "@/components/InstagramSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <DynamicHero />
        <About />
        <BrandCarousel />
        <CategoryShowcase />
        <HowItWorks />
        <Benefits />
        <SocialProof />
        <CallToAction />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
