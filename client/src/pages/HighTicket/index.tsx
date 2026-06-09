import { SEO } from "@/components/seo";
import { useLanguage } from "@/i18n";
import { BaseLayout } from "@/layout/base-layout";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import CtaSection from "../Home/sections/cta/CtaSection";
import CtaLongevilift from "./components/CtaLongevilift";
import DifferentiatorsSection from "./components/DifferentiatorsSection";
import { HighTicketHero } from "./components/HighTicketHero";
import MetodoSection from "./components/MetodoSection";
import RecognitionSection from "./components/RecognitionSection";
import SolutionSection from "./components/SolutionSection";
import TransformationSection from "./components/TransformationSection";

export default function HighTicket() {
  const { t } = useLanguage();
  const tp = t.tratamientosPage;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  return (
    <BaseLayout>
      <SEO
        title={tp.seo_title}
        description={tp.seo_desc}
        canonicalPath="/tratamientos"
      />

      <HighTicketHero
        title={`Los signos de envejecimiento no aparecen todos al mismo tiempo.`}
        title2={`Por eso rara vez se resuelven con un solo tratamiento.`}
        subtitle={"Tu plan personal de rejuvenecimiento"}
        description={
          ""
          //  "LongeviLift 360 comienza entendiendo cómo está envejeciendo tu rostro para diseñar un plan médico personalizado."
        }
        image={"/images/hero-ticket.png"}
      />

      <RecognitionSection />
      <SolutionSection />
      <MetodoSection />
      <DifferentiatorsSection />  
    </BaseLayout>
  );
}
