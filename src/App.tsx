import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RoboticsLab from "./pages/services/RoboticsLab";
import AITraining from "./pages/services/AITraining";
import Master from "./pages/services/Master";
import Otto from "./pages/services/Otto";
import Mhr from "./pages/services/Mhr";
import Dof from "./pages/services/Dof";
import Hourglass from "./pages/services/Hourglass";
import Bionic_hand from "./pages/services/Bionic_hand";
import IndustrialAutomation from "./pages/services/IndustrialAutomation";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services/robotics-lab" element={<RoboticsLab />} />
        <Route path="/services/ai-training" element={<AITraining />} />
        <Route path="/Services/master" element={<Master />} />
        <Route path="/Services/otto" element={<Otto />} />
        <Route path="/Services/mhr" element={<Mhr />} />
        <Route path="/Services/bionic_hand" element={<Bionic_hand />} />
        <Route path="/Services/dof" element={<Dof />} />
        <Route path="/Services/hourglass" element={<Hourglass />} />
        <Route path="/services/industrial-automation" element={<IndustrialAutomation />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
