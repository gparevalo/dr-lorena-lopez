import { SEO } from "@/components/seo";
import { useLanguage } from "@/i18n";
import { BaseLayout } from "@/layout/base-layout";
import PatientStoriesSection from "./sections/productos/PatientStoriesSection";
import FraseVideo from "./components/FraseVideo";
import { SobreDoctora } from "./sections/abaut/SobreDoctora";
import CtaSection from "./sections/cta/CtaSection";
import EstadisticaSection from "./sections/estadisticas/EstadisticaSection";
import PremiumHero from "./sections/hero/PremiumHero";
import PatientJourneySection from "./sections/journey/PatientJourneySection";
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
