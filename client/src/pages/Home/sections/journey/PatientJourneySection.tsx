import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import LuxuryLabel from "../../components/LuxuryLabel";
import ImgStickySection from "./ImgStickySection";
import TimeLineSection from "./TimeLineSection";
import { i } from "node_modules/vite/dist/node/chunks/moduleRunnerTransport";

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
    products: [
      {
        name: "Limpiador suave",
        description:
          "Prepara tu piel para el tratamiento con una limpieza efectiva pero delicada.",
        image: "/images/products/limpiador.png",
      },
      {
        name: "Tónico equilibrante",
        description:
          "Restablece el pH de tu piel y la prepara para absorber los activos del tratamiento.",
        image: "/images/products/tonico.png",
      },
      {
        name: "Serum pre-tratamiento",
        description:
          "Formulado para fortalecer la piel y optimizar los resultados del procedimiento.",
        image: "/images/products/serum.png",
      },
    ],
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
    products: [
      {
        name: "Anestésico tópico",
        description:
          "Garantiza tu comodidad durante el procedimiento, minimizando cualquier molestia.",
        image: "/images/products/anestesico.png",
      },
      {
        name: "Gel calmante post-tratamiento",
        description:
          "Formulado para aliviar la piel inmediatamente después del procedimiento y favorecer la recuperación.",
        image: "/images/products/gel.png",
      },
    ],
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
    products: [
      {
        name: "Crema regeneradora",
        description:
          "Ayuda a acelerar la recuperación de la piel, promoviendo la regeneración celular y reduciendo el enrojecimiento.",
        image: "/images/products/crema.png",
      },
      {
        name: "Protector solar médico",
        description:
          "Protege tu piel de los rayos UV, un paso crucial para mantener los resultados y prevenir daños después del tratamiento.",
        image: "/images/products/protector.png",
      },
      {
        name: "Sérum reparador",
        description:
          "Formulado para potenciar la regeneración celular y mejorar la textura de la piel después del tratamiento.",
        image: "/images/products/serum.png",
      },
      {
        name: "Spray calmante",
        description:
          "Proporciona alivio inmediato a la piel irritada, ayudando a reducir la inflamación y el malestar post-tratamiento.",
        image: "/images/products/spray.png",
      },
      {
        name: "Mascarilla hidratante",
        description:
          "Hidrata profundamente la piel después del tratamiento, ayudando a restaurar la barrera cutánea y mejorar la comodidad.",
        image: "/images/products/mascarilla.png",
      },
      {
        name: "Suero antioxidante",
        description:
          "Protege la piel de los radicales libres y ayuda a mantener los resultados del tratamiento a largo plazo.",
        image: "/images/products/suero.png",
      },
      {
        name: "Bálsamo reparador",
        description:
          "Ideal para áreas específicas que requieren atención adicional, ayudando a acelerar la recuperación y mejorar la textura de la piel.",
        image: "/images/products/balsamo.png",
      },
      {
        name: "Crema antiinflamatoria",
        description:
          "Ideal para reducir la inflamación y el enrojecimiento después del tratamiento.",
        image: "/images/products/crema-antiinflamatoria.png",
      },
    ],
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
    products: [
      {
        name: "Suplemento de colágeno",
        description:
          "Apoya la salud de tu piel desde adentro, ayudando a mantener la firmeza y elasticidad a largo plazo.",
        image: "/images/products/colageno.png",
      },
      {
        name: "Protector solar de amplio espectro",
        description:
          "Fundamental para proteger tu piel de los daños solares y preservar los resultados de tus tratamientos a largo plazo.",
        image: "/images/products/protector.png",
      },
      {
        name: "Sérum antioxidante",
        description:
          "Protege tu piel de los radicales libres y ayuda a mantener los resultados del tratamiento a largo plazo.",
        image: "/images/products/suero.png",
      },
      {
        name: "Crema reafirmante",
        description:
          "Ayuda a mantener la firmeza de la piel, prolongando los beneficios de tus tratamientos estéticos.",
        image: "/images/products/crema-reafirmante.png",
      },
      {
        name: "Bálsamo nutritivo",
        description:
          "Ideal para mantener la hidratación y nutrición de la piel, ayudando a preservar los resultados de tus tratamientos a largo plazo.",
        image: "/images/products/balsamo-nutritivo.png",
      },
      {
        name: "Mascarilla revitalizante",
        description:
          "Proporciona una hidratación profunda y revitaliza la piel, ayudando a mantener un aspecto saludable y radiante a largo plazo.",
        image: "/images/products/mascarilla-revitalizante.png",
      },
      {
        name: "Tónico equilibrante",
        description:
          "Restablece el pH de tu piel y ayuda a mantenerla equilibrada, prolongando los beneficios de tus tratamientos estéticos.",
        image: "/images/products/tonico.png",
      },
      {
        name: "Sérum de vitamina C",
        description:
          "Ilumina la piel y proporciona protección antioxidante, ayudando a mantener un tono uniforme y radiante a largo plazo.",
        image: "/images/products/serum-vitamina-c.png",
      },
    ],
  },
];

export default function PatientJourneySection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="tu-experiencia-completa"
      className={cn("relative  section-spacing", "bg-white text-black")}
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
            lg:grid-cols-[400px_1fr]
            gap-0
            md:gap-10
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
