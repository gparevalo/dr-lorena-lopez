import { fadeUp } from "@/lib/animations";
import { whatsappHref } from "@/lib/site";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function RecognitionSection() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* LEFT */}

            <div className="lg:col-span-7">
              <motion.div variants={fadeUp} className="flex justify-start">
                <LuxuryLabel>Protocolo exclusivo</LuxuryLabel>
              </motion.div>
              <span className="uppercase tracking-[0.35em] text-primary text-[11px] font-semibold"></span>

              <h2 className="font-heading text-5xl lg:text-7xl leading-[0.9] mt-6 mb-8">
                Este protocolo no es para todo el mundo
              </h2>

              <p className="text-lg text-black/60 leading-relaxed max-w-2xl">
                LongeviLift 360 está diseñado para pacientes que desean
                comprometerse con un proceso integral de rejuvenecimiento, no
                con un tratamiento aislado. Por eso, el acceso se realiza
                únicamente tras valoración médica y según disponibilidad de
                cupos.
              </p>
              <a
                href={whatsappHref(
                  "Hola, quiero aplicar al tratamiento LongeviLift 360. Mi nombre es ..",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-8 items-center gap-3  mt-0 px-10 py-4 bg-primary text-white rounded-full uppercase tracking-[0.2em] text-xs font-semibold mr-4"
              >
                Solicitar evaluación para ingresar
                <ArrowRight size={18} />
              </a>
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-5">
              <div className="space-y-10 md:mt-20">
                {[
                  {
                    number: 1,
                    title: "Acceso sujeto a evaluación médica",
                  },
                  {
                    number: 2,
                    title: "Cupos limitados por período",
                  },
                  {
                    number: 3,
                    title: "Acompañamiento durante 12 meses",
                  },
                  {
                    number: 4,
                    title: "Plan personalizado según diagnóstico",
                  },
                  {
                    number: 5,
                    title: "Seguimiento premium y comunidad privada",
                  },
                ].map((item, index) => (
                  <div key={item.number} className="flex gap-6">
                    <span className="font-heading text-3xl text-primary/20 leading-none">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="font-heading text-2xl mb-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Background Number */}
        <span className="absolute right-0 top-1/2 -translate-y-1/2 font-heading text-[400px] text-primary/[0.03] leading-none pointer-events-none">
          01
        </span>
      </section>
    </>
  );
}
