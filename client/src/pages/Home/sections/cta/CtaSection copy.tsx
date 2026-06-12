import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { whatsappHref } from "@/lib/site";
import fondo from "@assets/images/fondo.png";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import LuxuryLabel from "../../components/LuxuryLabel";

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <UnifiedSectionBlack
      id="contacto"
      className="bg-black relative min-h-screen md:min-h-[110vh] flex items-center justify-center overflow-hidden pt-0 pb-0 md:pt-0 md:pb-0"
    >
      {/* ─── SEAMLESS INTEGRATION GRADIENT (Fades from white-ish to black) ─── */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white via-white/5 to-transparent z-10 opacity-10 pointer-events-none" />
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo})` }}
      />

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-0" />

      {/* Cinematic light rays / glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[180px] rounded-full z-0 opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 blur-[200px] rounded-full z-0 opacity-30" />

      <div className="section-container relative z-10 w-full flex flex-col items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl w-full flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="mb-12">
            <LuxuryLabel dark>{t.cta.label}</LuxuryLabel>
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

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl"
          >
            {/* Primary Action Card */}
            <div className="group relative p-8 glass-dark border border-white/10 hover:border-primary/40 transition-all duration-700 overflow-hidden text-left flex flex-col justify-between aspect-square md:aspect-auto md:h-72">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-primary/30 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-3xl text-white mb-4">
                  Concierge WhatsApp
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Atención personalizada y agendamiento inmediato con nuestro
                  equipo.
                </p>
              </div>

              <Button
                asChild
                variant="editorial"
                withShimmer
                className="relative z-10 w-full justify-between mt-auto"
              >
                <a
                  href={whatsappHref(
                    "Hola, quiero agendar una valoracion. Mi nombre es ..",
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  {t.cta.button}
                  <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                </a>
              </Button>

              {/* Background Decorative element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-1000" />
            </div>

            {/* Secondary Option / Info Card */}
            <div className="hidden md:flex flex-col gap-6">
              <div className="p-8 glass-dark border border-white/5 flex flex-col justify-center h-full">
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4">
                  Ubicación Premium
                </span>
                <p className="text-white/80 font-serif text-lg italic mb-2">
                  Edificio Professional Center
                </p>
                <p className="text-white/40 text-[11px] leading-relaxed">
                  Nivel 4, Consultorio 402, Guatemala City.
                  <br />
                  Valet Parking disponible para pacientes.
                </p>
              </div>
              <div className="p-8 glass-dark border border-white/5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
                  Follow @dralorelopez
                </span>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                    <span className="text-[10px]">IG</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-20 pt-10 border-t border-white/5 w-full flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <p className="text-white/[0.2] text-[10px] uppercase tracking-[0.4em] font-bold">
              {t.cta.note}
            </p>
            <div className="flex gap-8">
              <span className="text-white/40 text-[9px] uppercase tracking-widest">
                Mastercard • Visa • Amex
              </span>
              <span className="text-white/40 text-[9px] uppercase tracking-widest">
                Financiamiento disponible
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </UnifiedSectionBlack>
  );
}
