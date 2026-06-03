import { PageHeroTreatment } from "@/components/layout/PageHeroTreatment";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";
import { BaseLayout } from "@/layout/base-layout";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "wouter";
import LuxuryLabel from "../Home/components/LuxuryLabel";

const heroGradients: Record<string, string> = {
  endolift: "from-[hsl(82,18%,14%)] via-[hsl(82,14%,18%)] to-[hsl(35,18%,12%)]",
  "toxina-botulinica":
    "from-[hsl(35,22%,12%)] via-[hsl(25,18%,16%)] to-[hsl(82,12%,14%)]",
  primex: "from-[hsl(60,12%,14%)] via-[hsl(82,15%,18%)] to-[hsl(35,18%,12%)]",
  "acido-hialuronico":
    "from-[hsl(35,22%,14%)] via-[hsl(25,18%,17%)] to-[hsl(35,12%,12%)]",
  bioestimulacion:
    "from-[hsl(82,22%,13%)] via-[hsl(82,16%,18%)] to-[hsl(35,18%,12%)]",
};

type TreatmentSlug =
  | "endolift"
  | "toxina-botulinica"
  | "primex"
  | "acido-hialuronico"
  | "bioestimulacion";

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

  const detail: TreatmentInfo | null = isValidSlug(slug)
    ? treatmentDict[slug]
    : null;

  if (!detail) {
    return (
      <BaseLayout>
        <div className="min-h-screen flex items-center justify-center bg-ivory">
          <div className="text-center">
            <p className="font-serif text-2xl text-foreground mb-8 italic">
              {td.not_found}
            </p>
            <Button asChild variant="editorial">
              <Link href="/tratamientos">{td.view_all}</Link>
            </Button>
          </div>
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <SEO
        title={`${detail.name} | Dra. Lore López`}
        description={detail.positioning.slice(0, 160)}
        canonicalPath={`/tratamientos/${slug}`}
      />

      {/* ─── HERO CINEMATIC ─── */}
      <PageHeroTreatment
        title={detail.name}
        subtitle={detail.hero_label}
        description={detail.tagline}
        image={"/images/hero5.png"}
      />

      {/* ─── POSITIONING MANIFESTO ─── */}

      <section className="relative py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="grid lg:grid-cols-12 gap-16 items-start">

      {/* LEFT */}

      <div className="lg:col-span-7">

        <span className="uppercase tracking-[0.35em] text-primary text-[11px] font-semibold">
          Filosofía del tratamiento
        </span>

        <h2 className="font-heading text-5xl lg:text-7xl leading-[0.9] mt-6 mb-10">
          No buscamos cambiar tu rostro.
          <br />
          Buscamos revelar su mejor versión.
        </h2>

        <p className="text-lg text-black/60 leading-relaxed max-w-2xl">
          Cada procedimiento es diseñado para respetar la armonía facial,
          potenciar la belleza natural y generar resultados progresivos que
          evolucionan contigo.
        </p>

      </div>

      {/* RIGHT */}

      <div className="lg:col-span-5">

        <div className="space-y-10">

          {[
            {
              number: "01",
              title: "Naturalidad",
              description:
                "Resultados elegantes que respetan tus rasgos."
            },
            {
              number: "02",
              title: "Precisión médica",
              description:
                "Cada decisión se basa en análisis facial y criterio clínico."
            },
            {
              number: "03",
              title: "Armonía integral",
              description:
                "Tratamos el rostro como un conjunto y no zonas aisladas."
            }
          ].map((item) => (
            <div key={item.number} className="flex gap-6">

              <span className="font-heading text-5xl text-primary/20 leading-none">
                {item.number}
              </span>

              <div>
                <h3 className="font-heading text-2xl mb-2">
                  {item.title}
                </h3>

                <p className="text-black/60 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  </div>

  {/* Background Number */}

  <span className="absolute right-0 top-1/2 -translate-y-1/2 font-heading text-[400px] text-primary/[0.03] leading-none pointer-events-none">
    01
  </span>
</section>

      <section className="section-spacing bg-white relative overflow-hidden">
        {/* subtle architectural lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-black/[0.04]" />

        <div className="section-container relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            {/* LABEL */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 mb-14"
            >
              <span className="w-12 h-px bg-primary/30" />

              <span
                className="
            text-[10px]
            tracking-[0.45em]
            uppercase
            text-primary
            font-semibold
          "
              >
                Más allá de la estética
              </span>
            </motion.div>

            {/* MANIFESTO */}
            <motion.div variants={fadeUp} className="relative">
              <p
                className="
            font-serif
            text-black
            leading-[1.25]
            tracking-[-0.03em]
            max-w-5xl
            text-4xl
          "
              >
                {detail.positioning}
              </p>

              {/* decorative quote mark */}
              <span
                className="
            absolute
            -top-10
            -left-6
            text-[8rem]
            font-serif
            text-primary/10
            leading-none
            hidden lg:block
          "
              >
                “
              </span>
            </motion.div>
          </motion.div>
        </div>
        {/* ─── CINEMATIC OVERLAYS ─── */}
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent z-40" />

        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </section>

      {/* ─── IDEAL CANDIDATE GRID ─── */}
      <section className="section-spacing bg-ivory/50">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <motion.div variants={fadeUp}>
                <LuxuryLabel>{td.candidate_label}</LuxuryLabel>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="font-heading text-black leading-tight mt-6 mb-8 tracking-tight"
                style={{ fontSize: "var(--text-5xl)" }}
              >
                {detail.candidate_title}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-foreground/60 text-lg font-light leading-relaxed  "
              >
                {detail.candidate_body}
              </motion.p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="border-t border-black/10">
                {detail.candidate_points.map((point: string, i: number) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="
          group
          grid
          grid-cols-[80px_1fr]
          gap-6
          py-8
          border-b
          border-black/10
          transition-all
          duration-500
        "
                  >
                    {/* NUMBER */}
                    <div
                      className="
            text-primary/40
            font-serif
            italic
            text-3xl
            leading-none
            transition-all
            duration-500
            group-hover:text-primary
            group-hover:translate-x-1
          "
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* TEXT */}
                    <div>
                      <p
                        className="
              text-[1.05rem]
              leading-[1.9]
              text-foreground/75
              font-light
              tracking-[0.01em]
              transition-all
              duration-500
              group-hover:text-foreground
            "
                      >
                        {point}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MEDICAL PROCESS ─── */}
      <section className="section-spacing bg-black relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[140px]" />

        <div className="section-container relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.div
              variants={fadeUp}
              className="text-center flex justify-center"
            >
              <LuxuryLabel dark>{td.process_label}</LuxuryLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-white leading-none tracking-tighter mt-6"
              style={{ fontSize: "var(--text-7xl)" }}
            >
              {detail.name}
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {detail.process_steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group p-10 bg-black/40 hover:bg-white/[0.02] transition-all duration-700 relative overflow-hidden"
              >
                <span className="absolute -right-4 -top-8 font-heading text-[120px] text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-700 select-none">
                  0{i + 1}
                </span>

                <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-8 block">
                  Step {step.num}
                </span>

                <h3 className="font-heading text-2xl text-white mb-6 group-hover:text-primary/80 transition-colors">
                  {step.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed font-light">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <motion.div variants={fadeUp}>
                <LuxuryLabel>{td.benefits_label}</LuxuryLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-heading text-black leading-tight tracking-tight mt-6"
                style={{ fontSize: "var(--text-6xl)" }}
              >
                {detail.name}
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {detail.benefits.map((benefit: string, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-6 border border-black/5 bg-ivory/20 group hover:border-primary/20 transition-all duration-500"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0 group-hover:scale-125 group-hover:bg-primary transition-all" />
                  <span className="text-foreground/70 text-[15px] leading-relaxed ">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FINAL ACTION ─── */}
      <section className="section-spacing bg-ivory relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-black/[0.05]" />

        <div className="section-container relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto flex flex-col items-center text-center"
          >
            {/* LABEL */}
            <motion.div variants={fadeUp}>
              <LuxuryLabel>{td.cta_label}</LuxuryLabel>
            </motion.div>

            {/* TITLE */}
            <motion.h2
              variants={fadeUp}
              className="font-heading text-black mb-6 tracking-tight mt-6 text-4xl md:text-6xl"
            >
              El siguiente paso es decisión tuya
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-foreground/60 font-light max-w-2xl mx-auto italic font-serif mb-14"
            >
              Agenda tu valoración y descubre cómo este tratamiento puede
              adaptarse a ti. Resultados naturales, planificación personalizada
              y acompañamiento en cada paso.
            </motion.p>

            {/* ACTIONS */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button asChild variant="editorial" withShimmer>
                <Link href="/contacto">
                  {td.cta_button}
                  <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="px-8 text-[11px] uppercase tracking-[0.4em] text-primary"
              >
                <Link href="/tratamientos">
                  <ArrowLeft className="mr-3 w-4 h-4" />
                  {td.back}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </BaseLayout>
  );
}
