import { SEO } from "@/components/seo";
import { useLanguage } from "@/i18n";
import { BaseLayout } from "@/layout/base-layout";
import { fadeUp } from "@/lib/animations";
import { whatsappHref } from "@/lib/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useEffect, useRef } from "react";
import ComunidadSection from "./components/ComunidadSection";
import DifferentiatorsSection from "./components/DifferentiatorsSection";
import { HighTicketHero } from "./components/HighTicketHero";
import MetodoSection from "./components/MetodoSection";
import RecognitionSection from "./components/RecognitionSection";
import ElPlanSection from "./components/ElPlanSection";

export default function HighTicket() {
  const { t } = useLanguage();
  const tp = t.tratamientosPage;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <BaseLayout>
      <SEO
        title={tp.seo_title}
        description={tp.seo_desc}
        canonicalPath="/tratamientos"
      />

      <HighTicketHero
        title={`LongeviLift 360 `}
        title2={`El plan anual de rejuvenecimiento integral de la Dra. Lore López`}
        subtitle={"Plan signature"}
        description={
          "Un protocolo exclusivo para pacientes que buscan resultados naturales, acompañamiento premium y una estrategia médica completa para envejecer mejor."
          //  "LongeviLift 360 comienza entendiendo cómo está envejeciendo tu rostro para diseñar un plan médico personalizado."
        }
        image={"/images/hero-ticket.png"}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:text-start text-center "
        >
          <a
            href={whatsappHref(
              "Hola, quiero aplicar al tratamiento LongeviLift 360. Mi nombre es ..",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex  items-center gap-3  mt-0 px-10 py-4 bg-primary text-white rounded-full uppercase tracking-[0.2em] text-sm font-semibold mr-4"
          >
            <Calendar size={18} />
            Aplicar a valoración premium
          </a>

          <a
            href={whatsappHref(
              "Hola, quiero saber si el tratamiento LongeviLift 360 es para mi. Mi nombre es ..",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-5 mt-2 hover:border-primary transition-colors"
          >
            <span className="uppercase tracking-[0.15em] text-sm">
              Ver si este plan es para mí
            </span>
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </HighTicketHero>

      <RecognitionSection />
      <ElPlanSection />
      <ComunidadSection />
      <MetodoSection />
      <DifferentiatorsSection />
    </BaseLayout>
  );
}
