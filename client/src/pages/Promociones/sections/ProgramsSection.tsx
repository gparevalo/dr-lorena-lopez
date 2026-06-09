import { fadeUp } from "@/lib/animations";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion } from "framer-motion";

export default function ProgramsSection({
  setSelectedProgram,
  carePrograms,
}: {
  setSelectedProgram: (value: any) => void;
  carePrograms: {
    id: string;
    name: string;
    image: string;
    description: string;
    stages: string[];
    recommendedFor: string[];
  }[];
}) {
  return (
    <>
      {/* PROGRAMAS */}
      <div className="mb-24 mt-32">
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
            <LuxuryLabel> Complementos opcionales</LuxuryLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading mb-10 text-black leading-none tracking-tighter"
          >
            Completa tu rutina
            <span className="text-primary"> médica </span>{" "}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-black/40 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            {" "}
            Productos y programas seleccionados para acompañar tu tratamiento y
            ayudarte a mantener resultados saludables a largo plazo.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {carePrograms.map((program) => (
            <motion.div
              key={program.id}
              whileHover={{ y: -4 }}
              className="
          bg-white
          border
          border-[#ECE8E2]
          rounded-[32px]
          overflow-hidden
          transition-all
          duration-300
          hover:shadow-xl
        "
            >
              {/* Imagen demo */}

              <div
                className="
            h-52
            bg-gradient-to-br
            from-[#F6F2EC]
            to-[#EDE5DA]
            flex
            items-center
            justify-center
          "
              >
                <span className="font-heading text-6xl text-black/10">
                  0{Math.floor(Math.random() * 9) + 1}
                </span>
              </div>

              {/* Contenido */}

              <div className="p-8">
                <p
                  className="
              text-primary
              uppercase
              tracking-[0.25em]
              text-[10px]
              font-semibold
              mb-3
            "
                >
                  Programa complementario
                </p>

                <h4 className="font-heading text-2xl mb-4">{program.name}</h4>

                <p className="text-black/60 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Beneficios */}

                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">
                    Ideal para
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {program.recommendedFor.map((benefit) => (
                      <span
                        key={benefit}
                        className="
                    px-3
                    py-2
                    rounded-full
                    bg-primary/5
                    text-xs
                    text-black/70
                  "
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}

                <div
                  className="
              pt-6
              border-t
              border-black/5
              flex
              items-center
              justify-between
            "
                >
                  <div>
                    <p className="text-xs text-black/40 uppercase tracking-[0.2em]">
                      Complemento opcional
                    </p>

                    <p className="font-heading text-xl">Personalizado</p>
                  </div>

                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="
                h-11
                px-5
                rounded-full
                border
                border-primary
                text-primary
                hover:bg-primary
                hover:text-white
                transition-all
                text-xs
                uppercase
                tracking-[0.1em]
                font-semibold
              "
                  >
                    Agregar →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
