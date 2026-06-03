import { useLanguage } from "@/i18n";
import { fadeUp } from "@/lib/animations";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion } from "framer-motion";
import { TreatmentInfo } from "./interfaces";

interface ProcesoSectionProps {
  detail: TreatmentInfo;
}

export default function ProcesoSection({ detail }: ProcesoSectionProps) {
  const { t } = useLanguage();
  const td = t.treatmentDetail; 
  return (
    <>
      <section className="py-32 bg-primary text-white rounded-[50px]">
        <div className="max-w-6xl mx-auto px-8">
          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.div
              variants={fadeUp}
              className="flex justify-center text-white"
            >
              <LuxuryLabel dark> {td.process_label}</LuxuryLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading mb-8 text-black leading-none tracking-tighter text-white"
            >
              {td.process_title}
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-10">
            {detail.process_steps.map((step, index) => (
              <div key={step.title}>
                <span className="font-heading text-7xl text-white/20">
                  0{index + 1}
                </span>

                <h3 className="font-heading text-2xl mt-6 mb-4">
                  {step.title}
                </h3>

                <p className="text-white/70 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
