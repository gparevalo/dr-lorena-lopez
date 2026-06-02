import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { useState } from "react";
import LuxuryLabel from "./components/LuxuryLabel";

const programs = [
  {
    id: "antes",
    name: "Antes de tu tratamiento",
    subtitle: "Prepara tu piel para mejores resultados",
    description:
      "Un conjunto de productos recomendados por la doctora para preparar tu piel antes de tu procedimiento estético.",

    benefits: [
      "Preparación de la piel",
      "Mayor hidratación",
      "Mejor respuesta al tratamiento",
      "Resultados más uniformes",
    ],
  },

  {
    id: "despues",
    name: "Después de tu tratamiento",
    subtitle: "Ayuda a tu piel a recuperarse mejor",
    description:
      "Productos seleccionados para acompañar la recuperación de tu piel y brindarle los cuidados que necesita después del procedimiento.",

    benefits: [
      "Recuperación más cómoda",
      "Menor irritación",
      "Mayor hidratación",
      "Protección de la piel",
    ],
  },

  {
    id: "duracion",
    name: "Haz que tus resultados duren más",
    subtitle: "Mantén los beneficios de tu tratamiento",
    description:
      "Una rutina diseñada para ayudarte a conservar por más tiempo los resultados obtenidos en consulta.",

    benefits: [
      "Mayor duración de resultados",
      "Protección antioxidante",
      "Cuidado diario personalizado",
      "Piel saludable por más tiempo",
    ],
  },

  {
    id: "colageno",
    name: "Estimula tu colágeno",
    subtitle: "Apoya la firmeza y calidad de tu piel",
    description:
      "Productos enfocados en estimular los procesos naturales de regeneración y producción de colágeno.",

    benefits: [
      "Mayor firmeza",
      "Mejor elasticidad",
      "Piel más saludable",
      "Apoyo regenerativo",
    ],
  },

  {
    id: "anual",
    name: "Plan anual de cuidado facial",
    subtitle: "Acompañamiento durante todo el año",
    description:
      "Una estrategia personalizada para pacientes que desean mantener resultados naturales y consistentes a largo plazo.",

    benefits: [
      "Seguimiento personalizado",
      "Evaluaciones periódicas",
      "Plan preventivo",
      "Cuidado continuo",
    ],
  },
];

export default function SignatureCarePrograms() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    ciudad: "",
    observaciones: "",
  });

  const whatsappNumber = "593999999999";

  const sendWhatsApp = () => {
    const message = `
Hola Dra. Lorena,

Deseo recibir información sobre el programa:

Programa: ${selectedProgram?.name}

Nombre: ${form.nombre}
Teléfono: ${form.telefono}
Ciudad: ${form.ciudad}

Observaciones:
${form.observaciones}
`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <>
      <UnifiedSectionBlack
        id="tratamientos"
        className="bg-[#fdfdfd]"
        withGrid={false}
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="flex justify-center">
              <LuxuryLabel dark> Signature Care Programs</LuxuryLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading mb-10 text-black leading-none tracking-tighter"
            >
              Los mejores resultados no dependen únicamente del tratamiento.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-black/40 text-xl font-serif italic max-w-2xl mx-auto mb-12"
            >
              Cada procedimiento merece una estrategia de continuidad diseñada
              para proteger, potenciar y prolongar sus beneficios a largo plazo.
            </motion.p>

            <div className="space-y-0 border-t border-black/10">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  variants={fadeUp}
                  className="group border-b border-black/10 py-12"
                >
                  <div className="grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-1">
                      <span className="font-heading text-4xl text-black/20">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="lg:col-span-3">
                      <h3 className="font-heading text-3xl text-black">
                        {program.name}
                      </h3>

                      <p className="text-primary mt-2 text-sm uppercase tracking-[0.25em]">
                        {program.subtitle}
                      </p>
                    </div>

                    <div className="lg:col-span-4">
                      <p className="text-black/60 leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    <div className="lg:col-span-2">
                      <ul className="space-y-2">
                        {program.benefits.map((benefit) => (
                          <li key={benefit} className="text-sm text-black/50">
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-2 flex justify-end">
                      <button
                        onClick={() => setSelectedProgram(program)}
                        className="
                      uppercase
                      tracking-[0.25em]
                      text-xs
                      font-bold
                      text-primary
                      hover:translate-x-2
                      transition-all
                    "
                      >
                        Solicitar Programa →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-[0.03] z-0">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full fill-current text-primary"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
      </UnifiedSectionBlack>

      <Dialog
        open={!!selectedProgram}
        onOpenChange={() => setSelectedProgram(null)}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Solicitar {selectedProgram?.name}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-6">
            <input
              placeholder="Nombre completo"
              className="w-full border p-3"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            />

            <input
              placeholder="Teléfono"
              className="w-full border p-3"
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            />

            <input
              placeholder="Ciudad"
              className="w-full border p-3"
              value={form.ciudad}
              onChange={(e) => setForm({ ...form, ciudad: e.target.value })}
            />

            <textarea
              placeholder="Observaciones"
              rows={4}
              className="w-full border p-3"
              value={form.observaciones}
              onChange={(e) =>
                setForm({
                  ...form,
                  observaciones: e.target.value,
                })
              }
            />

            <button
              onClick={sendWhatsApp}
              className="
            w-full
            bg-primary
            text-white
            h-12
            uppercase
            tracking-[0.2em]
            text-xs
            font-bold
          "
            >
              Enviar por WhatsApp
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
