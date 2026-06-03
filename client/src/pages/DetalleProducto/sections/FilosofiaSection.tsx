import { TreatmentInfo } from "./interfaces";
import { fadeUp } from "@/lib/animations";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion } from "framer-motion";
interface FilosofiaSectionProps {
  detail: TreatmentInfo;
}

export default function FilosofiaSection({ detail }: FilosofiaSectionProps) {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* LEFT */}

            <div className="lg:col-span-7">
              <motion.div variants={fadeUp} className="flex justify-start">
                <LuxuryLabel> {detail.philosophy.label}</LuxuryLabel>
              </motion.div>
              <span className="uppercase tracking-[0.35em] text-primary text-[11px] font-semibold"></span>

              <h2 className="font-heading text-5xl lg:text-7xl leading-[0.9] mt-6 mb-10">
                {detail.philosophy.title}
              </h2>

              <p className="text-lg text-black/60 leading-relaxed max-w-2xl">
                {detail.philosophy.description}
              </p>
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-5">
              <div className="space-y-10">
                {detail.philosophy.principles.map((item, index) => (
                  <div key={item.number} className="flex gap-6">
                    <span className="font-heading text-5xl text-primary/20 leading-none">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="font-heading text-2xl mb-2">
                        {item.title}
                      </h3>

                      <p className="text-black/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Background Number */}

        <span className="absolute right-0 top-1/2 -translate-y-1/2 font-heading text-[400px] text-primary/[0.03] leading-none pointer-events-none">
          01
        </span>
      </section>
    </>
  );
}
