import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  title2?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function PageHero({
  title,
  title2,
  subtitle,
  description,
  image,
  children,
  className,
  align = "left",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        `
      relative
      overflow-hidden
      h-[60vh] 
    md:h-[80vh] 
      pt-24
      pb-20
      mt-2
      md:pt-[20vh]
      md:pb-28
      md:mt-20
      bg-white
      text-black
      pl-10
      md:pl-20
    `,
      )}
    >
      {/* ───────────────── BACKGROUND IMAGE ───────────────── */}
      {image && (
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-no-repeat
            bg-left 
            md:bg-center
            pointer-events-none
            bg-center 
          "
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      )}

      {/* ───────────────── CONTENT ───────────────── */}
      <div
        className="
    relative
    z-10
    w-full
    max-w-2xl 
    px-0
    pr-5
    sm:px-6
    lg:px-10
  "
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className={cn(
            "max-w-4xl mx-auto flex flex-col items-center text-center md:items-start md:justify-start md:text-start",
          )}
        >
          {/* ───────────────── LABEL ───────────────── */}
          {subtitle && (
            <motion.div
              variants={fadeUp}
              className="
                inline-flex
                items-center
                gap-3
                mb-7
              "
            >
              <span className="w-10 h-px bg-primary/50" />

              <span
                className="
                  text-sm
                  uppercase
                  tracking-[0.35em]
                  font-bold
                  text-primary/60
                "
              >
                {subtitle}
              </span>
            </motion.div>
          )}

          {/* ───────────────── TITLE ───────────────── */}

          <motion.h2
            variants={fadeUp}
            className="font-heading mb-10 text-black leading-none tracking-tighter "
          >
            {title}

            {title2 && (
              <span
                className="
                  block
                  mt-1
                  font-serif
                  italic
                  text-primary
                  text-5xl
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                {title2}
              </span>
            )}
          </motion.h2>

          {/* ───────────────── DESCRIPTION ───────────────── */}
          {description && (
            <motion.p
              variants={fadeUp}
              className="text-black text-lg leading-relaxed mx-auto mb-6"
            >
              {description}
            </motion.p>
          )}

          {/* ───────────────── EXTRA CONTENT ───────────────── */}
          {children && (
            <motion.div variants={fadeUp} className="mt-12">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* ───────────────── BOTTOM FADE ───────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/90 to-transparent z-10" />
    </section>
  );
}
