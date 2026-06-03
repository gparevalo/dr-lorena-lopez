import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  carePrograms,
  treatmentCarePlans,
  treatmentPacks,
  treatmentSelector,
} from "@/data/treatmentCarePlans";
import { useLanguage } from "@/i18n";
import { fadeUp } from "@/lib/animations";
import { useMemo } from "react";
import LuxuryLabel from "../Home/components/LuxuryLabel";
import DetalleTratamientoSection from "./sections/DetalleTratamientoSection";
import PacksSection from "./sections/PacksSection";
import ProgramsSection from "./sections/ProgramsSection";
import TimelineTreatment from "./sections/TimelineTreatment";

export default function SignatureCarePrograms() {
  const { t } = useLanguage();
  const tp = t.tratamientosPage;

  const [selectedTreatment, setSelectedTreatment] =
    useState("toxina-botulinica");

  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    ciudad: "",
    observaciones: "",
  });

  const whatsappNumber = "593999999999";

  const treatmentPlan = useMemo(
    () => treatmentCarePlans[selectedTreatment],
    [selectedTreatment],
  );

  const packs = useMemo(() => {
    if (!treatmentPlan?.recommendedPacks) return [];

    return treatmentPlan.recommendedPacks
      .map((packId) => treatmentPacks.find((pack) => pack.id === packId))
      .filter(Boolean);
  }, [treatmentPlan]);

  const stages = [
    {
      id: "before",
      stage: "Antes",
      title: "Preparación",
      data: treatmentPlan.before,
    },
    {
      id: "during",
      stage: "Durante",
      title: "Procedimiento",
      data: treatmentPlan.during,
    },
    {
      id: "after",
      stage: "Después",
      title: "Recuperación",
      data: treatmentPlan.after,
    },
    {
      id: "maintenance",
      stage: "Mantenimiento",
      title: "Resultados a largo plazo",
      data: treatmentPlan.maintenance,
    },
  ];
  console.log("treatmentPlan", treatmentPlan);
  console.log("stages", stages);
  console.log("packs", packs);

  const detalleTratamientoVector = tp.treatments.filter(
    (item) => item.slug === selectedTreatment,
  );

  const detalleTratamiento =
    detalleTratamientoVector.length > 0 ? detalleTratamientoVector[0] : null;
  console.log("detalleTratamiento", detalleTratamiento);

  const sendWhatsApp = () => {
    const message = `
Hola Dra. Lorena,

Me interesa recibir información sobre:

Tratamiento:
${selectedTreatment}

Programa:
${selectedProgram?.name}

Nombre:
${form.nombre}

Teléfono:
${form.telefono}

Ciudad:
${form.ciudad}

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
        id="programas"
        className="bg-[#fdfdfd] "
        withGrid={false}
      >
        <div className="max-w-8xl mx-auto">
          {/* HEADER */}
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
              <LuxuryLabel dark>Cuidado integral</LuxuryLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading mb-10 text-black leading-none tracking-tighter"
            >
              Descubre nuestros{" "}
              <span className="text-primary"> tramientos </span>{" "}
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

          {/* SELECTOR */}

          <div className="sticky z-40 bg-[#fdfdfd] py-6 flex flex-wrap  justify-center  gap-4  mb-14">
            {" "}
            {treatmentSelector.map((treatment) => (
              <button
                key={treatment.slug}
                onClick={() => setSelectedTreatment(treatment.slug)}
                className={`px-6 py-3 rounded-full border transition-all ${selectedTreatment === treatment.slug ? "bg-primary text-white border-primary" : "bg-white border-black/10"}`}
              >
                {treatment.name}
              </button>
            ))}
          </div>

          <div className="min-h-[425px] space-y-6  relative bg-white rounded-[40px] p-4 md:p-10 mb-20 border border-[#ECE8E2] pl-4 md:pl-10 shadow-[0_20px_60px_rgba(0,0,0,.04)] overflow-hidden ">
            {/* DETALLE */}
            <DetalleTratamientoSection
              detalleTratamiento={detalleTratamiento}
            />
            <br />

            {/* etapas */}
            <TimelineTreatment
              treatmentPlan={treatmentPlan}
              stages={stages}
              name={detalleTratamiento?.name || ""}
            />

            {/* PACKS */}
            <PacksSection
              packs={packs}
              setSelectedProgram={setSelectedProgram}
            />
          </div>

          {/* PROGRAMAS */}
          <ProgramsSection
            setSelectedProgram={setSelectedProgram}
            carePrograms={carePrograms}
          />
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
              onChange={(e) =>
                setForm({
                  ...form,
                  nombre: e.target.value,
                })
              }
            />

            <input
              placeholder="Teléfono"
              className="w-full border p-3"
              value={form.telefono}
              onChange={(e) =>
                setForm({
                  ...form,
                  telefono: e.target.value,
                })
              }
            />

            <input
              placeholder="Ciudad"
              className="w-full border p-3"
              value={form.ciudad}
              onChange={(e) =>
                setForm({
                  ...form,
                  ciudad: e.target.value,
                })
              }
            />

            <textarea
              rows={4}
              placeholder="Observaciones"
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
