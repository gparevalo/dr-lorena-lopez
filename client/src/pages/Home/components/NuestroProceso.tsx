import { UnifiedSection } from "@/components/layout/UnifiedSection";
import { useLanguage } from "@/i18n";
import foto from "@assets/images/3.jpg";
import { motion } from "framer-motion";
import LuxuryLabel from "./LuxuryLabel";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProcesoClinicoPremium() {
  const { t } = useLanguage();
  return (
    <UnifiedSection id="proceso" dark={false} withGlow={false}>
      {/* HEADER */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="w-full flex justify-end"
      >
        <div className="max-w-3xl text-right">
          <motion.div variants={fadeUp} className="flex justify-end">
            <LuxuryLabel dark>{t.proceso.label}</LuxuryLabel>
          </motion.div>

          <motion.h2
            variants={item}
            className="font-heading text-6xl sm:text-7xl md:text-6xl lg:text-8xl text-black leading-none tracking-[-0.03em]"
          >
            {t.proceso.title}{" "}
            <span className="text-primary inline-block">
              {t.proceso.title2}
            </span>
          </motion.h2>
        </div>
      </motion.div>
      <div className="grid grid-cols-12   items-center gap-20  ">
        {/* IMAGEN 1/3 */}

        <div className="col-span-12 lg:col-span-5  ">
          <img src={foto} className="w-full h-full object-cover rounded-2xl" />
        </div>
        {/* CONTENIDO 2/3 */}
        <div className="col-span-12 lg:col-span-7">
          {" "}
          <motion.p
            variants={item}
            className="mt-6 mb-10 text-lg text-foreground/70 max-w-2xl  "
          >
            {t.proceso.subtitle}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {t.proceso.items.map((step) => (
              <motion.div
                key={step.number}
                variants={item}
                className="relative border-l border-border pl-8"
              >
                {/* number */}
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full border border-border bg-background flex items-center justify-center text-xs font-medium">
                  {step.number}
                </div>

                {/* content */}
                <h3 className="text-xl md:text-2xl font-medium">
                  {step.title}
                </h3>

                <p className="mt-2 text-foreground/70 leading-relaxed">
                  {step.description}
                </p>

                <p className="mt-3 italic text-primary/70">“{step.insight}”</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </UnifiedSection>
  );
}
