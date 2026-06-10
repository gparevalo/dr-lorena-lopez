import { PageHeroTreatment } from "@/components/layout/PageHeroTreatment";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";
import { BaseLayout } from "@/layout/base-layout";
import { Link, useParams } from "wouter";
import BeneficiosSection from "./sections/BeneficiosSection";
import CandidatosSection from "./sections/CandidatosSection";
import CtaSection from "./sections/CtaSection";
import FilosofiaSection from "./sections/FilosofiaSection";
import { TreatmentInfo } from "./sections/interfaces";
import ProcesoSection from "./sections/ProcesoSection";
import { motion } from "framer-motion";
import LuxuryLabel from "../Home/components/LuxuryLabel";
import { fadeUp } from "@/lib/animations";

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
      <FilosofiaSection detail={detail} />
      <CandidatosSection detail={detail} />
      <ProcesoSection detail={detail} />
      <BeneficiosSection detail={detail} />

      <div className="max-w-8xl items-center ">
        {detail.treatments && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-7xl mx-auto mb-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto mb-16"
              >
                <motion.div variants={fadeUp} className="flex justify-center">
                  <LuxuryLabel> Tratamientos</LuxuryLabel>
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  className="font-heading mb-8 text-black leading-none tracking-tighter"
                >
                  Tipo de tratamientos con laser
                </motion.h2>
              </motion.div>{" "}
              <div className="lg:col-span-7 grid grid-cols-1¸ md:grid-cols-2   gap-6 ">
                {detail.treatments.map((item, index) => (
                  <div
                    key={item.id}
                    className="group relative rounded-3xl border border-[#ECE8E2] bg-white overflow-hidden hover:shadow-sm hover:scale-[1.02] transition"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                      {/* LEFT - IMAGE */}
                      <div className="hidden md:block relative bg-[#FAF9F7] min-h-[406px]">
                        <img
                          src={item.imageSrc}
                          alt={item.name}
                          className="absolute inset-0 w-full min-h-[480px] object-cover"
                        />
                      </div>

                      {/* RIGHT - CONTENT */}
                      <div className="p-6 md:p-10 flex flex-col justify-center">
                        <div>
                          <p className="text-black/30 text-[11px] uppercase tracking-widest">
                            {item.tagline}
                          </p>

                          <p className="font-heading text-xl leading-snug mt-1">
                            {item.name}
                          </p>
                        </div>

                        <div className="border-t border-black/5 mt-4 mb-4"></div>

                        <p className="text-black/60 text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </div>
      {/* 
      <ResultadosSection detail={detail} /> */}
      <CtaSection detail={detail} />
    </BaseLayout>
  );
}
