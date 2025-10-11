import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contacts from "./pages/Contacts";
import PriceList from "./pages/PriceList";
import Certificates from "./pages/Certificates";
import Licenses from "./pages/Licenses";
import ServicePage from "./pages/ServicePage";
import DoctorPage from "./pages/DoctorPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/price-list" element={<PriceList />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/licenses" element={<Licenses />} />
              <Route path="/services/:serviceId" element={<ServicePage />} />
              <Route path="/doctors/:doctorId" element={<DoctorPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
