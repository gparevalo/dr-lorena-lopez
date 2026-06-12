import { fadeUp } from "@/lib/animations";
import { whatsappHref } from "@/lib/site";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ElPlanSection() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
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
              <LuxuryLabel> El plan</LuxuryLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading mb-10 text-black leading-none tracking-tighter"
            >
              Un año completo de
              <span className="text-primary "> acompañamiento</span> médico
              estético
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-black/40 leading-relaxed max-w-2xl mx-auto mb-12"
            >
              LongeviLift 360 no es una cita ni un procedimiento puntual. Es un
              plan anual donde la Dra. Lore López evalúa, planifica, ejecuta,
              controla y ajusta tu rejuvenecimiento en el tiempo para lograr
              resultados naturales, sostenibles y bien mantenidos.
            </motion.p>
          </motion.div>

          {/* GRID ITEMS */}
          <div className="grid md:grid-cols-4  gap-4 mt-14">
            {[
              "Diagnóstico facial integral",
              "Plan completamente personalizado",
              "Tratamientos por fases estratégicas",
              "Seguimiento médico periódico",
              "",
              "Ajustes según tu evolución",
              "Educación y cuidados en casa",
              "Comunidad privada de pacientes",
            ].map((item, index) => (
              <div
                key={item}
                className={
                  item
                    ? "border border-[#ECE8E2] rounded-3xl p-6 bg-[#f0f2ee] uppercase tracking-[0.2em] font-semibold "
                    : "hidden md:block"
                }
              >
                <div className="flex items-start gap-4 justify-center text-center">
                  <p className="font-semibold text-sm leading-snug">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Number */}
        <span className="absolute right-0 top-1/2 -translate-y-1/2 font-heading text-[400px] text-primary/[0.03] leading-none pointer-events-none">
          02
        </span>
      </section>
    </>
  );
}
