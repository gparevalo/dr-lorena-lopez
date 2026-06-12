import { fadeUp } from "@/lib/animations";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    title: "Diagnóstico",
    body: "Analizamos la estructura facial, calidad de piel, soporte óseo y signos de envejecimiento en reposo y expresión.",
  },
  {
    title: "Estructura",
    body: "Evaluamos pérdida de soporte, volúmenes y simetría para entender cómo se sostiene el rostro.",
  },
  {
    title: "Regeneración",
    body: "Activamos procesos biológicos para mejorar la calidad celular y la respuesta natural de la piel.",
  },
  {
    title: "Calidad de piel",
    body: "Tratamos textura, luminosidad, hidratación y uniformidad del tejido cutáneo.",
  },
  {
    title: "Prevención",
    body: "Anticipamos cambios futuros para ralentizar el envejecimiento estructural y superficial.",
  },
  {
    title: "Seguimiento",
    body: "Ajustamos el protocolo en el tiempo según la evolución real del rostro.",
  },
];

export default function MetodoInteractiveSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="py-28 relative overflow-hidden rounded-[50px] text-white"
      style={{
        background: "linear-gradient(180deg, #687d46 0%, #343F22 100%)",
      }}
    >
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* soft radial light top */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/10 blur-[120px] rounded-full" />

        {/* secondary glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-foreground/10 blur-[140px] rounded-full" />

        {/* subtle noise overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="flex justify-center">
            <LuxuryLabel dark>La estrategia</LuxuryLabel>
          </div>

          <motion.h2
            variants={fadeUp}
            className="font-heading mb-10 text-white/90  leading-none tracking-tighter"
          >
            La diferencia no está en hacer más. Está en saber qué hacer primero.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-10 text-white/70 text-xl leading-relaxed mx-auto mb-6 "
          >
            Cada fase de LongeviLift 360 responde a una lógica médica, no a una
            tendencia estética. Antes de tratar, la Dra. Lore López evalúa cómo
            está envejeciendo el rostro, qué estructuras han cambiado, qué
            necesita la piel y cuál es el orden correcto para intervenir.
          </motion.p>
        </motion.div>

        {/* EXPERIENCE */}
        <div className="max-w-6xl mx-auto">

          {/* TIMELINE */}
          <div className="mt-14 mb-14">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {steps.map((step, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={step.title}
                    onClick={() => setActive(index)}
                    className="group text-left"
                  >
                    <div
                      className={`h-px transition-all duration-300 mb-5 ${
                        isActive ? "bg-white" : "bg-white/10"
                      }`}
                    />

                    <div
                      className={`text-md tracking-[0.35em] mb-3 transition-all ${
                        isActive ? "text-white" : "text-white/30"
                      }`}
                    >
                      0{index + 1}
                    </div>

                    <h3
                      className={`uppercase tracking-[0.18em] text-sm transition-all ${
                        isActive
                          ? "text-white"
                          : "text-white/50 group-hover:text-white/80"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>

          {/* TOP ROW */}
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
            {/* ACTIVE STEP */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] backdrop-blur-xl p-8 md:p-12"
              >
                <span className="text-white/25 font-heading text-6xl">
                  0{active + 1}
                </span>

                <h3 className="font-heading text-white text-4xl md:text-5xl leading-none mt-6">
                  {steps[active].title}
                </h3>

                <div className="w-20 h-px bg-white/20 mt-8 mb-8" />

                <p className="text-white/75 text-lg md:text-2xl leading-relaxed max-w-2xl">
                  {steps[active].body}
                </p>

                <div className="mt-10 pt-10 border-t border-white/10">
                  <p className="text-white/45 text-sm uppercase tracking-[0.3em] mb-4">
                    Dentro de LongeviLift 360
                  </p>

                  <p className="text-white/60 leading-relaxed">
                    Cada fase forma parte de una estrategia progresiva diseñada
                    para analizar, corregir, regenerar y mantener la armonía
                    facial en el tiempo.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* FIXED QUESTION BLOCK */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 flex flex-col justify-center"
            >
              <p className="text-white/50 uppercase tracking-[0.35em] text-xs mb-6">
                La mayoría pregunta
              </p>

              <h3 className="font-heading text-3xl md:text-4xl text-white/60 leading-tight">
                ¿Qué tratamiento necesito?
              </h3>

              <div className="w-px h-16 bg-white/15 my-6 mx-auto" />

              <p className="text-white/50 uppercase tracking-[0.35em] text-xs mb-6">
                LongeviLift pregunta
              </p>

              <h3 className="font-serif italic text-4xl md:text-6xl text-white leading-tight">
                ¿Por qué mi rostro está cambiando?
              </h3>

              <p className="text-white/50 leading-relaxed mt-8">
                Porque entender la causa permite definir el orden correcto de
                cada decisión médica.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* BACKGROUND NUMBER */}
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[420px] font-heading text-white/[0.03] pointer-events-none">
        04
      </span>
    </section>
  );
}
