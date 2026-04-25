import { Link } from "wouter";
import { ArrowLeft, Minus } from "lucide-react";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background overflow-hidden relative">
      {/* Cinematic Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <Minus className="w-8 h-px text-primary/40" />
            <span className="font-accent text-[10px] uppercase tracking-[0.5em] text-primary font-bold">Error Code 404</span>
            <Minus className="w-8 h-px text-primary/40" />
          </div>

          <h1 className="font-heading text-[8rem] md:text-[12rem] lg:text-[16rem] text-foreground leading-[0.8] tracking-tighter mb-12">
            Lost
          </h1>

          <p className="font-serif italic text-2xl text-foreground/60 mb-12 max-w-sm mx-auto leading-relaxed">
            {t.notFound.description}
          </p>
          
          <Link href="/">
            <button className="group relative px-12 py-5 bg-primary text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:scale-105 transition-all duration-700">
              <span className="relative z-10 flex items-center gap-4">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                {t.notFound.button}
              </span>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Signature */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 hidden md:block">
        <span className="font-heading text-xl">Dra. <span className="font-serif italic text-primary">Lore</span> López</span>
      </div>
    </div>
  );
}