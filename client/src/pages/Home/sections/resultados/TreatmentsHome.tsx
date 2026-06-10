import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import LuxuryLabel from "../../components/LuxuryLabel";
import { TestimonialSlider } from "./TestimonialSlider";

export default function TreatmentsHome() {
  const { t } = useLanguage();
  const tp = t.tratamientosPage;
  return (
    <UnifiedSectionBlack
      id="tratamientos"
      className="bg-background  pt-32 pb-20"
      withGrid={false}
    >
      <div className="text-center max-w-4xl mx-auto mb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <LuxuryLabel >{t.treatments.label}</LuxuryLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading mb-10 text-black leading-none tracking-tighter"
          >
            {t.treatments.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-black/40 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            {t.treatments.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <button
              className="
    px-8
    h-14
    bg-primary
    text-white
    uppercase
    tracking-[0.25em]
    text-xs
    font-bold
    rounded-full
    shadow-xl
    hover:scale-[1.02]
    transition-all
    w-full
    sm:w-auto
    flex
    items-center
    justify-center
    gap-3
  "
            >
              <CalendarDays className="w-4 h-4" />

              <a
                href="https://wa.me/593980163009"
                target="_blank"
                rel="noopener"
              >
                {t.hero.cta_primary} consulta
              </a>
            </button>
            <Button
              asChild
              variant="ghost"
              className="px-8 text-[11px] uppercase tracking-[0.4em] text-primary"
            >
              <a href="/tratamientos">{t.hero.cta_secondary}</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <TestimonialSlider reviews={tp.treatments} />
    </UnifiedSectionBlack>
  );
}
