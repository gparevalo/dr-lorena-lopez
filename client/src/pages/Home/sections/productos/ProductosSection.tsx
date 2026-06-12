import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  treatmentCarePlans,
  treatmentPacks,
  treatmentSelector,
} from "@/data/treatmentCarePlans";
import { useLanguage } from "@/i18n";
import { fadeUp } from "@/lib/animations";
import { whatsappHref } from "@/lib/site";
import TimelineTreatment from "@/pages/Promociones/sections/TimelineTreatment";
import { useMemo } from "react";
import LuxuryLabel from "../../components/LuxuryLabel";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const inputClass =
  "w-full h-14 rounded-2xl border border-[#ECE8E2] bg-[#FAF9F7] px-5 outline-none transition-all focus:border-primary";

export default function ProductosSection() {
  const { t } = useLanguage();
  const tp = t.tratamientosPage;

  const [selectedTreatment, setSelectedTreatment] = useState("endolift");

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
        id="productos-tratamiento"
        className="bg-[#fff] pb-10 pb-0 "
        withGrid={false}
      >
        <div className="max-w-full mx-auto">
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
              <LuxuryLabel>Cuidado integral</LuxuryLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading mb-10 text-black leading-none tracking-tighter"
            >
              El camino hacia tus{" "}
              <span className="text-primary"> resultados </span>{" "}
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
          <div className="sticky z-40 bg-[#fdfdfd] py-6 flex flex-wrap  justify-center  gap-4 md:mb-14">
            {" "}
            {treatmentSelector.map((treatment) => (
              <button
                key={treatment.slug}
                onClick={() => setSelectedTreatment(treatment.slug)}
                className={`
                  px-6
                  py-3
                  rounded-full
                  border
                  transition-all
                  
                  ${
                    selectedTreatment === treatment.slug
                      ? "bg-primary text-white border-primary"
                      : "bg-white border-black/10"
                  }
                `}
              >
                {treatment.name}
              </button>
            ))}
          </div>

          {/* etapas */}
          <TimelineTreatment
            treatmentPlan={treatmentPlan}
            stages={stages}
            name={detalleTratamiento?.name || ""}
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-14 mb-32 flex flex-col md:flex-row items-center justify-center gap-4"
          >
            {/* PRIMARY CTA */}{" "}
            <a
              href={whatsappHref(
                "Hola, quiero agendar una valoracion para el tratamiento " +
                  detalleTratamiento?.name +
                  ". Mi nombre es ..",
              )}
              target="_blank"
              rel="noopener"
              className="w-full sm:w-auto"
            >
              <button className="group relative overflow-hidden w-full sm:w-auto h-14 px-8 rounded-full bg-primary text-white uppercase text-xs font-black tracking-[0.22em] shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all hover:scale-[1.02] flex items-center justify-center gap-3">
                {/* SHINE EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] duration-1000" />

                <span className="relative z-10">{t.hero.cta_primary}</span>
              </button>
            </a>
            <Button
              asChild
              variant="ghost"
              className="group w-full sm:w-auto justify-center md:justify-start text-primary hover:bg-transparent px-2 h-14"
            >
              <a
                href="/tratamientos"
                className="flex items-center gap-3 uppercase text-[11px] font-bold tracking-[0.24em]"
              >
                {t.hero.cta_secondary}

                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </UnifiedSectionBlack>

      <Dialog
        open={!!selectedProgram}
        onOpenChange={() => setSelectedProgram(null)}
      >
        <DialogContent className="max-w-xl border-[#ECE8E2] rounded-[32px] p-0 overflow-hidden">
          <div className="p-10">
            <span className="uppercase tracking-[0.35em] text-primary text-[11px] font-semibold">
              Solicitud de información
            </span>

            <DialogTitle className="font-heading text-4xl mt-4">
              {selectedProgram?.name}
            </DialogTitle>

            <p className="text-black/60 mt-4 leading-relaxed">
              Déjanos tus datos y nos comunicaremos contigo para coordinar la
              compra.
            </p>

            <div className="space-y-5 mt-8">
              <input
                placeholder="Nombre completo"
                className={inputClass}
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
                className={inputClass}
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
                className={inputClass}
                value={form.ciudad}
                onChange={(e) =>
                  setForm({
                    ...form,
                    ciudad: e.target.value,
                  })
                }
              />

              <textarea
                rows={5}
                placeholder="Cuéntanos cualquier duda que tengas"
                className="w-full rounded-2xl border border-[#ECE8E2] bg-[#FAF9F7] px-5 py-4 outline-none focus:border-primary transition-all resize-none"
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
                className="mt-8 w-full h-14 rounded-full bg-primary text-white uppercase tracking-[0.25em] text-xs font-semibold hover:opacity-90 transition-all"
              >
                Solicitar información por WhatsApp
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
