import { carePrograms } from "@/data/treatmentCarePlans";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import LuxuryLabel from "../../components/LuxuryLabel";
import ImgStickySection from "./ImgStickySection";
import TimeLineSection from "./TimeLineSection";

export default function PatientJourneySection() {
  const [activeStep, setActiveStep] = useState(0);

  const productosBefore = carePrograms.filter((item) =>
    item.stages.includes("before"),
  );

  const productosDuring = carePrograms.filter((item) =>
    item.stages.includes("during"),
  );

  const productosAfter = carePrograms.filter((item) =>
    item.stages.includes("after"),
  );

  const productosMaintenance = carePrograms.filter((item) =>
    item.stages.includes("maintenance"),
  );

  const journey = [
    {
      id: 1,
      image: "images/doctora/evaluacion.png",
      number: "01",
      href: "/tratamientos/#evaluacion",
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
      products: productosBefore,
    },

    {
      id: 2,
      image: "images/doctora/aplicando.png",
      number: "02",
      href: "/tratamientos/#durante",
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
      products: productosDuring,
    },

    {
      id: 3,
      image: "images/doctora/tratamientoaplicado.png",
      number: "03",
      href: "/tratamientos/#post-tratamiento",
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
      products: productosAfter,
    },

    {
      id: 4,
      image: "images/doctora/hero-lore.png",
      number: "04",
      href: "/tratamientos/#mantenimiento",
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
      products: productosMaintenance,
    },
  ];

  return (
    <section
      id="tu-experiencia-completa"
      className={cn("relative  section-spacing", "bg-[#FAF9F7] text-black")}
    >
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
            className="text-center max-w-4xl mx-auto mb-2 md:mb-24"
          >
            <motion.div variants={fadeUp} className="flex justify-center">
              <LuxuryLabel >Tu experiencia completa</LuxuryLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading mb-10 text-black leading-none tracking-tighter"
            >
              Tu transformación va <span className="text-primary"> más </span>{" "}
              <span className="text-primary"> allá </span>del tratamiento
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-black/40 leading-relaxed max-w-2xl mx-auto mb-12"
            >
              Cada tratamiento forma parte de una estrategia completa que
              comienza antes del procedimiento y continúa después para potenciar
              y mantener los resultados.
            </motion.p>
          </motion.div>
        </div>

        <div className=" px-0 md:px-6 max-w-full">
          <div className="grid lg:grid-cols-[400px_1fr] gap-0 md:gap-10  ">
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
