import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion } from "framer-motion";

export default function DifferentiatorsSection() {
  return (
    <section className="relative py-40 bg-[#FAF9F7] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <LuxuryLabel>Principio</LuxuryLabel>
        </motion.div>

        {/* MAIN STATEMENT */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-6xl md:text-7xl leading-[1.1] tracking-tighter text-black"
        >
          Por eso LongeviLift 360 no se trata de hacer más.
          <span className="block mt-4 font-serif italic text-primary">
            Se trata de hacer lo correcto, en el orden correcto.
          </span>
        </motion.h2>

        {/* SUPPORTING IDEA (very subtle) */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-black/50 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Cada decisión dentro del protocolo responde a una lógica clínica, no a
          una tendencia estética.
        </motion.p>

        {/* BENEFICIOS */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            "Diagnóstico personalizado",
            "Tratamiento adaptado a ti",
            "Seguimiento profesional",
          ].map((item) => (
            <div
              key={item}
              className="bg-primary/[0.03] border border-primary/10 rounded-3xl px-6 py-6 backdrop-blur-md"
            >
              <p className="text-primary/80 text-sm tracking-wide">{item}</p>
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
      </div>
      {/* BACKGROUND NUMBER */}
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[420px] font-heading text-primary/[0.03] pointer-events-none">
        03
      </span>
    </section>
  );
}
