import { PageHero } from "@/components/layout/PageHero";
import { SEO } from "@/components/seo";
import { useLanguage } from "@/i18n";
import { BaseLayout } from "@/layout/base-layout";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CtaSection from "../Home/sections/cta/CtaSection";
import PostTreatmentProtocolsSection from "./PostTreatmentProtocolsSection";

export default function Promociones() {
  const { t } = useLanguage();
  const tp = t.tratamientosPage;

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <BaseLayout>
      <SEO
        title={tp.seo_title}
        description={tp.seo_desc}
        canonicalPath="/tratamientos"
      />

      {/* ─── HERO: MINIMALIST LUXURY ─── */}
      <PageHero
        title={` Los mejores resultados no dependen`}
        title2={`únicamente del
              tratamiento.`}
        subtitle={"Más allá del procedimiento"}
        description={
          "    Cada procedimiento merece una estrategia de continuidad diseñada para proteger, potenciar y prolongar sus beneficios a largo plazo."
        }
        image={"/images/hero6.png"}
      />

      <PostTreatmentProtocolsSection />

      {/* ─── FINAL CTA (CONCIERGE) ─── */}
      <CtaSection />
    </BaseLayout>
  );
}
