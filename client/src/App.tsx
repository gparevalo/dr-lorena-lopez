import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/i18n";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Switch, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";

// Pages
import Home from "@/pages/Home";
import Consulta from "@/pages/Consulta";
import Tratamientos from "@/pages/Tratamientos";
import TratamientoDetail from "@/pages/Tratamientos/detail";
import Doctora from "@/pages/Doctora";
import Galeria from "@/pages/Galeria";
import PacientesInternacionales from "@/pages/PacientesInternacionales";
import NotFound from "./pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/consulta" component={Consulta} />
      <Route path="/tratamientos" component={Tratamientos} />
      <Route path="/tratamientos/:slug" component={TratamientoDetail} />
      <Route path="/doctora" component={Doctora} />
      <Route path="/galeria" component={Galeria} />
      <Route path="/pacientes-internacionales" component={PacientesInternacionales} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <I18nProvider>
            <ScrollToTop />
            <Router />
            <Toaster />
          </I18nProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
