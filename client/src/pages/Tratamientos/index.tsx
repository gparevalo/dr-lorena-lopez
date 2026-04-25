import { SEO } from "@/components/seo";
import { BaseLayout } from "@/layout/base-layout";
import { useLanguage } from "@/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Minus } from "lucide-react";
import { UnifiedSection } from "@/components/layout/UnifiedSection";
import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

function LuxuryLabel({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <Minus className={cn("w-6 h-px", dark ? "text-primary/70" : "text-primary/50")} />
      <span className={cn("text-[9px] uppercase tracking-[0.6em] font-semibold", dark ? "text-primary/90" : "text-primary")}>
        {children}
      </span>
    </div>
  );
}

export default function Tratamientos() {
  const { t } = useLanguage();
  const tp = t.tratamientosPage;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <BaseLayout>
      <SEO title={tp.seo_title} description={tp.seo_desc} canonicalPath="/tratamientos" />

      {/* ─── HERO: MINIMALIST LUXURY ─── */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ opacity: 0.4 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-[1500px] mx-auto px-8 lg:px-16 pt-32 w-full">
          <motion.div 
            style={{ opacity: heroOpacity, y: heroY }}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.div variants={fadeUp}>
              <LuxuryLabel dark>{tp.hero_label}</LuxuryLabel>
            </motion.div>
            <motion.h1 
              variants={fadeUp}
              className="font-heading text-6xl md:text-8xl lg:text-[10rem] text-white leading-[0.8] tracking-tight mb-12"
            >
              {tp.hero_headline_1}
              <br />
              <span className="font-serif italic text-primary/80 lowercase">{tp.hero_headline_2}</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="font-serif text-white/40 text-xl md:text-2xl font-light max-w-xl leading-relaxed"
            >
              {tp.hero_subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── TREATMENT ROWS ─── */}
      <section className="bg-background">
        {tp.treatments.map((treatment, i) => (
          <UnifiedSection 
            key={treatment.slug} 
            dark={i % 2 !== 0} 
            withGrid={false}
            className="py-12 lg:py-20"
          >
            <div className={cn(
              "editorial-grid items-center gap-16 lg:gap-32",
              i % 2 !== 0 ? "text-white" : "text-foreground"
            )}>
              {/* Index Column */}
              <div className="col-span-12 lg:col-span-1 border-t border-primary/20 pt-8">
                <span className="font-accent text-[10px] tracking-[0.5em] text-primary font-bold">
                  0{i + 1}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="col-span-12 lg:col-span-4">
                <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-none mb-6">
                  {treatment.name}
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-primary/40" />
                  <span className="font-accent text-[9px] uppercase tracking-[0.4em] text-primary/70 font-semibold">
                    {treatment.tagline}
                  </span>
                </div>
              </div>

              {/* Description & CTA */}
              <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-8">
                <p className={cn(
                  "text-lg md:text-xl font-light leading-relaxed font-serif italic",
                  i % 2 !== 0 ? "text-white/70" : "text-foreground/70"
                )}>
                  {treatment.summary}
                </p>
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 pt-4">
                  <div className="flex flex-col">
                    <span className="font-accent text-[8px] uppercase tracking-[0.4em] text-primary/40 mb-2">Destacado</span>
                    <span className="text-[11px] uppercase tracking-[0.25em] font-medium">{treatment.highlight}</span>
                  </div>
                  <a href={`/tratamientos/${treatment.slug}`}>
                    <button className={cn(
                      "group flex items-center gap-4 px-10 py-5 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-700",
                      i % 2 !== 0 
                        ? "bg-white text-black hover:bg-primary hover:text-white" 
                        : "bg-black text-white hover:bg-primary"
                    )}>
                      {tp.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </UnifiedSection>
        ))}
      </section>

      {/* ─── FINAL CTA ─── */}
      <UnifiedSectionBlack className="py-48 text-center" withGlow>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <LuxuryLabel dark>{tp.cta_consulta}</LuxuryLabel>
          <h2 className="font-heading text-6xl md:text-9xl text-white leading-none mb-12">
            {t.cta.title}
          </h2>
          <p className="text-white/40 text-xl font-light tracking-wide max-w-lg mx-auto mb-16">
            {t.cta.subtitle}
          </p>
          <a href="/consulta">
            <button className="group relative px-20 py-8 bg-primary text-white text-[11px] uppercase tracking-[0.6em] font-bold shadow-2xl hover:scale-105 transition-all duration-700">
              <span className="relative z-10">{t.cta.button}</span>
            </button>
          </a>
        </motion.div>
      </UnifiedSectionBlack>
    </BaseLayout>
  );
}
