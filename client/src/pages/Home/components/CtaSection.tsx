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

          <motion.h2
            variants={fadeUp}
            className="font-heading text-white leading-[0.8] mb-12 tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            {t.cta.title}
            <span className="text-secondary italic font-serif block mt-4">
              {" "}
              {t.cta.title2}
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/60 text-xl md:text-2xl font-serif italic max-w-2xl mb-20 leading-relaxed font-light"
          >
            {t.cta.subtitle}
          </motion.p>

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
        <motion.div
          variants={fadeUp}
          className="mt-20 pt-10 border-t border-white/5 w-full flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <p className="text-white/[0.2] text-[10px] uppercase tracking-[0.4em] font-bold">
            {t.cta.note}
          </p>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,_rgba(107,140,78,0.1),_transparent_60%)]" />
      </div>
    </UnifiedSectionBlack>
  );
}
