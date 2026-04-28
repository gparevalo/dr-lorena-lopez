import { UnifiedSection } from "@/components/layout/UnifiedSection";
import { useLanguage } from "@/i18n";
import imgDr from "@assets/images/hero-lore3-blanco.png";
import { motion } from "framer-motion";
import LuxuryLabel from "./LuxuryLabel";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function SobreDoctora() {
  const { t } = useLanguage();
  return (
    <UnifiedSection id="doctora" dark={false} withGlow={false}>
      <div className="editorial-grid items-center gap-20">
        <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <LuxuryLabel>{t.about.label}</LuxuryLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading text-5xl md:text-7xl text-foreground leading-[0.9] tracking-tight mb-8"
            >
              {t.about.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-serif italic font-bold text-2xl text-primary mb-10"
            >
              {t.about.specialty}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed   mb-12"
            >
              <p>{t.about.bio_1}</p>
              <p className="opacity-70">{t.about.bio_2}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 border-t border-border pt-10"
            >
              {t.about.credentials.map((c: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0" />
                  <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-80">
                    {c}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            {/**"/doctor-portrait.png" [] */}
            <img
              src={imgDr}
              alt="Dra. Lore López"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-[20px] border-background/20" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-primary/20 hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </UnifiedSection>
  );
}
