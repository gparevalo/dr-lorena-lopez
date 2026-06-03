import { useLanguage } from "@/i18n";
import { fadeUp, staggerContainer } from "@/lib/animations";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion } from "framer-motion";
import { TreatmentInfo } from "./interfaces";

interface BeneficiosSectionProps {
  detail: TreatmentInfo;
}

export default function BeneficiosSection({ detail }: BeneficiosSectionProps) {
  const { t } = useLanguage();
  const td = t.treatmentDetail;
  return (
    <>
      <section className="section-spacing bg-ivory/50">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* HEADER */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <motion.div variants={fadeUp} className="text-white">
                <LuxuryLabel> {td.benefits_label}</LuxuryLabel>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="font-heading mb-8 text-black leading-none tracking-tighter  "
              >
                {td.benefits_title}
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="border-t border-black/10">
                {detail.benefits.map((point: string, i: number) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group grid grid-cols-[80px_1fr] gap-6 py-8 border-b border-black/10 transition-all duration-500"
                  >
                    {/* NUMBER */}
                    <div className="text-primary/40 font-serif italic text-5xl leading-none transition-all duration-500 group-hover:text-primary group-hover:translate-x-1">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-[1.05rem] leading-[1.9] text-foreground/75 font-light tracking-[0.01em] transition-all duration-500 group-hover:text-foreground">
                        {point}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
