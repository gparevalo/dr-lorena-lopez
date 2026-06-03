import { fadeUp } from "@/lib/animations";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion } from "framer-motion";
import { TreatmentInfo } from "./interfaces";
import { useLanguage } from "@/i18n";

interface CandidatosSectionProps {
  detail: TreatmentInfo;
}

export default function CandidatosSection({ detail }: CandidatosSectionProps) {
  const { t } = useLanguage();
  const td = t.treatmentDetail;
  return (
    <>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div variants={fadeUp} className="flex justify-center">
              <LuxuryLabel>
                {" "}
                {td.candidate_label || "Candidato Ideal"}
              </LuxuryLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading mb-8 text-black leading-none tracking-tighter"
            >
              {td.candidate_title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-black/50 leading-relaxed max-w-2xl mx-auto"
            >
              {detail.candidate_body}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detail.candidate_points.map((item, index) => (
              <>
                <div className="rounded-3xl border border-white/10 bg-primary/5 backdrop-blur-xl px-6 py-4">
                  <div className="flex items-start gap-4">
                    <div className="w-24 h-12 rounded-2xl bg-[#8B5E3C]/25 flex items-center  justify-center  ">
                      0{index + 1}
                    </div>

                    <div className="text-left ">
                      <p className=" text-sm  pb-2">{item}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
