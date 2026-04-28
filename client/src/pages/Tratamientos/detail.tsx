import { PageHero } from "@/components/layout/PageHero";
import { SEO } from "@/components/seo";
import { useLanguage } from "@/i18n";
import { BaseLayout } from "@/layout/base-layout";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, ArrowBigLeft } from "lucide-react";
import { useRef } from "react";
import { Link, useParams } from "wouter";

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

const heroGradients: Record<string, string> = {
  endolift: "from-[hsl(82,18%,14%)] via-[hsl(82,14%,18%)] to-[hsl(35,18%,12%)]",
  "toxina-botulinica": "from-[hsl(35,22%,12%)] via-[hsl(25,18%,16%)] to-[hsl(82,12%,14%)]",
  primex: "from-[hsl(60,12%,14%)] via-[hsl(82,15%,18%)] to-[hsl(35,18%,12%)]",
  "acido-hialuronico": "from-[hsl(35,22%,14%)] via-[hsl(25,18%,17%)] to-[hsl(35,12%,12%)]",
  bioestimulacion: "from-[hsl(82,22%,13%)] via-[hsl(82,16%,18%)] to-[hsl(35,18%,12%)]",
};

type TreatmentSlug = "endolift" | "toxina-botulinica" | "primex" | "acido-hialuronico" | "bioestimulacion";

interface TreatmentInfo {
  hero_label: string;
  name: string;
  tagline: string;
  positioning: string;
  candidate_title: string;
  candidate_body: string;
  candidate_points: string[];
  process_steps: Array<{ num: string; title: string; body: string }>;
  benefits: string[];
}

const VALID_SLUGS: readonly TreatmentSlug[] = [
  "endolift",
  "toxina-botulinica",
  "primex",
  "acido-hialuronico",
  "bioestimulacion",
];

const isValidSlug = (s: string): s is TreatmentSlug =>
  (VALID_SLUGS as readonly string[]).includes(s);

export default function TratamientoDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug as string;
  const { t } = useLanguage();

  const td = t.treatmentDetail;

  const treatmentDict: Record<TreatmentSlug, TreatmentInfo> = {
    endolift: td.endolift,
    "toxina-botulinica": td["toxina-botulinica"],
    primex: td.primex,
    "acido-hialuronico": td["acido-hialuronico"],
    bioestimulacion: td.bioestimulacion,
  };

  const detail: TreatmentInfo | null = isValidSlug(slug) ? treatmentDict[slug] : null;

  if (!detail) {
    return (
      <BaseLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="font-serif text-2xl text-foreground mb-6">{td.not_found}</p>
            <Link href="/tratamientos">
              <button className="px-6 py-3 bg-primary text-white text-sm uppercase tracking-widest">
                {td.view_all}
              </button>
            </Link>
          </div>
        </div>
      </BaseLayout>
    );
  }

  const gradientClass = heroGradients[slug] || heroGradients.endolift;

  return (
    <BaseLayout>
      <SEO
        title={`${detail.name} | Dra. Lore López`}
        description={detail.positioning.slice(0, 160)}
        canonicalPath={`/tratamientos/${slug}`}
      />

      {/* ─── HERO ─── */}
      <PageHero
        title={detail.name}
        subtitle={detail.hero_label}
        description={detail.tagline}
        className={`bg-gradient-to-br ${gradientClass}`}
        dark={true}
      >
        <Link 
          href="/tratamientos" 
          className="inline-flex items-center gap-3 text-white/50 hover:text-white transition-all text-[10px] uppercase tracking-[0.45em] font-bold mt-4"
        >
          <ArrowLeft className="w-4 h-4" />
          {td.back}
        </Link>
      </PageHero>

      {/* ─── POSITIONING ─── */}
      <section className="py-24 bg-[hsl(35,28%,97%)]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center">
              <div className="w-12 h-px bg-primary/40 mx-auto mb-8" />
              <p className="font-serif text-2xl md:text-3xl text-foreground/80 leading-relaxed font-light">
                {detail.positioning}
              </p>
              <div className="w-12 h-px bg-primary/40 mx-auto mt-8" />
            </motion.div>
          </RevealSection>
        </div>
      </section>

      {/* ─── IDEAL CANDIDATE ─── */}
      <section className="py-24 bg-[hsl(82,12%,94%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-border" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <motion.div variants={fadeUp}>
                  <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-primary mb-4 block">
                    — {td.candidate_label} —
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-foreground leading-tight mb-5">
                  {detail.candidate_title}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-foreground/65 leading-relaxed text-lg font-light">
                  {detail.candidate_body}
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="space-y-4">
                {detail.candidate_points.map((point: string, i: number) => (
                  <div key={i} data-testid={`candidate-point-${i}`} className="flex items-start gap-4 p-5 bg-white border border-border group hover:border-primary/25 transition-colors duration-400">
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center bg-primary/10">
                      <CheckCircle className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/70 leading-relaxed text-sm">{point}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-24 bg-[hsl(25,20%,10%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="text-center mb-16">
              <motion.div variants={fadeUp}>
                <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-[hsl(82,28%,55%)] mb-4 block">
                  — {td.process_label} —
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-white">
                {detail.name}
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {detail.process_steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  data-testid={`process-step-${i}`}
                  className="group bg-[hsl(25,20%,10%)] p-8 hover:bg-white/[0.04] transition-all duration-400"
                >
                  <div className="text-[10px] font-mono text-[hsl(82,28%,45%)] tracking-widest mb-5">{step.num}</div>
                  <div className="w-6 h-px bg-primary/30 mb-5" />
                  <h3 className="font-serif text-lg font-bold text-white mb-3 group-hover:text-[hsl(82,28%,65%)] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </RevealSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[hsl(35,28%,97%)] to-transparent" />
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="py-24 bg-[hsl(35,28%,97%)]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div variants={fadeUp}>
                  <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-primary mb-4 block">
                    — {td.benefits_label} —
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  {detail.name}
                </motion.h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {detail.benefits.map((benefit: string, i: number) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    data-testid={`benefit-${i}`}
                    className="group flex items-start gap-4 p-5 border border-border hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-400"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-foreground/70 text-sm leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-[hsl(82,12%,94%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-border" />
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <RevealSection>
            <motion.div variants={fadeUp}>
              <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-primary mb-6 block">
                — {td.cta_label} —
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-5">
              {detail.name}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg font-light mb-10 max-w-lg mx-auto">
              {td.cta_note}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consulta">
                <button
                  data-testid="button-detail-cta"
                  className="group inline-flex items-center gap-3 px-12 py-5 bg-primary text-white text-[11px] uppercase tracking-[0.4em] font-semibold hover:bg-primary/80 transition-all duration-500"
                >
                  {td.cta_button}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <Link href="/tratamientos">
                <button className="group inline-flex items-center gap-3 px-10 py-5 border border-border text-[11px] uppercase tracking-[0.35em] font-semibold hover:border-primary/40 transition-all duration-500 text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4" />
                  {td.back}
                </button>
              </Link>
            </motion.div>
          </RevealSection>
        </div>
      </section>
    </BaseLayout>
  );
}
