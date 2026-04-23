import { SEO } from "@/components/seo";
import { BaseLayout } from "@/layout/base-layout";
import { useLanguage } from "@/i18n";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

export default function Doctora() {
  const { t } = useLanguage();
  const d = t.doctora;

  return (
    <BaseLayout>
      <SEO title={d.seo_title} description={d.seo_desc} canonicalPath="/doctora" />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,22%,9%)] via-[hsl(35,20%,12%)] to-[hsl(82,14%,16%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(ellipse at 60% 40%, hsl(35,40%,60%) 0%, transparent 55%), radial-gradient(ellipse at 20% 70%, hsl(82,28%,50%) 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 pt-40 pb-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-8"
              >
                <span className="text-[10px] uppercase tracking-[0.55em] font-semibold text-[hsl(82,28%,62%)]">
                  — {d.hero_label} —
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
              >
                {d.hero_name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-[10px] uppercase tracking-[0.35em] text-white/35 font-medium"
              >
                {t.about.specialty}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="hidden lg:block"
            >
              <div className="border border-white/8 p-10 bg-white/[0.02]">
                <Quote className="w-6 h-6 text-primary/40 mb-5" />
                <p className="font-serif text-xl text-white/75 leading-relaxed font-light italic">
                  {d.hero_statement}
                </p>
                <div className="w-12 h-px bg-primary/30 mt-6" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[hsl(35,28%,97%)] to-transparent" />
      </section>

      {/* ─── OPENING STORY ─── */}
      <section className="py-28 bg-[hsl(35,28%,97%)]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div variants={fadeUp}>
                <div
                  className="relative h-[580px] overflow-hidden"
                  style={{ background: "linear-gradient(145deg, hsl(35,22%,90%) 0%, hsl(82,15%,85%) 55%, hsl(35,25%,88%) 100%)" }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                    <div className="w-24 h-24 rounded-full bg-[hsl(35,20%,80%)] border-2 border-[hsl(35,22%,70%)] mb-8 flex items-center justify-center">
                      <span className="font-serif text-4xl font-bold text-[hsl(25,22%,22%)]">LL</span>
                    </div>
                    <p className="font-serif text-2xl font-bold text-[hsl(25,22%,16%)] mb-1">{d.hero_name}</p>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[hsl(25,22%,40%)]">{t.about.specialty}</p>
                    <div className="mt-8 w-full max-w-xs border border-[hsl(35,22%,75%)] bg-white/40 p-6">
                      <Quote className="w-4 h-4 text-primary/30 mb-3" />
                      <p className="text-sm text-[hsl(25,22%,28%)] leading-relaxed italic font-light">
                        {d.hero_statement}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-6 left-6 w-14 h-14 border border-[hsl(35,22%,72%)]" />
                  <div className="absolute bottom-6 right-6 w-14 h-14 border border-[hsl(82,15%,72%)]" />
                </div>
              </motion.div>

              <div>
                <motion.div variants={fadeUp}>
                  <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-primary mb-4 block">
                    — {d.opening_label} —
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
                  {d.opening_title}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-foreground/75 leading-relaxed text-lg font-light mb-6">
                  {d.opening_body_1}
                </motion.p>
                <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed font-light">
                  {d.opening_body_2}
                </motion.p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-28 bg-[hsl(25,20%,10%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="text-center mb-16">
              <motion.div variants={fadeUp}>
                <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-[hsl(82,28%,55%)] mb-4 block">
                  — {d.timeline_label} —
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-white">
                {d.timeline_title}
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {d.timeline.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  data-testid={`timeline-item-${i}`}
                  className="group bg-[hsl(25,20%,10%)] p-8 hover:bg-white/[0.04] transition-all duration-400"
                >
                  <div className="text-[10px] font-mono text-[hsl(82,28%,45%)] tracking-widest mb-5 uppercase">
                    {item.year}
                  </div>
                  <div className="w-6 h-px bg-primary/30 mb-5" />
                  <h3 className="font-serif text-lg font-bold text-white mb-3 leading-snug group-hover:text-[hsl(82,28%,65%)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/38 text-sm leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </RevealSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[hsl(82,12%,94%)] to-transparent" />
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="py-28 bg-[hsl(82,12%,94%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-border" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.div variants={fadeUp}>
                  <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-primary mb-4 block">
                    — {d.philosophy_label} —
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
                  {d.philosophy_title}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed text-lg font-light">
                  {d.philosophy_body}
                </motion.p>
              </div>

              <motion.div variants={fadeUp}>
                <div className="border-l-4 border-primary pl-10 py-4">
                  <Quote className="w-8 h-8 text-primary/25 mb-5" />
                  <p className="font-serif text-2xl md:text-3xl text-foreground/85 leading-relaxed font-light italic">
                    {d.philosophy_quote}
                  </p>
                  <div className="mt-8">
                    <p className="font-serif text-base font-bold text-foreground">{d.hero_name}</p>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-0.5">{t.about.specialty}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── HUMAN ─── */}
      <section className="py-28 bg-[hsl(35,28%,97%)]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center">
              <motion.div variants={fadeUp}>
                <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-primary mb-6 block">
                  — {d.human_label} —
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
                {d.human_title}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-foreground/65 leading-relaxed text-xl font-light">
                {d.human_body}
              </motion.p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-[hsl(25,20%,10%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[60%] aspect-square bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <RevealSection>
            <motion.div variants={fadeUp}>
              <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-[hsl(82,28%,55%)] mb-6 block">
                — {d.cta_label} —
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
              {d.cta_title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/45 text-lg font-light mb-10 max-w-lg mx-auto">
              {d.cta_body}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/consulta">
                <button
                  data-testid="button-doctora-cta"
                  className="group inline-flex items-center gap-3 px-12 py-5 bg-primary text-white text-[11px] uppercase tracking-[0.4em] font-semibold hover:bg-primary/80 transition-all duration-500"
                >
                  {d.cta_button}
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
