import { useLanguage } from "@/i18n";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const numeric = parseInt(value.replace(/\D/g, ""));
    const suffix = value.replace(/[0-9]/g, "");

    let start = 0;
    const duration = 1200;
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
      className="font-heading font-bold text-5xl text-white mb-3 relative z-10"
    >
      {display}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

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
    <div className="bg-primary border-t border-white/10 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center max-w-6xl mx-auto px-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center relative"
          >
            {/* accent */}
            <span className="absolute -top-6 text-white/5 text-5xl font-heading tracking-widest select-none">
              {stat.accent}
            </span>

            {/* animated number */}
            <CountUp value={stat.number} />

            {/* label */}
            <span className="text-xs uppercase tracking-[0.35em] text-white/80 font-medium max-w-[180px]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
