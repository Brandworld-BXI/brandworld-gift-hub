import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import PrivacyModal from "./components/PrivacyModal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";
import TermsModal from "./components/TermsModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/terms" element={<Terms />} /> */}
          <Route path="/privacy" element={<PrivacyModal />} />
          <Route path="/terms" element={<TermsModal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <MobileCTA />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
