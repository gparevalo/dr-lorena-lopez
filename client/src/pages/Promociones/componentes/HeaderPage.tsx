import { useLanguage } from "@/i18n";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import headerImg from "@assets/images/10-t.png";

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

export default function HeaderPage() {
  const { t } = useLanguage();

  const tp = t.tratamientosPage;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#rrr]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-black/10" />{" "}
      {/* decorative image bottom right */}
      <div className="absolute bottom-0 right-0 w-[420px] md:w-[520px] lg:w-[80vh] opacity-100 pointer-events-none">
        <img src={headerImg} className="w-full h-full object-contain" alt="" />
      </div>
      <div className="relative z-10 max-w-[1500px] mx-auto px-8 lg:px-16 pt-32 w-full">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          initial="hidden"
          animate="show"
          variants={stagger}
          className="flex flex-col items-start max-w-4xl"
        >
          {/* LABEL */}
          <motion.div variants={fadeUp} className="mt-20">
            <LuxuryLabel dark>{tp.hero_label}</LuxuryLabel>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 font-heading text-5xl md:text-7xl lg:text-8xl text-black leading-[0.95] tracking-[-0.03em] max-w-3xl"
          >
            {tp.hero_headline_1}{" "}
            <span className="text-primary font-serif italic">
              {tp.hero_headline_2}
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            variants={fadeUp}
            className="mt-8  mb-16 text-black/60 text-lg md:text-xl font-light leading-relaxed max-w-xl"
          >
            {tp.hero_subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
