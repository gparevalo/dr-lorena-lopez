import { UnifiedSection } from "@/components/layout/UnifiedSection";
import { useLanguage } from "@/i18n";
import videoLore from "@assets/video/DraLorena4_Ojeras_V1.mp4";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";
import LuxuryLabel from "./LuxuryLabel";

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

export default function ArmonizacionFacial() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <UnifiedSection id="doctora" dark={false} withGlow={false}>
      {/* EDITORIAL LAYOUT */}
      <div className="relative grid grid-cols-12 gap-20 items-center">
        {/* LEFT - TEXT MANIFESTO */}
        <div className="col-span-12 lg:col-span-5">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <LuxuryLabel>{t.starService.label}</LuxuryLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-5xl md:text-8xl leading-[0.9] tracking-tight mt-6"
            >
              {t.starService.title}
              <br />
              <span className="italic font-serif text-primary">
                {t.starService.title2}
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-8 font-serif   text-xl text-foreground/80 max-w-md"
            >
              {t.starService.subtitle}{" "}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-8 font-serif italic text-xl text-foreground/80 max-w-md"
            >
              “No aplicamos productos, diseñamos rostros.”
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className=" mt-10
    left-0 w-full
    flex flex-col sm:flex-row 
    justify-star items-star  
  "
            >
              <a href="/tratamientos">
                <button
                  className="
            px-6 py-3 
            bg-primary
            border border-primary/60 
            text-white 
            text-xs uppercase tracking-[0.3em] font-semibold 
            hover:bg-white hover:text-primary 
            transition duration-300
          "
                >
                  {t.hero.cta_secondary}
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* CENTER - VIDEO (SCULPTURAL PIECE) */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl border border-black/10">
              <video
                ref={videoRef}
                src={videoLore}
                className="w-full h-full object-cover"
                onClick={togglePlay}
              />

              {!playing && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/25 backdrop-blur-[2px] cursor-pointer"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      {/* BOTTOM PRINCIPLES */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={stagger}
        className="mt-10 border-t border-border pt-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {t.starService.items.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="space-y-4">
              {/* TITLE (NAME) */}
              <p className="text-sm uppercase tracking-[0.3em] text-foreground/70 font-medium">
                {item.name}
              </p>

              {/* TAGLINE (ACCENT LINE) */}
              <p className="text-primary font-serif italic text-base leading-snug">
                {item.tagline}
              </p>

              {/* DESCRIPTION */}
              <p className="text-sm text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </UnifiedSection>
  );
}
