import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import LuxuryLabel from "./LuxuryLabel";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function TratamientosPrincipales() {
  const { t } = useLanguage();
  return (
    <UnifiedSectionBlack id="tratamientos" className="bg-[#fdfdfd]">
      <div className="text-center max-w-4xl mx-auto mb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <LuxuryLabel dark>{t.treatments.label}</LuxuryLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading mb-10 text-black leading-none tracking-tighter"
            style={{ fontSize: "var(--text-8xl)" }}
          >
            {t.treatments.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-black/40 text-xl font-serif italic max-w-2xl mx-auto mb-12"
          >
            {t.treatments.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <Button asChild variant="editorial" withShimmer>
              <a href="#contacto">{t.hero.cta_primary}</a>
            </Button>
            <Button asChild variant="ghost" className="px-8 text-[11px] uppercase tracking-[0.4em] text-primary">
              <a href="/tratamientos">{t.hero.cta_secondary}</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-black/5">
        {t.treatments.items.map((step, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative flex flex-col items-start text-left p-10 bg-white hover:bg-ivory transition-all duration-700 overflow-hidden"
          >
            {/* Background Decoration */}
            <span className="absolute -right-4 -top-8 font-heading text-[120px] text-black/[0.02] group-hover:text-primary/[0.05] transition-colors duration-700 select-none pointer-events-none">
              0{i + 1}
            </span>

            <span className="text-[10px] uppercase tracking-[0.4em] text-primary/60 font-bold mb-8 group-hover:translate-x-2 transition-transform duration-500">
              Protocol {String(i + 1).padStart(2, "0")}
            </span>
            
            <h3 className="font-heading text-2xl text-black/90 mb-6 group-hover:text-primary transition-colors duration-500">
              {step.name}
            </h3>
            
            <p className="text-black/50 text-sm leading-relaxed font-light mb-8 max-w-[240px]">
              {step.description}
            </p>

            <div className="mt-auto pt-6 border-t border-black/5 w-full">
               <a href="/tratamientos" className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary/40 group-hover:text-primary transition-colors flex items-center gap-2">
                Explorar <span className="w-4 h-px bg-current group-hover:w-8 transition-all" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </UnifiedSectionBlack>
  );
}
