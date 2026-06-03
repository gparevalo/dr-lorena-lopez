import { UnifiedSection } from "@/components/layout/UnifiedSection";
import { useLanguage } from "@/i18n";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

export default function TratamientoItem() {
  const { t } = useLanguage();
  const tp = t.tratamientosPage;

  return (
    <section className="bg-background">
      {tp.treatments.map((treatment: any, i: number) => {
        const isDark = i % 2 == 0;

        return (
          <UnifiedSection
            key={treatment.slug}
            dark={isDark}
            withGrid={false}
            className={cn(
              "py-20 md:py-32 relative overflow-hidden",
              isDark && "bg-primary", // negro más premium
            )}
          >
            <div
              className={cn(
                "max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
                isDark ? "text-[#EAE3D9]" : "text-foreground",
              )}
            >
              {/* BACKGROUND NUMBER */}
              <span className="absolute left-6 lg:left-10 top-10 text-[120px] md:text-[160px] font-heading text-black/5 select-none pointer-events-none">
                0{i + 1}
              </span>

              {/* TEXT BLOCK */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={cn(
                  "lg:col-span-6 space-y-8",
                  isDark ? "lg:order-2" : "",
                )}
              >
                {/* TAGLINE */}
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-px bg-primary/40" />
                  <span
                    className={cn(
                      "text-[10px] uppercase tracking-[0.4em] font-semibold",
                      isDark ? "text-primary/80" : "text-primary/70",
                    )}
                  >
                    {treatment.tagline}
                  </span>
                </motion.div>

                {/* TITLE */}
                <motion.h2
                  variants={fadeUp}
                  className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[0.95]"
                >
                  {treatment.name}
                </motion.h2>

                {/* SUMMARY */}
                <motion.p
                  variants={fadeUp}
                  className={cn(
                    "text-md  leading-relaxed     max-w-xl",
                    isDark ? "text-[#CBBBA0]" : "text-foreground/70",
                  )}
                >
                  {treatment.summary}
                </motion.p>

                {/* HIGHLIGHT */}
                <motion.p
                  variants={fadeUp}
                  className="text-lg uppercase tracking-[0.35em] text-primary font-medium"
                >
                  {treatment.highlight}
                </motion.p>

                {/* BENEFITS */}
                {treatment.benefits && (
                  <motion.ul
                    variants={fadeUp}
                    className={cn(
                      "space-y-2 text-sm leading-relaxed ",
                      isDark ? "text-[#A08D75]" : "text-foreground/70",
                    )}
                  >
                    {treatment.benefits
                      .slice(0, 3)
                      .map((b: string, idx: number) => (
                        <li key={idx}>• {b}</li>
                      ))}
                  </motion.ul>
                )}

                {/* CTA */}
                <motion.a
                  variants={fadeUp}
                  href={`/tratamientos/${treatment.slug}`}
                  className={cn(
                    "group inline-flex items-center gap-4 px-10 py-4 text-[11px] uppercase tracking-[0.4em] font-semibold transition-all duration-500",
                    isDark
                      ? "bg-[#EAE3D9] text-black hover:bg-primary hover:text-white"
                      : "bg-black text-white hover:bg-primary",
                  )}
                >
                  {tp.cta || "Ver tratamiento"}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </motion.a>
              </motion.div>

              {/* VISUAL BLOCK */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={cn(
                  "lg:col-span-6 relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden group",
                  isDark ? "lg:order-1" : "",
                )}
              >
                {/* IMAGE */}
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* VIDEO */}
                {treatment.video && (
                  <video
                    src={treatment.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 p-6 md:p-10 text-white">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/60">
                    Destacado
                  </span>
                  <p className="text-xs md:text-sm uppercase tracking-[0.25em] font-medium">
                    {treatment.highlight}
                  </p>
                </div>
              </motion.div>
            </div>
          </UnifiedSection>
        );
      })}
    </section>
  );
}
