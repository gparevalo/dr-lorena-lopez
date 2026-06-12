import { PageHero } from "@/components/layout/PageHero";
import { SEO } from "@/components/seo";
import { useLanguage } from "@/i18n";
import { BaseLayout } from "@/layout/base-layout";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CtaSection from "../Home/sections/cta/CtaSection";
import TratamientoItem from "./componentes/TratamientoItem";

export default function Tratamientos() {
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

      {/* ─── HERO: MINIMALIST LUXURY ─── */}
      <PageHero
        title={`${tp.hero_headline_1} `}
        title2={`${tp.hero_headline_2}`}
        subtitle={tp.hero_label}
        description={tp.hero_subtitle}
        image={"/images/hero5.png"}
      />

      {/* ─── TREATMENT ROWS ─── */}
      <TratamientoItem />

      {/* ─── FINAL CTA (CONCIERGE) ─── */}
      <CtaSection />
    </BaseLayout>
  );
}
