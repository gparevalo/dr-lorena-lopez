import { fadeUp } from "@/lib/animations";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion } from "framer-motion";

export default function NuevaCreenciaSection() {
  return (
    <section className="relative py-40 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <LuxuryLabel>El enfoque LongeviLift 360</LuxuryLabel>
        </motion.div>

        {/* MAIN IDEA */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-6xl leading-[1.05] tracking-tighter text-center"
        >
          Antes de rejuvenecer un rostro, debemos entender cómo está
          envejeciendo.
        </motion.h2>

        {/* SHIFT (QUESTION EVOLUTION) */}
        <div className="mt-24 space-y-16 max-w-3xl mx-auto">
          {/* WRONG QUESTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-black/50 text-sm tracking-[0.3em] uppercase mb-4 text-center">
              Pregunta común
            </p>

            <p className="text-black/60 text-lg text-center">
              La verdadera pregunta no es:
            </p>

            <p className="text-3xl md:text-4xl font-heading text-center mt-4">
              ¿Qué tratamiento necesito?
            </p>
          </motion.div>

          {/* CORRECT QUESTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-black/50 text-sm tracking-[0.3em] uppercase mb-4 text-center">
              Cambio de perspectiva
            </p>

            <p className="text-black/60 text-lg text-center">
              La verdadera pregunta es:
            </p>

            <p className="text-3xl md:text-4xl font-serif italic text-primary text-center mt-4">
              ¿Por qué mi rostro está cambiando?
            </p>
          </motion.div>

          {/* INSIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-10 border-t border-black/10 text-center"
          >
            <p className="text-black/60 text-lg leading-relaxed">
              Porque solo cuando entendemos el origen podemos diseñar una
              estrategia correcta.
            </p>
          </motion.div>
        </div>

        {/* METHOD INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <span className="text-black/30 font-heading text-sm tracking-[0.3em] uppercase">
            Método
          </span>

          <h3 className="font-heading text-4xl md:text-5xl mt-6 leading-[1.1]">
            LongeviLift 360
          </h3>

          <p className="text-black/60 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Un enfoque médico diseñado para trabajar el envejecimiento desde
            múltiples dimensiones.
          </p>
        </motion.div>
      </div>

      {/* BACKGROUND NUMBER */}
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[420px] font-heading text-primary/[0.03] pointer-events-none">
        02
      </span>
    </section>
  );
}
