import { useLanguage } from "@/i18n";
import heroImg from "@assets/images/61.png";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";

export default function HeroHomeFinal() {
  const { t } = useLanguage();
  const c = t.consultaPage;

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
    relative
    min-h-screen
    bg-white
    overflow-hidden
    flex items-center pt-24
  "
      >
        {/* ─── BACKGROUND CINEMATIC ELEMENTS ─── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-white/40 skew-x-[-12deg] translate-x-[20%] z-0" />
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />

          {/* Sculptural geometric accent */}
          <div className="absolute bottom-0 right-[5%] w-[35%] aspect-square border-l border-t border-black/[0.03] rounded-tl-[10rem] z-0 hidden lg:block" />
        </div>

        <div
          className="
      section-container
      relative
      z-20
      w-full
      grid
      lg:grid-cols-12
      items-center
      gap-10
    "
        >
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 relative z-30">
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-px bg-primary/30" />
              <p className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">
                {t.hero.label}
              </p>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-black leading-[0.85] tracking-tight mb-10"
            >
              <span className="block">{t.hero.headline_1}</span>
              <span className="font-serif italic text-primary font-bold block">
                {t.hero.headline_2}
              </span>
              <span className="font-serif block mb-4">{t.hero.headline_3}</span>
            </motion.h1>
            <p
              className=" 
    text-xl   
    max-w-[520px] 
    font-serif
    italic 
  "
            >
              {t.hero.subtitle}
            </p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.3 }}
              className="mt-10 flex items-center gap-5"
            >
              <a href="/consulta">
                <button
                  className="
              px-8 py-4
              bg-primary
              text-white
              uppercase
              tracking-[0.25em]
              text-xs
              hover:scale-[1.02]
              transition
            "
                >
                  {t.hero.cta_primary}
                </button>
              </a>
              <Button
                asChild
                variant="ghost"
                className="px-8 text-[11px] uppercase tracking-[0.4em] font-bold group w-full sm:w-auto"
              >
                <a href="#proceso" className="flex items-center gap-3">
                  {t.hero.cta_secondary}
                  <span className="w-8 h-px bg-primary/30 group-hover:w-12 transition-all duration-500" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className="
    lg:col-span-6
    relative
    h-[90vh]
    flex
    items-center
    justify-center
  "
          >
            {/* ambient blur */}
            <div
              className="
      absolute
      w-[520px]
      h-[520px]
      rounded-full
      bg-primary/10
      blur-[120px]
    "
            />

            {/* MAIN EDITORIAL FRAME */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="
      relative
      z-20
      w-[85%]
      h-[78vh]
      rounded-[3rem]
      overflow-hidden
      bg-white/40
      backdrop-blur-2xl
      border border-white/50
      shadow-[0_20px_80px_rgba(0,0,0,0.08)]
    "
            >
              {/* IMAGE */}
              <motion.img
                src={heroImg}
                alt="Doctora"
                className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        object-center
        scale-[1.02]
      "
              />

              {/* cinematic fade */}
              <div
                className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/10
        via-transparent
        to-white/10
      "
              />

              {/* soft bottom fade */}
              <div
                className="
        absolute
        bottom-0
        left-0
        right-0
        h-[25%]
        bg-gradient-to-t
        from-white/40
        to-transparent
      "
              />
            </motion.div>

            {/* decorative border */}
            <div
              className="
      absolute
      w-[88%]
      h-[81vh]
      rounded-[3.5rem]
      border
      border-black/[0.04]
    "
            />

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="
      absolute
      top-[10%]
      right-[-2%]
      z-40
      max-w-[240px]
      rounded-[2rem]
      bg-primary
      backdrop-blur-xl
      border border-white/50
      px-6
      py-5
      shadow-[0_20px_50px_rgba(0,0,0,0.08)]
    "
            >
              <p className="text-[10px] tracking-[0.35em] uppercase text-white mb-2 font-bold">
                Especialista
              </p>

              <p className="text-sm leading-relaxed text-white/90 ">
                Resultados armónicos y sofisticados con enfoque médico-estético
                avanzado.
              </p>
            </motion.div>
          </div>
        </div>
        {/* ─── CINEMATIC OVERLAYS ─── */}

        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f5f1] to-transparent" />
      </motion.section>
    </>
  );
}
