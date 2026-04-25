import { SEO } from "@/components/seo";
import { BaseLayout } from "@/layout/base-layout";
import { useLanguage } from "@/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, Star, Quote, Minus } from "lucide-react";
import { UnifiedSection } from "@/components/layout/UnifiedSection";
import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
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

export default function Home() {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  
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
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <img 
            src="/hero-luxury.png" 
            alt="Luxury Aesthetic Clinic" 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity lg:mix-blend-normal"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16 pt-20">
          <motion.div 
            style={{ y: textY }}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}>
              <LuxuryLabel dark>{t.hero.label}</LuxuryLabel>
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              className="font-heading text-6xl md:text-8xl lg:text-[10rem] text-white leading-none tracking-[-0.03em] mb-8"
            >
              {t.hero.headline_1}
              <br />
              <span className="font-serif italic text-primary/80 lowercase">{t.hero.headline_2}</span>
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              className="font-sans text-white/50 text-lg md:text-xl leading-relaxed max-w-lg mb-12 font-light tracking-wide"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <a href="#contacto">
                <button className="group relative px-12 py-5 bg-primary text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:scale-105 transition-all duration-700 overflow-hidden">
                  <span className="relative z-10">{t.hero.cta_primary}</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                </button>
              </a>
              <a href="#proceso" className="font-heading text-white/40 text-[10px] uppercase tracking-[0.5em] hover:text-white transition-colors">
                {t.hero.cta_secondary}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[8px] uppercase tracking-[0.8em] text-white/20 font-bold">Scroll to Explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </section>

      {/* ─── PHASE 4: SOBRE LA DOCTORA (EDITORIAL) ─── */}
      <UnifiedSection id="doctora" dark={false} withGlow={false}>
        <div className="editorial-grid items-center gap-20">
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <LuxuryLabel>{t.about.label}</LuxuryLabel>
              </motion.div>
              
              <motion.h2 
                variants={fadeUp}
                className="font-heading text-5xl md:text-7xl text-foreground leading-[0.9] tracking-tight mb-8"
              >
                {t.about.title}
              </motion.h2>

              <motion.p variants={fadeUp} className="font-serif italic text-2xl text-primary/80 mb-10">
                {t.about.specialty}
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light mb-12">
                <p>{t.about.bio_1}</p>
                <p className="opacity-70">{t.about.bio_2}</p>
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 border-t border-border pt-10">
                {t.about.credentials.map((c: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0" />
                    <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-80">{c}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <Quote className="w-10 h-10 text-primary/10 mb-6" />
                <p className="font-serif italic text-xl text-foreground/60 leading-relaxed max-w-sm">
                  {t.about.philosophy}
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/doctor-portrait.png" 
                alt="Dra. Lore López" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[20px] border-background/20" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-primary/20 hidden lg:block" />
            </motion.div>
          </div>
        </div>
      </UnifiedSection>

      {/* ─── PROCESO MÉDICO (SILENT LUXURY) ─── */}
      <UnifiedSectionBlack id="proceso">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex justify-center">
              <LuxuryLabel dark>{t.philosophy.label}</LuxuryLabel>
            </motion.div>
            <motion.h2 
              variants={fadeUp}
              className="font-heading text-5xl md:text-7xl text-white mb-8"
            >
              {t.philosophy.title}
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-white/40 text-xl font-light tracking-wide"
            >
              {t.philosophy.subtitle}
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {t.philosophy.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative flex flex-col items-center text-center p-8 border border-white/5 hover:border-primary/20 transition-all duration-700 bg-white/[0.01]"
            >
              <span className="font-accent text-5xl text-primary/10 group-hover:text-primary/30 transition-colors duration-700 mb-8 block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-xl text-white/90 uppercase tracking-widest mb-4">
                {step.title}
              </h3>
              <p className="text-white/30 text-sm leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </UnifiedSectionBlack>

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
                <Star key={i} className="w-4 h-4 fill-primary/60 text-primary/60" />
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
                  i === 0 && "lg:col-span-4 lg:bg-primary/5 lg:border-primary/10"
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
      <UnifiedSectionBlack id="contacto" className="py-48">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <span className="font-accent text-primary/60 text-xl tracking-[0.5em] uppercase mb-8 block">
              Concierge Service
            </span>
            <h2 className="font-heading text-6xl md:text-[8rem] text-white leading-[0.8] mb-12">
              {t.cta.title}
            </h2>
            <p className="text-white/40 text-xl font-light tracking-wide max-w-md mx-auto mb-16">
              {t.cta.subtitle}
            </p>

            <a href="https://wa.me/" target="_blank" rel="noopener">
              <button className="group relative px-16 py-6 bg-white text-black text-[11px] uppercase tracking-[0.6em] font-bold hover:bg-primary hover:text-white transition-all duration-700">
                <span className="relative z-10">{t.cta.button}</span>
              </button>
            </a>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 pt-16">
              {[
                { number: "15+", label: "Años de excelencia", accent: "años" },
                { number: "5000+", label: "Transformaciones reales", accent: "vivas" },
                { number: "100%", label: "Protocolos privados", accent: "exclusivos" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="font-accent text-3xl text-primary/40 mb-2 italic lowercase">{stat.accent}</span>
                  <span className="font-heading text-4xl text-white mb-2">{stat.number}</span>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cinematic Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,_rgba(107,140,78,0.1),_transparent_60%)] pointer-events-none" />
      </UnifiedSectionBlack>
    </BaseLayout>
  );
}
