import { useLanguage } from "@/i18n";
import heroImg from "@assets/images/14.png";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, fadeIn } from "@/lib/animations";
import { Star, ShieldCheck, HeartPulse } from "lucide-react";

export default function HeroHome2() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen lg:min-h-[110vh] flex items-center justify-center overflow-hidden bg-ivory pt-24 md:pt-32 pb-0">
      {/* ─── BACKGROUND CINEMATIC ELEMENTS ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-white/40 skew-x-[-12deg] translate-x-[20%] z-0" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        
        {/* Sculptural geometric accent */}
        <div className="absolute bottom-0 right-[5%] w-[35%] aspect-square border-l border-t border-black/[0.03] rounded-tl-[10rem] z-0 hidden lg:block" />
      </div>

      <div className="section-container relative z-20 w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
          
          {/* ─── LEFT: CONTENT BLOCK ─── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="md:col-span-12 lg:col-span-7 flex flex-col items-start text-left z-30 mb-12 lg:mb-0"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-primary/30" />
              <p className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">
                {t.hero.label}
              </p>
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              className="font-heading text-black leading-[0.85] tracking-tight mb-10"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7.5rem)" }}
            >
              <span className="block">{t.hero.headline_1}</span>
              <span className="font-serif italic text-primary font-bold block">
                {t.hero.headline_2}
              </span>
              <span className="font-serif block mb-4">{t.hero.headline_3}</span>
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              className="text-black/60 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12 font-serif italic"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            >
              <Button asChild variant="editorial" size="editorial" withShimmer className="w-full sm:w-auto">
                <a href="#contacto">{t.hero.cta_primary}</a>
              </Button>
              <Button asChild variant="ghost" className="px-8 text-[11px] uppercase tracking-[0.4em] font-bold group w-full sm:w-auto">
                <a href="#proceso" className="flex items-center gap-3">
                  {t.hero.cta_secondary}
                  <span className="w-8 h-px bg-primary/30 group-hover:w-12 transition-all duration-500" />
                </a>
              </Button>
            </motion.div>

            {/* QUICK STATS FOR TRUST */}
            <motion.div 
              variants={fadeIn}
              className="mt-20 grid grid-cols-2 gap-12 border-t border-black/5 pt-12 hidden md:grid"
            >
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-5 h-5 text-primary/40 mt-1" />
                <div>
                  <p className="text-2xl font-bold text-foreground">14+ Años</p>
                  <p className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold">Experiencia Médica</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <HeartPulse className="w-5 h-5 text-primary/40 mt-1" />
                <div>
                  <p className="text-2xl font-bold text-foreground">5K+</p>
                  <p className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold">Pacientes Satisfechos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT: VISUAL BLOCK (SCULPTURAL PORTRAIT) ─── */}
          <div className="md:col-span-12 lg:col-span-5 relative h-full flex flex-col items-center lg:items-end justify-end">
            <div className="relative w-full max-w-[580px] aspect-[4/5] flex items-end">
              
              {/* Layered Architectural elements */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-[10%] right-[10%] h-[75%] bg-primary rounded-t-full shadow-[0_-20px_100px_rgba(107,140,78,0.15)] origin-bottom z-0"
              />
              
              <div className="absolute top-[20%] left-[-10%] w-[120%] h-[120%] border border-black/[0.03] rounded-full z-0 pointer-events-none" />

              {/* IMAGE WITH CINEMATIC REVEAL */}
              <motion.img
                src={heroImg}
                alt="Dra. Lore López"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="relative z-10 w-full object-contain pointer-events-none"
              />

              {/* FLOATING SOCIAL PROOF */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute right-[5%] top-[45%] glass p-4 border border-white/40 shadow-2xl z-20 hidden xl:block"
              >
                <div className="flex gap-1 text-primary/70 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                </div>
                <p className="text-[9px] uppercase tracking-tighter text-foreground font-bold whitespace-nowrap">Calificación 5/5 en Google</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── CINEMATIC OVERLAYS ─── */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent z-40" />
      
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
    </section>
  );
}


