import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PacksSection({
  packs,
  setSelectedProgram,
}: {
  packs: typeof any;
  setSelectedProgram: (value: any) => void;
}) {
  return (
    <>
      {/* PACKS */}
      <section className="mt-24 bg-primary text-white rounded-[50px] p-12">
        {" "}
        <h3 className="font-heading text-4xl mt-3 text-start">
          Potencia tus resultados
        </h3>
        <p className="text-white/80 max-w-2xl mb-12">
          Seleccionamos productos y protocolos complementarios para ayudarte a
          prolongar y maximizar los beneficios de tu tratamiento.
        </p>
        <div className="grid lg:grid-cols-3 gap-8">
          {packs.map((pack) => (
            <motion.div
              key={pack.id}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[32px] bg-white p-8 border border-white/10"
            >
              {/* BADGE */}

              <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-2 text-[11px] uppercase tracking-[0.25em] font-semibold mb-6">
                Pack recomendado
              </div>

              {/* TITULO */}

              <h4 className="font-heading text-black text-3xl mb-3">
                {pack.name}
              </h4>

              {/* DESCRIPCION */}

              <p className="text-black/60 leading-relaxed mb-8">
                {pack.description}
              </p>

              {/* PRODUCTOS */}

              <div className="mb-8">
                <p className="text-[11px] uppercase tracking-[0.25em] text-black/40 mb-4">
                  Incluye
                </p>

                <div className="flex flex-wrap gap-2">
                  {pack.products.map((product) => (
                    <span
                      key={product}
                      className="px-3 py-2 rounded-full bg-[#F5F1EB] text-black/70 text-xs"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              {/* FOOTER */}

              <div className="pt-6 border-t border-black/5   items-center justify-between">
                <button
                  onClick={() => setSelectedProgram(pack)}
                  className="flex w-full items-center justify-center gap-2 whitespace-nowrap h-12 px-6 rounded-full bg-primary text-white text-xs uppercase tracking-[0.25em] font-semibold"
                >
                  Solicitar
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
