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
            <LuxuryLabel dark>El método LongeviLift 360</LuxuryLabel>
          </div>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-6xl mb-8 leading-none tracking-tighter text-white"
          >
            Antes de rejuvenecer un rostro, debemos entender cómo está
            envejeciendo.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-10 text-white/50 text-lg leading-relaxed mx-auto mb-6 "
          >
            LongeviLift 360 es un método médico de evaluación y planificación
            facial que permite analizar el envejecimiento desde múltiples
            dimensiones antes de definir cualquier tratamiento.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT - STEPS */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((step, index) => {
              const isActive = active === index;

              return (
                <motion.div
                  key={step.title}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`cursor-pointer rounded-2xl border transition-all duration-300 p-6 backdrop-blur-md ${
                    isActive
                      ? "border-white/30 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl bg-white/5 blur-xl" />
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-white/30 font-heading text-xl">
                        0{index + 1}
                      </span>

                      <h3 className="font-heading text-xl md:text-2xl">
                        {step.title}
                      </h3>
                    </div>

                    <span className="text-white/40 text-xl">
                      {isActive ? "−" : "+"}
                    </span>
                  </div>

                  {/* MOBILE EXPAND */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-white/70 leading-relaxed mt-4 lg:hidden"
                      >
                        {step.body}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT - DETAIL (DESKTOP ONLY) */}
          <div className="lg:col-span-6 hidden lg:block">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="sticky top-24 p-10 rounded-3xl border border-white/10 
bg-gradient-to-b from-white/10 to-white/[0.02] backdrop-blur-xl 
shadow-[0_0_80px_rgba(255,255,255,0.05)]"
            >
              <span className="text-white/30 font-heading text-5xl">
                0{active + 1}
              </span>

              <h3 className="font-heading text-3xl mt-6 mb-6">
                {steps[active].title}
              </h3>

              <p className="text-white/70 text-lg leading-relaxed">
                {steps[active].body}
              </p>

              <div className="mt-10 h-px bg-white/10" />

              <p className="mt-8 text-white/40 text-sm leading-relaxed">
                Cada fase es parte de un sistema clínico progresivo que analiza,
                corrige y mantiene la armonía facial en el tiempo.
              </p>
            </motion.div>

            {/* WRONG QUESTION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="mt-10 text-white/50 text-sm tracking-[0.3em] uppercase mb-4 text-center">
                La verdadera pregunta no es:{" "}
              </p>

              <p className="text-3xl md:text-3xl font-heading text-center mt-4">
                ¿Qué tratamiento necesito?
              </p>
            </motion.div>

            {/* CORRECT QUESTION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <p className="mt-10 text-white/50 text-sm tracking-[0.3em] uppercase mb-4 text-center">
                La verdadera pregunta es:
              </p>
              <p className="text-3xl md:text-5xl font-serif italic text-white text-center mt-4">
                ¿Por qué mi rostro está cambiando?
              </p>
            </motion.div>
          </div>
        </div>
        <div className="block md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mt-10 text-white/50 text-sm tracking-[0.3em] uppercase mb-4 text-center">
              La verdadera pregunta no es:{" "}
            </p>

            <p className="text-3xl md:text-3xl font-heading text-center mt-4">
              ¿Qué tratamiento necesito?
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mt-10 text-white/50 text-sm tracking-[0.3em] uppercase mb-4 text-center">
              La verdadera pregunta es:
            </p>
            <p className="text-3xl md:text-5xl font-serif italic text-white text-center mt-4">
              ¿Por qué mi rostro está cambiando?
            </p>
          </motion.div>
        </div>
      </div>

      {/* BACKGROUND NUMBER */}
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[420px] font-heading text-white/[0.03] pointer-events-none">
        02
      </span>
    </section>
  );
}
