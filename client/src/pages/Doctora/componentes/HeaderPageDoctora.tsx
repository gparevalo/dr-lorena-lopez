import { useLanguage } from "@/i18n";
import headerImg from "@assets/images/12.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

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

export default function HeaderPageDoctora() {
  const { t } = useLanguage();

  const d = t.doctora;

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
      className="relative min-h-[50vh] md:min-h-[90vh] flex items-center overflow-hidden bg-white"
    >
      {/* decorative image bottom right */}
      <div className=" absolute bottom-0 right-0  w-full  opacity-100 pointer-events-none">
        <img src={headerImg} className="w-full h-full object-contain" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/30" />{" "}
      <div className="relative z-10 max-w-full mx-auto px-8 lg:px-16 pt-32 w-full">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          initial="hidden"
          animate="show"
          variants={stagger}
          className="flex flex-col items-start max-w-xl"
        >
          {/* LABEL */}
          <motion.div variants={fadeUp} className="mt-50"></motion.div>

          {/* TITLE */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 font-heading text-5xl md:text-7xl lg:text-8xl text-white/[0.7] leading-[0.95] tracking-[-0.03em] max-w-3xl"
          >
            {d.hero_name}{" "}
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="mt-6 font-heading  text-3xl text-primary/[0.9] leading-[0.95] tracking-[-0.03em] max-w-3xl"
          >
            <em className="not-italic text-[hsl(35,35%,72%)]">
              {t.about.specialty}
            </em>
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
