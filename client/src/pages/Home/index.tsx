import { UnifiedSection } from "@/components/layout/UnifiedSection";
import { SEO } from "@/components/seo";
import { useLanguage } from "@/i18n";
import { BaseLayout } from "@/layout/base-layout";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";
import ArmonizacionFacial from "./components/ArmonizacionFacial";
import CtaSection from "./components/CtaSection";
import EstadisticaSection from "./components/EstadisticaSection";
import FraseVideo from "./components/FraseVideo";
import HeroHome from "./components/HeroHome";
import LuxuryLabel from "./components/LuxuryLabel";
import NuestroProceso from "./components/NuestroProceso";
import SobreDoctora from "./components/SobreDoctora";
import TratamientosPrincipales from "./components/TratamientosPrincipales";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <BaseLayout>
      <SEO
        title="Dra. Lore López | Medicina Estética de Lujo · 2026 Editorial"
        description="Experiencia médica premium en medicina estética avanzada, rejuvenecimiento facial y láser. La autoridad en belleza natural y confianza médica."
        canonicalPath="/"
      />

      {/* ─── PHASE 3: HERO CINEMATIC ─── */}
      <HeroHome />

      <FraseVideo />

      <SobreDoctora />

      <EstadisticaSection />

      <NuestroProceso />

      <TratamientosPrincipales />

      <ArmonizacionFacial />

      {/* ─── TESTIMONIOS (MINIMALIST) ─── */}
      <UnifiedSection id="testimonios" dark={false} withGrid={false}>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24 border-b border-border pb-12">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <LuxuryLabel>{t.testimonials.label}</LuxuryLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-heading text-5xl md:text-7xl text-foreground"
              >
                {t.testimonials.title}
              </motion.h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-1"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-primary/60 text-primary/60"
                />
              ))}
            </motion.div>
          </div>

          <div className="editorial-grid gap-16">
            {t.testimonials.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={cn(
                  "col-span-12 md:col-span-6 lg:col-span-4 p-10 border border-border bg-background hover:shadow-2xl transition-all duration-700",
                  i === 0 &&
                    "lg:col-span-4 lg:bg-primary/5 lg:border-primary/10",
                )}
              >
                <Quote className="w-8 h-8 text-primary/20 mb-8" />
                <p className="font-serif italic text-2xl text-foreground/80 leading-relaxed mb-10">
                  "{item.text}"
                </p>
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-[10px] uppercase tracking-[0.4em] text-foreground font-bold">
                    {item.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {item.treatment} · {item.age}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </UnifiedSection>

      {/* ─── FINAL CTA (CONCIERGE) ─── */}
      <CtaSection />
    </BaseLayout>
  );
}
