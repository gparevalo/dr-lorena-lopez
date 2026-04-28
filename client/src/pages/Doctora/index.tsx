import { UnifiedSection } from "@/components/layout/UnifiedSection";
import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import { SEO } from "@/components/seo";
import { useLanguage } from "@/i18n";
import { BaseLayout } from "@/layout/base-layout";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { Minus, Quote } from "lucide-react";
import { useRef } from "react";
import { PageHero } from "@/components/layout/PageHero";
import headerImg from "@assets/images/12.png";
import CtaSection from "../Home/components/CtaSection";

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

function LuxuryLabel({
  children,
  dark = false,
}: {
  children: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <Minus
        className={cn("w-6 h-px", dark ? "text-primary/70" : "text-primary/50")}
      />
      <span
        className={cn(
          "text-[9px] uppercase tracking-[0.6em] font-semibold",
          dark ? "text-primary/90" : "text-primary",
        )}
      >
        {children}
      </span>
    </div>
  );
}

export default function Doctora() {
  const { t } = useLanguage();
  const d = t.doctora;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <BaseLayout>
      <SEO
        title={d.seo_title}
        description={d.seo_desc}
        canonicalPath="/doctora"
      />

      <PageHero
        title={d.hero_name}
        subtitle={d.opening_label}
        description={t.about.specialty}
        image={headerImg}
        dark={true}
      />

      {/* ─── STORY: EDITORIAL LAYOUT ─── */}
      <UnifiedSection dark={false} withGlow={false}>
        <div className="editorial-grid items-start gap-20">
          <div className="col-span-12 lg:col-span-4 sticky md:top-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              <LuxuryLabel>{d.opening_label}</LuxuryLabel>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.9] tracking-tight text-foreground mb-8">
                {d.opening_title}
              </h2>
              <div className="w-12 h-px bg-primary/40 mb-8" />
              <Quote className="w-10 h-10 text-primary/10" />
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-12">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-foreground/80 text-xl md:text-2xl font-light leading-relaxed font-serif italic"
            >
              {d.opening_body_1}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-muted-foreground text-lg leading-relaxed font-light space-y-6"
            >
              <p>{d.opening_body_2}</p>
              <p>{t.about.bio_1}</p>
            </motion.div>
          </div>
        </div>
      </UnifiedSection>

      {/* ─── TIMELINE: MINIMALIST DARK ─── */}
      <UnifiedSectionBlack id="trayectoria">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24 border-b border-white/10 pb-12">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              <LuxuryLabel dark>{d.timeline_label}</LuxuryLabel>
              <h2 className="font-heading text-5xl md:text-7xl text-white">
                {d.timeline_title}
              </h2>
            </motion.div>
            <span className="font-accent text-primary/40 text-xs tracking-[0.4em] mb-4">
              Curriculum Vitae
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {d.timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group bg-black p-12 hover:bg-primary/[0.02] transition-all duration-700 h-full"
              >
                <span className="font-accent text-primary/60 text-[10px] tracking-[0.5em] uppercase mb-8 block">
                  {item.year}
                </span>
                <h3 className="font-heading text-xl text-white/90 uppercase tracking-widest mb-6 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/30 text-sm leading-relaxed font-light">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </UnifiedSectionBlack>

      {/* ─── PHILOSOPHY: LARGE QUOTE ─── */}
      <UnifiedSection dark={false} withGrid={false} className="py-48">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <LuxuryLabel>{d.philosophy_label}</LuxuryLabel>
            <p className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-foreground/90 leading-tight tracking-tight mb-20 px-4">
              {d.philosophy_quote}
            </p>
            <div className="flex flex-col items-center gap-4">
              <span className="font-heading text-xl uppercase tracking-[0.4em] font-bold">
                {d.hero_name}
              </span>
              <div className="w-12 h-px bg-primary/40" />
            </div>
          </motion.div>
        </div>
      </UnifiedSection>

      <CtaSection />
    </BaseLayout>
  );
}
