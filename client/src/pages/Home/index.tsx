import { SEO } from "@/components/seo";
import { useLanguage } from "@/i18n";
import { BaseLayout } from "@/layout/base-layout";
import FraseVideo from "./components/FraseVideo";
import { SobreDoctora } from "./sections/abaut/SobreDoctora";
import CtaSection from "./sections/cta/CtaSection";
import EstadisticaSection from "./sections/estadisticas/EstadisticaSection";
import PremiumHero from "./sections/hero/PremiumHero";
import LongeviLiftSignatureSection from "./sections/highticket/HeroLongeviLift";
import PatientJourneySection from "./sections/journey/PatientJourneySection";
import PatientStoriesSection from "./sections/productos/PatientStoriesSection";
import ProductosSection from "./sections/productos/ProductosSection";
import TreatmentsHome from "./sections/resultados/TreatmentsHome";

export default function Home() {
  const { t } = useLanguage();

  return (
    <BaseLayout>
      <SEO
        title="Dra. Lore López | Medicina Estética de Lujo · 2026 Editorial"
        description="Experiencia médica premium en medicina estética avanzada, rejuvenecimiento facial y láser. La autoridad en belleza natural y confianza médica."
        canonicalPath="/"
      />
      <PremiumHero />
      <EstadisticaSection />
      <LongeviLiftSignatureSection />

      <TreatmentsHome />
      <PatientJourneySection />
      <FraseVideo />
      <ProductosSection />
      <PatientStoriesSection />
      <SobreDoctora />
      <CtaSection />
    </BaseLayout>
  );
}
