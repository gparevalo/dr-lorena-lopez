import { UnifiedSection } from "@/components/layout/UnifiedSection";
import { useLanguage } from "@/i18n";
import foto from "@assets/images/3.jpg";
import { motion } from "framer-motion";
import LuxuryLabel from "./LuxuryLabel";
import { fadeUp, staggerContainer, revealRight } from "@/lib/animations";

export default function ProcesoClinicoPremium() {
  const { t } = useLanguage();
  return (
    <UnifiedSection id="proceso" dark={false} withGlow={true}>
      <div className="editorial-grid items-center gap-12 lg:gap-24">
        {/* LEFT: IMAGE REVEAL */}
        <div className="col-span-12 lg:col-span-12 mb-12">
           <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full flex flex-col items-center text-center"
          >
            <motion.div variants={fadeUp}>
              <LuxuryLabel>{t.proceso.label}</LuxuryLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading text-black leading-none tracking-tighter mb-8"
              style={{ fontSize: "var(--text-7xl)" }}
            >
              {t.proceso.title}{" "}
              <span className="text-primary italic font-serif">
                {t.proceso.title2}
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 mb-0 text-xl md:text-2xl font-serif italic text-foreground/60 max-w-2xl"
            >
              {t.proceso.subtitle}
            </motion.p>
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <motion.div
            variants={revealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src={foto} className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>

        {/* RIGHT: STEPS GRID */}
        <div className="col-span-12 lg:col-span-7">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
          >
            {t.proceso.items.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="relative group lg:pl-0"
              >
                {/* Visual Connector Line (Mobile) */}
                <div className="absolute -left-6 top-0 bottom-0 w-px bg-primary/10 md:hidden" />
                
                {/* step indicator */}
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 rounded-full border border-primary/20 bg-ivory flex items-center justify-center text-[10px] font-bold tracking-widest text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {step.number}
                  </div>
                  <div className="h-px w-8 bg-primary/20 group-hover:w-12 transition-all duration-500" />
                </div>

                {/* content */}
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                <p className="text-foreground/60 leading-relaxed font-light mb-4">
                  {step.description}
                </p>

                <div className="pt-4 border-t border-black/5">
                  <p className="italic text-primary/80 font-serif text-sm">“{step.insight}”</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </UnifiedSection>
  );
}
