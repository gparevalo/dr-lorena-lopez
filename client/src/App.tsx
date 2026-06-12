import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/i18n";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Switch, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";

// Pages
import Consulta from "@/pages/Consulta";
import Home from "@/pages/Home";
import TratamientoDetail from "./pages/DetalleProducto/detail";
import NotFound from "./pages/not-found";
import Promociones from "./pages/Promociones";
import HighTicket from "./pages/HighTicket";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    console.log("route changed:", location);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    console.log("after scroll:", window.scrollY);
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/consulta" component={Consulta} />
      <Route path="/tratamientos" component={Promociones} />
      <Route path="/tratamientos/:slug" component={TratamientoDetail} />
      <Route path="/longevilift" component={HighTicket} />

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
