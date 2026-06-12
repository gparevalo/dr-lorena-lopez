import { fadeUp } from "@/lib/animations";
import { whatsappHref } from "@/lib/site";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
export default function ComunidadSection() {
  return (
    <section className="  overflow-hidden pb-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 mt-16">
        {/* STATEMENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden bg-white rounded-[40px]  p-10 md:p-20 md:pb-20">
            {/* Imagen */}
            <img
              src="/images/hero7.png"
              alt=""
              className="hidden md:block absolute top-0 left-0 h-full w-auto object-cover pointer-events-none"
            />

            {/* Contenido */}
            <div className="relative z-10 max-w-3xl ml-auto text-right">
              <div className="w-full ml-auto">
                <motion.div variants={fadeUp} className="flex justify-end">
                  <LuxuryLabel>La comunidad</LuxuryLabel>
                </motion.div>

                <h3 className="font-heading text-black leading-none tracking-tighter">
                  Un círculo privado para pacientes que{" "}
                  <span className="text-primary  font-serif italic text-7xl">
                    {" "}
                    deciden envejecer mejor{" "}
                  </span>{" "}
                </h3>
                <div className="w-full flex flex-col items-end justify-end mt-8">
                  <p className="text-lg text-black/60 leading-relaxed max-w-2xl  ">
                    Las pacientes de LongeviLift 360 forman parte de una
                    comunidad privada enfocada en longevidad estética,
                    prevención y cuidado integral. Un espacio de acompañamiento
                    donde reciben orientación, recomendaciones y seguimiento
                    para sostener sus resultados más allá del consultorio.
                  </p>
                </div>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="md:text-end text-center mt-10"
                >
                  <a
                    href={whatsappHref(
                      "Hola, quiero aplicar al circulo LongeviLift 360. Mi nombre es ..",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex  items-center gap-3  mt-0 px-10 py-4 bg-primary text-white rounded-full uppercase tracking-[0.2em] text-sm font-semibold mr-4"
                  >
                    Aplicar al círculo LongeviLift 360
                    <ArrowRight size={18} />
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Background Number */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 font-heading text-[400px] text-primary/[0.03] leading-none pointer-events-none">
              03
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
