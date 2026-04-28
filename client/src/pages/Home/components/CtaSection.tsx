import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import LuxuryLabel from "./LuxuryLabel";
import fondo from "@assets/images/fondo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <UnifiedSectionBlack
      id="contacto"
      className="bg-black/[0.9] bg-cover bg-center relative py-0   md:py-0 "
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeUp}>
            <LuxuryLabel>{t.cta.label}</LuxuryLabel>
          </motion.div>

          <h2 className="font-heading text-6xl md:text-8xl text-white leading-[0.8] mb-12">
            {t.cta.title}
            <span className="text-primary italic font-serif"> {t.cta.title2}</span>
          </h2>

          <p className="text-white/50 text-xl font-light tracking-wide max-w-md mb-16">
            {t.cta.subtitle}
          </p>

          {/* RIGHT - ACTION BLOCK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:center"
          >
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener"
              className="group relative inline-flex items-center justify-center"
            >
              {/* outer ring */}
              <span className="absolute inset-0 rounded-full border border-white/15 group-hover:border-primary/60 transition" />

              {/* glow */}
              <span className="absolute inset-0 rounded-full bg-white/10 group-hover:bg-white/20 blur-md transition" />

              {/* button */}
              <span className="relative px-16 py-6 text-[11px] uppercase tracking-[0.6em] text-white font-medium">
                {t.cta.button}
              </span>
            </a>
          </motion.div>
        </motion.div>
        <p className="mt-10 text-white/[0.3] text-lg font-bold tracking-wide max-w-md italic font-serif">
          {t.cta.note}
        </p>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,_rgba(107,140,78,0.1),_transparent_60%)]" />
      </div>
    </UnifiedSectionBlack>
  );
}
