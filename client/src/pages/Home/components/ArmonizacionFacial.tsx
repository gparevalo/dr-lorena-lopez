import { UnifiedSection } from "@/components/layout/UnifiedSection";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations";
import videoLore from "@assets/video/DraLorena4_Ojeras_V1.mp4";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";
import LuxuryLabel from "./LuxuryLabel";

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
    <UnifiedSection id="armonizacion" dark={false} withGlow={true}>
      {/* EDITORIAL LAYOUT */}
      <div className="relative editorial-grid items-center gap-12 lg:gap-24">
        <div className="col-span-12 lg:col-span-6 flex flex-col items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-10"
          >
            {/* LEFT - TEXT MANIFESTO */}
            <div className="col-span-12 lg:col-span-12  ">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="w-full flex flex-col items-star text-star"
              >
                <motion.div variants={fadeUp}>
                  <LuxuryLabel>{t.starService.label}</LuxuryLabel>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="font-heading leading-[0.9] tracking-tighter mt-6 mb-8"
                  style={{ fontSize: "var(--text-8xl)" }}
                >
                  {t.starService.title}{" "}
                  <span className="italic font-serif text-primary">
                    {t.starService.title2}
                  </span>
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="mt-4 font-serif text-xl md:text-2xl text-foreground/60 max-w-2xl italic mb-10"
                >
                  {t.starService.subtitle}
                </motion.p>
              </motion.div>
            </div>
            <motion.div
              variants={fadeUp}
              className="relative pl-10 border-l border-primary/20"
            >
              <p className="font-serif italic text-2xl text-foreground/90 leading-relaxed">
                “No aplicamos productos,{" "}
                <span className="text-primary font-bold">
                  diseñamos rostros.
                </span>
                ”
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Button asChild variant="editorial" withShimmer>
                <a href="/tratamientos">{t.hero.cta_secondary}</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT - VIDEO (SCULPTURAL PIECE) */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex justify-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative w-full max-w-md group"
          >
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)] border border-black/5 bg-ivory">
              <video
                ref={videoRef}
                src={videoLore}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loop
                muted={!playing}
                playsInline
                onClick={togglePlay}
              />

              {!playing && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px] cursor-pointer group-hover:bg-black/20 transition-all duration-500"
                >
                  <div className="w-20 h-20 flex items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md group-hover:scale-110 group-hover:bg-primary/90 group-hover:border-primary transition-all duration-500">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Decorative orbit line */}
            <div className="absolute -inset-8 border border-primary/5 rounded-[4rem] pointer-events-none -z-10" />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM PRINCIPLES */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mt-24 border-t border-black/5 pt-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {t.starService.items.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="space-y-6 group">
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary/40 font-bold group-hover:text-primary transition-colors">
                Principle {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-heading text-xl text-foreground font-bold tracking-tight">
                {item.name}
              </h3>

              <p className="text-primary font-serif italic text-lg leading-snug">
                {item.tagline}
              </p>

              <p className="text-[15px] text-foreground/60 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </UnifiedSection>
  );
}
