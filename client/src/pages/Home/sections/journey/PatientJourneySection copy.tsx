import { motion } from "framer-motion";

const journey = [
  {
    id: 1,
    number: "01",
    title: "Antes del Tratamiento",
    subtitle: "PREPARA TU PIEL",
    description:
      "Una preparación adecuada potencia los resultados y ayuda a que tu piel responda mejor al tratamiento.",

    items: [
      "Evaluación médica personalizada",
      "Rutina de skincare recomendada",
      "Preparación específica para tu procedimiento",
      "Planificación de resultados",
    ],
  },

  {
    id: 2,
    number: "02",
    title: "Durante el Tratamiento",
    subtitle: "PROCEDIMIENTO MÉDICO",

    description:
      "Aplicamos protocolos avanzados enfocados en seguridad, comodidad y resultados armónicos.",

    items: [
      "Tecnología especializada",
      "Protocolos clínicos seguros",
      "Atención personalizada",
      "Resultados naturales",
    ],
  },

  {
    id: 3,
    number: "03",
    title: "Después del Tratamiento",
    subtitle: "RECUPERACIÓN GUIADA",

    description:
      "El cuidado posterior es fundamental para optimizar los resultados y favorecer la recuperación.",

    items: [
      "Indicaciones post procedimiento",
      "Control de evolución",
      "Productos recomendados",
      "Seguimiento profesional",
    ],
  },

  {
    id: 4,
    number: "04",
    title: "Mantén tus Resultados",
    subtitle: "BIENESTAR A LARGO PLAZO",

    description:
      "Combinamos tratamientos de mantenimiento, skincare y hábitos saludables para prolongar los beneficios obtenidos.",

    items: [
      "Planes de mantenimiento",
      "Skincare médico",
      "Nutricosmética",
      "Control periódico",
    ],
  },
];

export default function PatientJourneySection() {
  return (
    <section className="relative py-32 bg-[#FAF9F7]  ">
      <div className="container mx-auto px-6 max-w-7xl">
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
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span
            className="
              uppercase
              tracking-[0.35em]
              text-primary
              text-xs
              font-semibold
            "
          >
            Tu experiencia completa
          </span>

          <h2
            className="
              font-heading
              text-5xl
              md:text-6xl
              mt-6
              leading-tight
            "
          >
            Tu transformación va más allá
            <br />
            del tratamiento
          </h2>

          <p
            className="
              mt-8
              text-black/60
              leading-relaxed
            "
          >
            Cada tratamiento forma parte de una estrategia completa que comienza
            antes del procedimiento y continúa después para potenciar y mantener
            los resultados.
          </p>
        </motion.div>

        <div
          className="
            grid
            lg:grid-cols-[520px_1fr]
            gap-20
          "
        >
          {/* FOTO STICKY */}

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  rounded-[40px]
                "
              >
                <img
                  src="/images/doctora.webp"
                  alt="Dra María de los Ángeles Arias"
                  className="object-cover"
                />
              </div>

              <div className="mt-10">
                <span
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-primary
                    text-xs
                    font-semibold
                  "
                >
                  Medicina Estética Integral
                </span>

                <h3
                  className="
                    font-heading
                    text-3xl
                    mt-4
                  "
                >
                  Dra. María de los Ángeles Arias
                </h3>

                <p
                  className="
                    mt-4
                    text-black/60
                    leading-relaxed
                  "
                >
                  Diseñamos estrategias completas para ayudarte a obtener
                  resultados naturales y mantenerlos a largo plazo.
                </p>
              </div>
            </div>
          </div>

          {/* TIMELINE */}

          <div className="relative">
            <div
              className="
                absolute
                left-7
                top-0
                bottom-0
                w-px
                bg-black/10
              "
            />

            <div className="space-y-16">
              {journey.map((step) => (
                <motion.div
                  key={step.id}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="
                    relative
                    pl-20
                  "
                >
                  <div
                    className="
                      absolute
                      left-[20px]
                      top-10

                      w-4
                      h-4

                      rounded-full
                      bg-primary

                      border-4
                      border-white

                      shadow-lg
                      z-10
                    "
                  />

                  <div
                    className="
                      relative

                      bg-white

                      rounded-[40px]

                      border
                      border-[#ECE8E2]

                      p-10
                      md:p-12

                      shadow-[0_20px_60px_rgba(0,0,0,.04)]

                      overflow-hidden
                    "
                  >
                    <span
                      className="
                        absolute
                        -top-8
                        right-6

                        font-heading
                        text-[170px]

                        leading-none

                        text-primary/[0.04]

                        pointer-events-none
                      "
                    >
                      {step.number}
                    </span>

                    <div className="relative z-10">
                      <div
                        className="
                          w-16
                          h-px
                          bg-primary/30
                          mb-8
                        "
                      />

                      <span
                        className="
                          uppercase
                          tracking-[0.35em]
                          text-primary
                          text-[11px]
                          font-semibold
                        "
                      >
                        {step.subtitle}
                      </span>

                      <h3
                        className="
                          font-heading
                          text-4xl

                          mt-4
                          mb-6
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          text-black/60
                          leading-relaxed
                          mb-10
                        "
                      >
                        {step.description}
                      </p>

                      <ul className="space-y-4">
                        {step.items.map((item) => (
                          <li
                            key={item}
                            className="
                              flex
                              items-center
                              gap-3

                              text-black/70
                            "
                          >
                            <span
                              className="
                                w-2
                                h-2

                                rounded-full
                                bg-primary

                                shrink-0
                              "
                            />

                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
