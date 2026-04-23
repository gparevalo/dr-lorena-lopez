import { SEO } from "@/components/seo";
import { BaseLayout } from "@/layout/base-layout";
import { useLanguage } from "@/i18n";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

const gradients = [
  "from-[hsl(82,18%,25%)] to-[hsl(82,12%,18%)]",
  "from-[hsl(35,28%,22%)] to-[hsl(25,22%,14%)]",
  "from-[hsl(60,12%,22%)] to-[hsl(82,15%,18%)]",
  "from-[hsl(35,22%,20%)] to-[hsl(25,18%,13%)]",
  "from-[hsl(82,22%,20%)] to-[hsl(35,18%,16%)]",
];

export default function Tratamientos() {
  const { t } = useLanguage();
  const tp = t.tratamientosPage;

  return (
    <BaseLayout>
      <SEO title={tp.seo_title} description={tp.seo_desc} canonicalPath="/tratamientos" />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,22%,10%)] via-[hsl(35,18%,13%)] to-[hsl(82,12%,15%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(ellipse at 70% 50%, hsl(35,40%,65%) 0%, transparent 50%), radial-gradient(ellipse at 25% 70%, hsl(82,28%,55%) 0%, transparent 45%)`,
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 pt-36 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.55em] font-semibold text-[hsl(82,28%,62%)]">
              — {tp.hero_label} —
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-serif text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.0] tracking-tight mb-8 max-w-3xl"
          >
            {tp.hero_headline_1}
            <br />
            <em className="not-italic text-[hsl(35,35%,72%)]">{tp.hero_headline_2}</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/50 text-lg leading-relaxed max-w-xl font-light"
          >
            {tp.hero_subtitle}
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(35,28%,97%)] to-transparent" />
      </section>

      {/* ─── TREATMENT ROWS ─── */}
      <section className="bg-[hsl(35,28%,97%)]">
        {tp.treatments.map((treatment, i) => (
          <RevealSection key={treatment.slug}>
            <motion.div
              variants={fadeUp}
              className={`grid lg:grid-cols-2 min-h-[520px] ${i % 2 === 0 ? "" : "lg:grid-flow-dense"}`}
            >
              {/* Image / Visual panel */}
              <div
                className={`relative overflow-hidden min-h-[320px] lg:min-h-0 bg-gradient-to-br ${gradients[i]} ${i % 2 !== 0 ? "lg:col-start-2" : ""}`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-20 h-px bg-white/15 mb-8" />
                  <span className="font-serif text-6xl md:text-7xl font-bold text-white/10 leading-none select-none">
                    0{i + 1}
                  </span>
                  <div className="mt-8 px-8 py-5 border border-white/10 bg-white/[0.04]">
                    <p className="font-serif text-white/80 text-lg font-medium italic">{treatment.tagline}</p>
                  </div>
                  <div className="w-20 h-px bg-white/15 mt-8" />
                </div>
                <div className="absolute top-6 left-6 w-10 h-10 border border-white/10" />
                <div className="absolute bottom-6 right-6 w-10 h-10 border border-white/10" />
              </div>

              {/* Content panel */}
              <div className={`flex flex-col justify-center p-12 lg:p-16 border-b border-border ${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="w-8 h-px bg-primary/40 mb-6" />
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                  {treatment.name}
                </h2>
                <p className="text-[10px] uppercase tracking-[0.35em] text-primary/70 font-semibold mb-6">
                  {treatment.tagline}
                </p>
                <p className="text-foreground/65 leading-relaxed text-lg font-light mb-6">
                  {treatment.summary}
                </p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-8">
                  {treatment.highlight}
                </p>
                <Link href={`/tratamientos/${treatment.slug}`}>
                  <button
                    data-testid={`button-treatment-${treatment.slug}`}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-[10px] uppercase tracking-[0.35em] font-semibold hover:bg-primary hover:text-white transition-all duration-500"
                  >
                    {tp.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </RevealSection>
        ))}
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 bg-[hsl(25,20%,10%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <RevealSection>
            <motion.div variants={fadeUp}>
              <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-[hsl(82,28%,55%)] mb-6 block">
                — {tp.cta_consulta} —
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              {t.cta.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/45 text-lg font-light mb-10 max-w-lg mx-auto">
              {t.cta.subtitle}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/consulta">
                <button
                  data-testid="button-tratamientos-cta"
                  className="group inline-flex items-center gap-3 px-12 py-5 bg-primary text-white text-[11px] uppercase tracking-[0.4em] font-semibold hover:bg-primary/80 transition-all duration-500"
                >
                  {t.cta.button}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>
          </RevealSection>
        </div>
      </section>
    </BaseLayout>
  );
}
