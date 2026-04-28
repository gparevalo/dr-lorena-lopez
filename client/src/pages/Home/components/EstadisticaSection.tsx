import { useLanguage } from "@/i18n";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";

function CountUp({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const numeric = parseInt(value.replace(/\D/g, ""));
    const suffix = value.replace(/[0-9]/g, "");

    let start = 0;
    const duration = 1500;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = numeric / steps;

    const interval = setInterval(() => {
      start += increment;

      if (start >= numeric) {
        clearInterval(interval);
        setDisplay(value);
      } else {
        setDisplay(Math.floor(start) + suffix);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <span
      ref={ref}
      className="font-heading font-bold text-5xl md:text-6xl text-white mb-4 relative z-10"
    >
      {display}
    </span>
  );
}

export default function EstadisticaSection() {
  const { t } = useLanguage();

  const stats = [
    {
      number: "15+",
      label: "Años de excelencia médica",
      accent: "experiencia",
    },
    {
      number: "5000+",
      label: "Transformaciones realizadas",
      accent: "pacientes",
    },
    {
      number: "100%",
      label: "Protocolos personalizados",
      accent: "exclusividad",
    },
  ];

  return (
    <div className="bg-primary relative overflow-hidden">
      {/* Cinematic subtle grid on background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      
      <div className="section-container section-spacing relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16 text-center"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-center relative"
            >
              {/* accent background label */}
              <span className="absolute top-0 text-white/5 text-2xl md:text-5xl font-heading tracking-widest select-none uppercase -translate-y-1/2">
                {stat.accent}
              </span>

              {/* animated number */}
              <CountUp value={stat.number} />

              {/* label */}
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/70 font-semibold max-w-[200px] leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
