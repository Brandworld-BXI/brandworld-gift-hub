import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CategoryShowcase from "@/components/CategoryShowcase";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import InstagramSection from "@/components/InstagramSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <CategoryShowcase />
        <HowItWorks />
        <Benefits />
        <CallToAction />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
