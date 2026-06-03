import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

import { Link } from "wouter";
interface PageHeroTreatmentProps {
  title: string;
  title2?: string;
  subtitle?: string;
  description?: string;
  back?: string;
  image?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function PageHeroTreatment({
  title,
  title2,
  subtitle,
  back,
  description,
  image,
  children,
}: PageHeroTreatmentProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden h-[50vh] md:h-[55vh] pb-20 mt-2 md:pt-[16vh] md:pb-28  bg-white text-black pl-10 md:pl-20",
      )}
    >
      {/* ───────────────── BACKGROUND IMAGE ───────────────── */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-left md:bg-center pointer-events-none"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      )}

      {/* ───────────────── CONTENT ───────────────── */}
      <div className="relative z-10 w-full max-w-2xl px-0 pr-5 ">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto flex flex-col items-center text-center md:items-start md:text-left md:mx-0"
        >
          {/* ───────────────── LABEL ───────────────── */}
          {subtitle && (
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 mb-7"
            >
              <span className="w-10 h-px bg-primary/50" />

              <span className="text-sm uppercase tracking-[0.35em] font-bold text-primary/60">
                {subtitle}
              </span>
            </motion.div>
          )}

          {/* ───────────────── TITLE ───────────────── */}

          <motion.h2
            variants={fadeUp}
            className="font-heading mb-4 text-black leading-none tracking-tighter"
          >
            {title}

            {title2 && (
              <span className="block mt-1 font-serif italic text-primary text-5xl sm:text-6xl lg:text-7xl">
                {title2}
              </span>
            )}
          </motion.h2>

          {/* ───────────────── DESCRIPTION ───────────────── */}
          {description && (
            <motion.p
              variants={fadeUp}
              className="flex flex-col items-center text-center md:items-start md:text-left md:mx-0 text-black text-lg leading-relaxed mx-auto mb-0"
            >
              {description}
            </motion.p>
          )}

          <div className="text-end flex justify-end">
            <Link
              href="/tratamientos"
              className="inline-flex items-center gap-3 text-primary hover:text-black transition-all text-sm uppercase tracking-[0.25em] font-bold mt-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Ver todos los tratamientos
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ───────────────── BOTTOM FADE ───────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/90 to-transparent z-10" />
    </section>
  );
}
