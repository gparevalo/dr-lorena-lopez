import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import LuxuryLabel from "../../components/LuxuryLabel";
import ImgStickySection from "./ImgStickySection";
import TimeLineSection from "./TimeLineSection";

const journey = [
  {
    id: 1,
    image: "images/doctora/evaluacion.png",
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
    image: "images/doctora/3.jpg",
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
    image: "images/doctora/luego.jpg",
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
    image: "images/doctora/tratamiento3.jpg",
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
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className={cn("relative  section-spacing", "bg-white text-black")}>
      {/* Content Container */}
      <div className="section-container relative z-20">
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
            <motion.div variants={fadeUp} className="flex justify-center">
              <LuxuryLabel dark>Tu experiencia completa</LuxuryLabel>
            </motion.div>
            <h2
              className="
              font-heading
              text-5xl
              md:text-6xl
              mt-6
              leading-tight
            "
            >
              Tu transformación va <span className="text-primary"> más </span>{" "}
              <br />
              <span className="text-primary"> allá </span>del tratamiento
            </h2>

            <p
              className="
                    mt-4
                    text-black/60
                    leading-relaxed
                  "
            >
              Cada tratamiento forma parte de una estrategia completa que
              comienza antes del procedimiento y continúa después para potenciar
              y mantener los resultados.
            </p>
          </motion.div>

          <div
            className="
            grid
            lg:grid-cols-[450px_1fr]
            gap-0
            md:gap-20
          "
          >
            {/* FOTO STICKY */}
            <ImgStickySection
              journey={journey}
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />

            {/* TIMELINE */}
            <TimeLineSection
              journey={journey}
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
