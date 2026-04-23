import { SEO } from "@/components/seo";
import { BaseLayout } from "@/layout/base-layout";
import { useLanguage } from "@/i18n";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  ShieldCheck,
  Microscope,
  Leaf,
  Zap,
  Heart,
  Star,
  ArrowRight,
  Check,
  Quote,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-block text-[10px] uppercase tracking-[0.45em] font-semibold text-primary mb-4">
      — {children} —
    </span>
  );
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const TREATMENT_SLUGS = [
  "endolift",
  "toxina-botulinica",
  "primex",
  "acido-hialuronico",
  "bioestimulacion",
] as const;

const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="w-5 h-5" />,
  shield: <ShieldCheck className="w-5 h-5" />,
  microscope: <Microscope className="w-5 h-5" />,
  leaf: <Leaf className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
  heart: <Heart className="w-5 h-5" />,
};

export default function Home() {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <BaseLayout>
      <SEO
        title="Dra. Lore López | Medicina Estética Avanzada · Facial · Láser · Cirugía"
        description="Especialista en medicina estética avanzada, rejuvenecimiento facial, cirugía y tratamientos láser. Resultados naturales con protocolos médicos personalizados."
        canonicalPath="/"
        extraSchemas={[
          {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Dra. Lore López - Medicina Estética Avanzada",
            description: "Especialista en medicina estética avanzada, rejuvenecimiento facial y tratamientos láser.",
            medicalSpecialty: "Aesthetic Medicine",
          },
        ]}
      />

      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroParallaxY }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,20%,12%)] via-[hsl(25,18%,16%)] to-[hsl(82,15%,18%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(ellipse at 30% 50%, hsl(82,28%,52%) 0%, transparent 60%), radial-gradient(ellipse at 75% 30%, hsl(35,35%,70%) 0%, transparent 55%)`,
            }}
          />
          <div className="absolute top-1/3 right-0 w-[45%] h-[70%] bg-gradient-to-l from-[hsl(82,15%,22%)]/30 to-transparent" />
        </motion.div>

        <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16 pt-28 pb-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-[10px] uppercase tracking-[0.55em] font-semibold text-[hsl(82,28%,62%)]">
                — {t.hero.label} —
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              {t.hero.headline_1}
              <br />
              <em className="not-italic text-[hsl(35,35%,75%)]">{t.hero.headline_2}</em>
              <br />
              <span className="text-[hsl(82,28%,62%)]">{t.hero.headline_3}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/55 text-lg leading-relaxed max-w-md mb-10 font-light"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <a href="#contacto">
                <button
                  data-testid="button-hero-cta-primary"
                  className="group px-8 py-4 bg-primary text-white text-[11px] uppercase tracking-[0.35em] font-semibold hover:bg-primary/80 transition-all duration-500 flex items-center gap-3"
                >
                  {t.hero.cta_primary}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </a>
              <a href="#tratamientos">
                <button
                  data-testid="button-hero-cta-secondary"
                  className="px-8 py-4 border border-white/25 text-white text-[11px] uppercase tracking-[0.35em] font-semibold hover:border-white/60 hover:bg-white/5 transition-all duration-500"
                >
                  {t.hero.cta_secondary}
                </button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.85 }}
              className="flex items-center gap-8"
            >
              {[t.hero.credential_1, t.hero.credential_2, t.hero.credential_3].map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary/60" />
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/35 font-medium">{c}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[420px] h-[520px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(82,18%,30%)]/20 to-[hsl(35,28%,70%)]/10 border border-white/8" />
              <div className="absolute inset-6 border border-white/5" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-10 text-center">
                <div className="w-16 h-px bg-primary/40" />
                <p className="font-serif text-2xl text-white/80 font-bold leading-snug italic">
                  "La belleza natural comienza con precisión médica"
                </p>
                <div className="w-16 h-px bg-primary/40" />
                <div>
                  <p className="font-serif text-white font-bold text-lg">Dra. Lore López</p>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/40 mt-1">Medicina Estética Avanzada</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(35,28%,97%)] to-transparent" />
      </section>

      {/* ─── TRUST & AUTHORITY ─── */}
      <section id="nosotros" className="py-28 bg-[hsl(35,28%,97%)]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
              <div>
                <motion.div variants={fadeUp}>
                  <SectionLabel>{t.trust.label}</SectionLabel>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight"
                >
                  {t.trust.title}
                </motion.h2>
              </div>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed text-lg font-light pb-1"
              >
                {t.trust.subtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              {t.trust.items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  data-testid={`card-trust-${i}`}
                  className="group py-10 px-0 md:px-12 first:pl-0 last:pr-0"
                >
                  <div className="w-7 h-7 text-primary mb-8 group-hover:text-primary/70 transition-colors">
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── TREATMENTS ─── */}
      <section id="tratamientos" className="bg-[hsl(25,20%,10%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-end">
              <div>
                <motion.div variants={fadeUp}>
                  <span className="inline-block text-[10px] uppercase tracking-[0.45em] font-semibold text-[hsl(82,28%,55%)] mb-4">
                    — {t.treatments.label} —
                  </span>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight"
                >
                  {t.treatments.title}
                </motion.h2>
              </div>
              <motion.p
                variants={fadeUp}
                className="text-white/45 leading-relaxed text-lg font-light pb-1"
              >
                {t.treatments.subtitle}
              </motion.p>
            </div>

            <div className="border-t border-white/8">
              {t.treatments.items.map((item, i) => (
                <motion.a
                  key={i}
                  href={`/tratamientos/${TREATMENT_SLUGS[i]}`}
                  variants={fadeUp}
                  data-testid={`card-treatment-${i}`}
                  className="group flex items-start gap-8 lg:gap-16 py-10 border-b border-white/8 hover:bg-white/[0.025] transition-all duration-500 cursor-pointer px-2 -mx-2"
                >
                  <span className="font-mono text-[10px] text-white/20 tracking-widest pt-2 flex-shrink-0 w-6">
                    0{i + 1}
                  </span>
                  <div className="flex-1 grid lg:grid-cols-[2fr_1fr] gap-6 lg:gap-16 items-start">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[hsl(82,28%,65%)] transition-colors duration-400 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-[hsl(82,28%,45%)] font-medium">
                        {item.tagline}
                      </p>
                    </div>
                    <p className="text-white/38 text-sm leading-relaxed font-light hidden lg:block">
                      {item.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/15 group-hover:text-primary transition-all duration-400 flex-shrink-0 mt-2 group-hover:translate-x-1" />
                </motion.a>
              ))}
            </div>
          </RevealSection>
        </div>

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-16 pt-10">
          <RevealSection>
            <motion.div variants={fadeUp}>
              <a href="/tratamientos">
                <button
                  data-testid="button-treatments-all"
                  className="group inline-flex items-center gap-3 text-white/35 text-[10px] uppercase tracking-[0.45em] font-semibold hover:text-white/70 transition-colors duration-500"
                >
                  {t.treatments.cta}
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </button>
              </a>
            </motion.div>
          </RevealSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[hsl(35,28%,97%)] to-transparent" />
      </section>

      {/* ─── ABOUT THE DOCTOR ─── */}
      <section className="py-28 bg-[hsl(35,28%,97%)]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeUp}>
              <div
                className="relative h-[560px] overflow-hidden"
                style={{ background: "linear-gradient(135deg, hsl(35,22%,90%) 0%, hsl(82,15%,85%) 60%, hsl(35,25%,88%) 100%)" }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-[hsl(35,25%,80%)] border-2 border-[hsl(35,25%,70%)] mb-6 flex items-center justify-center">
                    <span className="font-serif text-3xl font-bold text-[hsl(25,22%,25%)]">LL</span>
                  </div>
                  <p className="font-serif text-xl font-bold text-[hsl(25,22%,18%)]">{t.about.title}</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[hsl(25,22%,40%)] mt-1">{t.about.specialty}</p>
                  <div className="mt-8 p-6 border border-[hsl(35,25%,75%)] bg-white/50 max-w-xs">
                    <Quote className="w-5 h-5 text-primary/40 mb-3" />
                    <p className="text-sm text-[hsl(25,22%,30%)] leading-relaxed italic font-light">
                      {t.about.philosophy}
                    </p>
                  </div>
                </div>
                <div className="absolute top-6 left-6 w-16 h-16 border border-[hsl(35,25%,70%)]" />
                <div className="absolute bottom-6 right-6 w-16 h-16 border border-[hsl(82,15%,70%)]" />
              </div>
            </motion.div>

            <div>
              <motion.div variants={fadeUp}>
                <SectionLabel>{t.about.label}</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-2"
              >
                {t.about.title}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8"
              >
                {t.about.specialty}
              </motion.p>

              <motion.p variants={fadeUp} className="text-foreground/75 leading-relaxed mb-5 text-lg font-light">
                {t.about.bio_1}
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-10 font-light">
                {t.about.bio_2}
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-3 mb-10">
                {t.about.credentials.map((c: string, i: number) => (
                  <div key={i} data-testid={`text-credential-${i}`} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center bg-primary/10">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/70 leading-relaxed">{c}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <a href="#contacto">
                  <button
                    data-testid="button-about-cta"
                    className="group px-8 py-4 bg-primary text-white text-[11px] uppercase tracking-[0.35em] font-semibold hover:bg-primary/80 transition-all duration-500 flex items-center gap-3"
                  >
                    {t.nav.agendar}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </a>
              </motion.div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── RESULTS PHILOSOPHY ─── */}
      <section className="py-28 bg-[hsl(82,12%,94%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-border" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.div variants={fadeUp}>
                  <SectionLabel>{t.philosophy.label}</SectionLabel>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5"
                >
                  {t.philosophy.title}
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="text-muted-foreground leading-relaxed text-lg font-light"
                >
                  {t.philosophy.subtitle}
                </motion.p>
              </div>

              <div className="space-y-0 border-l border-border">
                {t.philosophy.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    data-testid={`card-step-${i}`}
                    className="group relative pl-12 pb-10 last:pb-0 hover:pl-14 transition-all duration-500"
                  >
                    <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 bg-[hsl(82,12%,94%)] border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary transition-all duration-500" />
                    <span className="text-[10px] font-mono text-primary/50 tracking-widest mb-2 block">{step.number}</span>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-[hsl(35,28%,97%)]">
        {/* Featured pull-quote */}
        <RevealSection>
          <motion.div
            variants={fadeUp}
            data-testid="card-testimonial-0"
            className="bg-[hsl(25,20%,10%)] py-28 px-8 lg:px-16 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="max-w-[1400px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-[hsl(82,28%,55%)] mb-8 block">
                    — {t.testimonials.label} —
                  </span>
                  <blockquote className="font-serif text-3xl md:text-4xl text-white font-bold leading-tight italic">
                    "{t.testimonials.items[0].text}"
                  </blockquote>
                </div>
                <div className="lg:border-l lg:border-white/10 lg:pl-16">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-serif text-xl font-bold text-white mb-1">{t.testimonials.items[0].name}</p>
                  <p className="text-white/35 text-sm mb-3">{t.testimonials.items[0].age}</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[hsl(82,28%,55%)] font-medium">
                    {t.testimonials.items[0].treatment}
                  </p>
                  <div className="mt-8">
                    <motion.h2 className="font-serif text-4xl md:text-5xl font-bold text-white/10 leading-tight">
                      {t.testimonials.title}
                    </motion.h2>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </RevealSection>

        {/* Two smaller testimonials */}
        <RevealSection>
          <div className="max-w-[1400px] mx-auto px-8 lg:px-16 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {t.testimonials.items.slice(1).map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                data-testid={`card-testimonial-${i + 1}`}
                className="py-14 px-0 md:px-12 first:pl-0 last:pr-0 group"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className="w-2.5 h-2.5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-foreground/65 leading-relaxed mb-8 font-light italic text-base">
                  "{item.text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{item.age}</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-primary/60 mt-2 font-medium">{item.treatment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* ─── CONSULTATION EXPERIENCE ─── */}
      <section className="py-28 bg-[hsl(25,20%,10%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[60%] aspect-square bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <motion.div variants={fadeUp}>
                  <span className="inline-block text-[10px] uppercase tracking-[0.45em] font-semibold text-[hsl(82,28%,55%)] mb-4">
                    — {t.consultation.label} —
                  </span>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
                >
                  {t.consultation.title}
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="text-white/45 leading-relaxed text-lg font-light mb-12"
                >
                  {t.consultation.subtitle}
                </motion.p>
                <motion.div variants={fadeUp}>
                  <a href="/consulta">
                    <button
                      data-testid="button-consultation-cta"
                      className="group inline-flex items-center gap-3 px-10 py-4 bg-primary text-white text-[10px] uppercase tracking-[0.4em] font-semibold hover:bg-primary/80 transition-all duration-500"
                    >
                      {t.nav.agendar}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </a>
                </motion.div>
              </div>

              <div className="border-t border-white/8">
                {t.consultation.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    data-testid={`card-consultation-${i}`}
                    className="group flex gap-8 py-8 border-b border-white/8 hover:bg-white/[0.02] transition-colors duration-400 -mx-4 px-4"
                  >
                    <span className="font-mono text-3xl font-bold text-white/8 flex-shrink-0 leading-none group-hover:text-primary/20 transition-colors duration-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[hsl(82,28%,65%)] transition-colors duration-400">
                        {step.title}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed font-light">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[hsl(35,28%,97%)] to-transparent" />
      </section>

      {/* ─── FINAL CTA ─── */}
      <section id="contacto" className="py-36 bg-[hsl(35,28%,97%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(82,15%,92%)] via-[hsl(35,28%,97%)] to-[hsl(35,28%,97%)]" />

        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection className="flex flex-col items-center text-center">
            <motion.div variants={fadeUp}>
              <SectionLabel>{t.cta.label}</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-3xl mb-6"
            >
              {t.cta.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12 font-light"
            >
              {t.cta.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col items-center gap-5">
              <a href="https://wa.me/" target="_blank" rel="noopener">
                <button
                  data-testid="button-cta-final"
                  className="group px-12 py-5 bg-primary text-white text-[11px] uppercase tracking-[0.4em] font-semibold hover:bg-primary/80 transition-all duration-500 flex items-center gap-4"
                >
                  {t.cta.button}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </a>
              <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{t.cta.note}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-20 pt-16 border-t border-border w-full max-w-2xl flex flex-col md:flex-row justify-center items-center gap-12"
            >
              {[
                { number: "10+", label: "Años de experiencia" },
                { number: "2000+", label: "Pacientes atendidas" },
                { number: "100%", label: "Protocolos personalizados" },
              ].map((stat, i) => (
                <div key={i} data-testid={`stat-${i}`} className="text-center">
                  <p className="font-serif text-4xl font-bold text-primary">{stat.number}</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </RevealSection>
        </div>
      </section>
    </BaseLayout>
  );
}
