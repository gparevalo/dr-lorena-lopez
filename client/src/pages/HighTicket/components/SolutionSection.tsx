import { fadeUp } from "@/lib/animations";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Diagnóstico y planificación",
    type: "FASE 01",
    body: "Evaluamos proporciones faciales, calidad de piel, volumen y signos de envejecimiento en reposo y expresión para diseñar el plan completo.",
  },
  {
    title: "Tensado y reposicionamiento",
    type: "FASE 02",
    body: "Actuamos sobre la flacidez y pérdida de soporte, reposicionando tejidos para recuperar armonía y tensión natural del rostro.",
  },
  {
    title: "Regeneración y bioestimulación",
    type: "FASE 03",
    body: "Estimulamos la producción de colágeno y elastina para mejorar densidad, firmeza y respuesta biológica de la piel.",
  },
  {
    title: "Estructura facial",
    type: "FASE 04",
    body: "Reequilibramos proporciones faciales para recuperar soporte, simetría y cohesión estética global.",
  },
  {
    title: "Skin quality",
    type: "FASE 05",
    body: "Mejoramos textura, luminosidad, hidratación y uniformidad para una piel más saludable y homogénea.",
  },
  {
    title: "Refinamiento final",
    type: "FASE 06",
    body: "Ajustamos detalles finales para lograr un resultado armónico, natural y coherente en todas las expresiones.",
  },
];
export default function SolutionSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-4"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <LuxuryLabel>Protocolo signature</LuxuryLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading mb-10 text-black leading-none tracking-tighter"
          >
            LongeviLift
            <span className="text-primary"> 360 </span>{" "}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-black/40 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Un protocolo integral de rejuvenecimiento facial diseñado para
            pacientes que buscan resultados naturales, planificación médica y
            acompañamiento premium durante seis meses.
          </motion.p>
        </motion.div>

        {/* FIRST IMPACT VISUAL (NO LIST, ONLY SYSTEM FEEL) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative "
        >
          {/* FLOW */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* LEFT - STRUCTURE MAP */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-6 ">
              {steps.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative rounded-3xl border border-[#ECE8E2] bg-white p-6 hover:shadow-sm 
                  hover:scale-[1.03] transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#8B5E3C]/10 flex items-center justify-center font-heading text-sm">
                        0{index + 1}
                      </div>

                      <div>
                        <p className="text-black/30 text-[11px] uppercase tracking-widest mt-1">
                          {item.type}
                        </p>
                        <p className="font-heading text-lg leading-snug">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-black/50 text-sm leading-relaxed pl-[52px]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT - VISUAL ANCHOR */}
            <div className="lg:col-span-5 sticky top-24">
              <div className="relative rounded-[40px] overflow-hidden border border-[#ECE8E2] bg-[#FAF9F7] h-[676px] hover:scale-[1.03] transition">
                <img
                  src="/images/doctora/3.jpg"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* VALUE STATEMENT */}
          <div className="mt-16 border-t border-[#ECE8E2] pt-10 text-center max-w-3xl mx-auto">
            <p className="text-black/60 text-lg leading-relaxed">
              Cada fase actúa sobre un nivel distinto del envejecimiento facial.
            </p>

            <p className="mt-6 font-serif italic text-primary text-3xl md:text-4xl leading-tight">
              El resultado no es inmediato. Es estructural.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
