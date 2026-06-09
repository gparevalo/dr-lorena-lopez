 import { fadeUp } from "@/lib/animations";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion } from "framer-motion";

const phases = [
  "Diagnóstico y planificación",
  "Tensado y reposicionamiento",
  "Regeneración y bioestimulación",
  "Estructura facial",
  "Skin Quality",
  "Refinamiento final",
];

export default function ProductSection() {
  return (
    <section className="bg-[#F7F5F0] py-32 md:py-44">
      <div className="mx-auto max-w-[1300px] px-5 md:px-8 xl:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-10">
            <LuxuryLabel>PROTOCOLO SIGNATURE</LuxuryLabel>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="text-center max-w-5xl mx-auto"
          >
            <h2 className="font-heading text-black leading-none tracking-tighter">
              LongeviLift 360
            </h2>

            <p className="max-w-3xl mx-auto mt-10 text-lg leading-relaxed text-black/70">
              Protocolo integral de rejuvenecimiento facial diseñado para
              pacientes que buscan resultados naturales, planificación médica y
              acompañamiento premium durante seis meses.
            </p>
          </motion.div>

          <div className="mt-28 max-w-5xl mx-auto">
            {phases.map((phase, index) => (
              <div
                key={phase}
                className="flex items-center justify-between py-8 border-b border-black/5"
              >
                <span className="font-serif italic text-primary text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-heading text-2xl md:text-4xl text-right">
                  {phase}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
