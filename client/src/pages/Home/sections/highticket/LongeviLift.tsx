//
import { useLanguage } from "@/i18n";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import LuxuryLabel from "../../components/LuxuryLabel";

export default function LongeviLift() {
  const { t } = useLanguage();
  return (
    <>
      <section className="overflow-hidden pb-0">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 6">
          {/* STATEMENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden bg-white rounded-[40px]  p-10 md:p-16">
              {/* Imagen */}
              <img
                src="/images/hero7.png"
                alt=""
                className="hidden md:block absolute top-0 right-0 h-full w-auto object-cover opacity-100 pointer-events-none"
              />

              {/* Contenido */}
              <div className="relative z-10 max-w-3xl ml-auto text-right">
                <div className="max-w-4xl ml-auto">
                  {" "}
                  <motion.div variants={fadeUp} className="flex justify-end">
                    <LuxuryLabel>Protocolo signature</LuxuryLabel>
                  </motion.div>
                  <h3 className="font-heading text-black leading-none tracking-tighter">
                    Rejuvenecimiento Integral
                    <span className="block mt-2 font-serif italic text-primary text-7xl">
                      LongeviLift 360
                    </span>
                  </h3>
                  {/* GRID ITEMS */}
                  <div className="grid md:grid-cols-3 gap-4 mt-14">
                    {[
                      "Diagnóstico personalizado",
                      "Tratamiento adaptado a ti",
                      "Seguimiento profesional",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="border border-[#ECE8E2] rounded-3xl p-6 bg-white"
                      >
                        <div className="flex items-start gap-4 justify-center text-center">
                          <p className="font-semibold text-sm leading-snug">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* FOOTER INSIGHT */}
                  <div className="mt-14 border-t border-[#ECE8E2] pt-10 text-right mb-8">
                    <p className="text-2xl md:text-3xl text-black leading-relaxed">
                      Porque el rostro no envejece por separado.
                    </p>

                    <p className="mt-4 font-serif italic text-primary text-3xl md:text-5xl leading-none">
                      Envejece de manera integral.
                    </p>
                  </div>
                  <a
                    href="/longevilift-360"
                    className="inline-block mt-0 px-10 py-4 bg-primary text-white rounded-full uppercase tracking-[0.2em] text-xs font-semibold"
                  >
                    Ver protocolo completo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
