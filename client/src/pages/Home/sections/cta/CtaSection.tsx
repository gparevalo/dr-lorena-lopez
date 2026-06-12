import { useLanguage } from "@/i18n";
import { whatsappHref } from "@/lib/site";
import fondo from "@assets/images/fondo.png";
import { motion } from "framer-motion";
import LuxuryLabel from "../../components/LuxuryLabel";

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
    <section
      id="contacto"
      className="bg-black/[0.7] bg-cover bg-center relative py-0   md:py-0 m-0"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={fondo}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 max-w-6xl mx-auto text-center py-32">
        <motion.div variants={fadeUp} className="flex justify-center">
          <LuxuryLabel>{t.cta.label}</LuxuryLabel>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-heading text-white  mb-10 mt-8 text-black leading-[0.9]  tracking-tighter max-w-5xl mx-auto"
        >
          {t.cta.title}

          <span className="block text-primary italic font-serif mt-4">
            {t.cta.title2}
          </span>
        </motion.h2>

        <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mt-10 leading-relaxed">
          {t.cta.subtitle}
        </p>

        {/* BENEFICIOS */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            "Diagnóstico personalizado",
            "Tratamiento adaptado a ti",
            "Seguimiento profesional",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-6 backdrop-blur-md"
            >
              <p className="text-white/80 text-sm tracking-wide">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href={whatsappHref(
              "Hola, quiero agendar una valoracion. Mi nombre es ..",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-10 rounded-full bg-primary text-white flex items-center justify-center uppercase tracking-[0.25em] text-xs font-semibold"
          >
            Solicitar valoración
          </a>
        </div>

        {/* FOOTER */}
        <div className="mt-20 pt-10 border-t border-white/10 max-w-2xl mx-auto">
          <p className="text-white/80 uppercase tracking-[0.35em] text-[11px]">
            Quito · Atención previa cita
          </p>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,_rgba(107,140,78,0.1),_transparent_60%)]" />
      </div>
      <br />
    </section>
  );
}
