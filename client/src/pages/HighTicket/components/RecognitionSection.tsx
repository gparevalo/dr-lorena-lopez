import { fadeUp } from "@/lib/animations";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion } from "framer-motion";

export default function RecognitionSection() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* LEFT */}

            <div className="lg:col-span-7">
              <motion.div variants={fadeUp} className="flex justify-start">
                <LuxuryLabel> El problema</LuxuryLabel>
              </motion.div>
              <span className="uppercase tracking-[0.35em] text-primary text-[11px] font-semibold"></span>

              <h2 className="font-heading text-5xl lg:text-7xl leading-[0.9] mt-6 mb-10">
                Te ves bien. Pero ¿sabes que algo ha cambiado?
              </h2>

              <p className="text-lg text-black/60 leading-relaxed max-w-2xl">
                Con el tiempo aparecen cambios que no siempre son evidentes para
                los demás, pero sí para ti.
              </p>
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-5">
              <div className="space-y-10">
                {[
                  {
                    number: 1,
                    title: "Menos definición",
                    description:
                      "Los contornos del rostro comienzan a perder la estructura y firmeza que antes aportaban equilibrio visual.",
                  },
                  {
                    number: 2,
                    title: "Menos frescura",
                    description:
                      "La piel deja de reflejar la misma vitalidad, incluso cuando descansas, te cuidas y te sientes bien.",
                  },
                  {
                    number: 3,
                    title: "Menos armonía",
                    description:
                      "Pequeños cambios en distintas áreas generan una sensación general de desgaste difícil de identificar.",
                  },
                ].map((item, index) => (
                  <div key={item.number} className="flex gap-6">
                    <span className="font-heading text-5xl text-primary/20 leading-none">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="font-heading text-2xl mb-2">
                        {item.title}
                      </h3>

                      <p className="text-black/60 leading-relaxed">
                        {item.description}
                      </p>
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

      <section className="  overflow-hidden pb-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 mt-16">
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
                  <p className="uppercase tracking-[0.35em] text-primary text-[11px] font-semibold mb-8">
                    Una realidad poco explicada
                  </p>

                  <h3 className="font-heading text-black leading-none tracking-tighter">
                    El problema no es el envejecimiento.
                    <span className="block mt-2 font-serif italic text-primary text-7xl">
                      Es tratarlo por partes.
                    </span>
                  </h3>

                  {/* GRID ITEMS */}
                  <div className="grid md:grid-cols-3 gap-4 mt-14">
                    {[
                      "Botox para una zona",
                      "Relleno para otra",
                      "Tecnología para otra",
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
                  <div className="mt-14 border-t border-[#ECE8E2] pt-10 text-right">
                    <p className="text-2xl md:text-3xl text-black leading-relaxed">
                      Porque el rostro no envejece por separado.
                    </p>

                    <p className="mt-4 font-serif italic text-primary text-3xl md:text-5xl leading-none">
                      Envejece como un sistema.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
