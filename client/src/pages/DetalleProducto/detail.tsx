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
      {/* 
      <ResultadosSection detail={detail} /> */}
      <CtaSection detail={detail} />
    </BaseLayout>
  );
}
