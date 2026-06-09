import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import { useLanguage } from "@/i18n";
import { fadeUp } from "@/lib/animations";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import fondo from "@assets/images/fondo.png";
import { motion } from "framer-motion";

export default function CtaLongevilift() {
  const { t } = useLanguage();
  return (
    <UnifiedSectionBlack
      id="contacto"
      className="relative py-40 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo})` }}
      />
      <div className="absolute inset-0 bg-black/80" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        {/* LABEL */}
        <motion.div variants={fadeUp} className="flex justify-center">
          <LuxuryLabel>{t.cta.label}</LuxuryLabel>
        </motion.div>

        {/* HERO TITLE */}
        <motion.h2
          variants={fadeUp}
          className="font-heading text-white mt-10 tracking-tighter leading-[0.95]"
          style={{ fontSize: "clamp(3rem,8vw,7rem)" }}
        >
          {t.cta.title}
          <span className="block mt-6 font-serif italic text-primary">
            {t.cta.title2}
          </span>
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          variants={fadeUp}
          className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mt-10 leading-relaxed"
        >
          {t.cta.subtitle}
        </motion.p>

        {/* VALUE GRID (more premium tone) */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            "Evaluación médica individual",
            "Planificación por fases clínicas",
            "Seguimiento personalizado",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-6 backdrop-blur-md"
            >
              <p className="text-white/80 text-sm tracking-wide">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA BUTTON (más fuerte visualmente) */}
        <div className="mt-20 flex justify-center">
          <a
            href="https://wa.me/593980163009"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-16 px-14 rounded-full bg-primary text-white flex items-center justify-center uppercase tracking-[0.25em] text-xs font-semibold overflow-hidden"
          >
            <span className="relative z-10">Solicitar valoración premium</span>

            {/* subtle glow effect */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
          </a>
        </div>

        {/* FOOTER TRUST */}
        <div className="mt-24 pt-10 border-t border-white/10 max-w-2xl mx-auto">
          <p className="text-white/70 uppercase tracking-[0.35em] text-[11px]">
            Quito · Atención médica previa cita · Cupos limitados
          </p>
        </div>
      </div>

      {/* RADIAL GLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,_rgba(107,140,78,0.12),_transparent_60%)]" />
      </div>
    </UnifiedSectionBlack>
  );
}
