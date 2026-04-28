import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function FraseVideo() {
  const { t } = useLanguage();
  const heroRef = useRef(null);

  return (
    <UnifiedSectionBlack
      id="proceso"
      className="bg-primary/[0.9] flex items-center justify-center min-h-[80vh]"
    >
      <div className="text-center max-full ">
        <div className="text-center max-w-4xl ">
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-6"
          >
            <Quote className="w-10 h-10 text-white/80" />

            <p className="font-heading  italic text-5xl md:text-5xl text-white/70 leading-relaxed">
              {t.about.philosophy}
              <br />
              <span className="font-heading  text-secondary font-bold ">
                {t.about.philosophy2}
              </span>
            </p>
          </motion.div>
        </div>
      </div>

    </UnifiedSectionBlack>
  );
}
