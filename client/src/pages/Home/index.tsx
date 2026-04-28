import { UnifiedSection } from "@/components/layout/UnifiedSection";
 import { useLanguage } from "@/i18n";
import { BaseLayout } from "@/layout/base-layout";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import ArmonizacionFacial from "./components/ArmonizacionFacial";
import CtaSection from "./components/CtaSection";
import EstadisticaSection from "./components/EstadisticaSection";
import FraseVideo from "./components/FraseVideo";
import HeroHome from "./components/HeroHome";
import LuxuryLabel from "./components/LuxuryLabel";
import NuestroProceso from "./components/NuestroProceso";
import SobreDoctora from "./components/SobreDoctora";
import TratamientosPrincipales from "./components/TratamientosPrincipales";
import { fadeUp, staggerContainer, fadeIn } from "@/lib/animations";
import { SEO } from "@/components/seo";

export default function Home() {
  const { t } = useLanguage();

  return (
    <BaseLayout>
      <SEO
        title="Dra. Lore López | Medicina Estética de Lujo · 2026 Editorial"
        description="Experiencia médica premium en medicina estética avanzada, rejuvenecimiento facial y láser. La autoridad en belleza natural y confianza médica."
        canonicalPath="/"
      />

      {/* ─── HERO CINEMATIC ─── */}
      <HeroHome />

      <EstadisticaSection />

      <SobreDoctora />

      <NuestroProceso />

      <TratamientosPrincipales />

      <ArmonizacionFacial />

      <FraseVideo />

      {/* ─── TESTIMONIOS (MINIMALIST) ─── */}
      <UnifiedSection id="testimonios" dark={false} withGrid={false} withGlow={true}>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24 border-b border-black/5 pb-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp}>
                <LuxuryLabel>{t.testimonials.label}</LuxuryLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-heading leading-tight text-foreground"
                style={{ fontSize: "var(--text-6xl)" }}
              >
                {t.testimonials.title}
              </motion.h2>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex gap-1.5 p-3 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="fill-primary text-primary"
                />
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-12 gap-px bg-black/5 border border-black/5 overflow-hidden">
            {t.testimonials.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={cn(
                  "col-span-12 md:col-span-6 lg:col-span-4 p-12 bg-white hover:bg-ivory transition-all duration-700 flex flex-col group",
                  i === 0 && "md:col-span-12 lg:col-span-4 bg-ivory/50"
                )}
              >
                <div className="relative mb-10">
                   <Quote className="w-8 h-8 text-primary/10 group-hover:text-primary/30 transition-colors duration-500" />
                   <div className="absolute -top-4 -left-4 w-12 h-12 border border-primary/5 rounded-full -z-10 group-hover:scale-150 transition-transform duration-1000" />
                </div>

                <p className="font-serif italic text-2xl text-foreground/80 leading-relaxed mb-12 flex-grow">
                  "{item.text}"
                </p>

                <div className="pt-8 border-t border-black/5 flex flex-col gap-2">
                  <span className="font-heading text-[10px] uppercase tracking-[0.4em] text-foreground font-bold">
                    {item.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                    {item.treatment} <span className="mx-2 opacity-30">|</span> {item.age}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-[0.03] z-0">
           <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-primary">
              <circle cx="50" cy="50" r="40" />
           </svg>
        </div>
      </UnifiedSection>

      {/* ─── FINAL CTA (CONCIERGE) ─── */}
      <CtaSection />
    </BaseLayout>
  );
}

