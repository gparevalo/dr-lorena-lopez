import { fadeUp } from "@/lib/animations";
import { whatsappHref } from "@/lib/site";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function LongeviLiftSignatureSection() {
  const pillars = [
    "Diagnóstico",
    "Estructura Facial",
    "Regeneración",
    "Calidad de Piel",
    "Prevención",
    "Seguimiento",
  ];

  return (
    <section className="relative overflow-hidden py-32 bg-[#FAF9F7]">
      {/* Ambient glow */}{" "}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {" "}
        <div className="absolute top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />{" "}
      </div>
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <LuxuryLabel>Metodología Exclusiva</LuxuryLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-heading text-5xl text-center leading-none tracking-tight text-black max-w-5xl mx-auto"
          >
            {" "}
            <span className="text-primary block text-8xl mb-8">
              LongeviLift 360
            </span>{" "}
            El método signature de rejuvenecimiento integral de la Dra. Lore
            López
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-black/55 text-lg md:text-xl leading-relaxed mt-10"
          >
            Una metodología médica propia diseñada para analizar el
            envejecimiento como un sistema completo y crear un plan
            personalizado antes de definir cualquier tratamiento.
          </motion.p>
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto mt-20 mb-20 h-px bg-black/10" />

        {/* Editorial block */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="relative rounded-[40px] overflow-hidden border border-[#ECE8E2] bg-[#FAF9F7] h-[476px] md:h-[676px] hover:scale-[1.03] transition">
              <img
                src="/images/highticket/hero.png"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <blockquote className="font-serif italic text-4xl md:text-6xl leading-tight text-black">
              “No se trata de hacer más tratamientos.”
            </blockquote>

            <blockquote className="font-serif italic text-4xl md:text-6xl leading-tight text-primary mt-6">
              Se trata de hacer lo correcto, en el orden correcto.
            </blockquote>

            <p className="text-black/65 leading-relaxed text-lg mt-8">
              El rostro no envejece por separado. Por eso, LongeviLift 360
              integra cada etapa del rejuvenecimiento dentro de una misma
              estrategia médica personalizada.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto mt-20 mb-20 h-px bg-black/10" />

        {/* Pillars */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {pillars.map((pillar, index) => (
              <div key={pillar} className="group text-center">
                <div className="text-xl tracking-[0.35em] text-black/30 mb-4">
                  0{index + 1}
                </div>

                <div className="h-px bg-black/10 mb-5 group-hover:bg-primary transition-colors" />

                <h3 className="text-sm uppercase tracking-[0.25em] text-black/70">
                  {pillar}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-24 "
        >
          <a
            href={whatsappHref(
              "Hola, quiero saber si el tratamiento LongeviLift 360 es para mi. Mi nombre es ..",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3  mt-0 px-10 py-4 bg-primary text-white rounded-full uppercase tracking-[0.2em] font-semibold text-sm mr-4"
          >
            <MessageCircle size={18} />
            Ver si califico para LongeviLift 360
          </a>
          <a
            href="/longevilift"
            className="inline-flex items-center gap-3 px-8 py-5 hover:border-primary transition-colors"
          >
            <span className="uppercase tracking-[0.25em] text-sm">
              Ver protocolo completo
            </span>

            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
