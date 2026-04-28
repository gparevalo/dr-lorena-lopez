import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import { useLanguage } from "@/i18n";
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

export default function TratamientosPrincipales() {
  const { t } = useLanguage();
  return (
    <UnifiedSectionBlack id="proceso" className=" bg-black/[0.05]">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <LuxuryLabel dark>{t.treatments.label}</LuxuryLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading mb-10 text-6xl sm:text-7xl md:text-6xl lg:text-8xl text-black leading-none tracking-[-0.03em]"
          >
            {t.treatments.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-black/40 text-xl font-light tracking-wide"
          >
            {t.treatments.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10  w-full 
    justify-center items-center
    gap-4  "
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="
    left-0 w-full
    flex flex-col sm:flex-row 
    justify-center items-center
    gap-4
    z-30
  "
        >
          <a href="#contacto">
            <button
              className="
            px-6 py-3 
            bg-primary text-white 
            text-[11px] uppercase tracking-[0.3em] font-semibold
            hover:bg-white hover:text-primary 
            backdrop-blur-md
            shadow-md hover:shadow-xl 
            transition duration-300
          "
            >
              {t.hero.cta_primary}
            </button>
          </a>

          <a href="/tratamientos">
            <button
              className="
            px-6 py-3 
            border border-primary/60 
            text-primary 
            text-[11px] uppercase tracking-[0.3em] font-semibold
            backdrop-blur-md
            hover:bg-primary hover:text-white 
            transition duration-300
          "
            >
              {t.hero.cta_secondary}
            </button>
          </a>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {t.treatments.items.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="group relative flex flex-col items-center text-center p-8 border border-primary/5 hover:border-primary/80 transition-all duration-700 bg-black/[0.03]"
          >
            <span className="font-accent text-5xl text-primary/70 group-hover:text-primary/90 transition-colors duration-700 mb-8 block">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading font-bold text-xl text-black/90 uppercase tracking-widest mb-4">
              {step.name}
            </h3>
            <p className="text-black/60 text-sm leading-relaxed font-light">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </UnifiedSectionBlack>
  );
}
