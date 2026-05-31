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
      min-h-[70vh] 
      pt-36
      pb-20
      md:pt-44
      md:pb-28
      bg-[#1E140F]
      text-white
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
            bg-center
            scale-[1.02]
          "
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      )}

      {/* ───────────────── CINEMATIC BROWN SHADOW ───────────────── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(24, 15, 10, 0.94) 0%,
              rgba(44, 29, 20, 0.90) 18%,
              rgba(66, 45, 31, 0.78) 34%,
              rgba(90, 64, 45, 0.46) 48%,
              rgba(90, 64, 45, 0.14) 58%,
              rgba(90, 64, 45, 0.00) 70%
            )
          `,
        }}
      />

      {/* MOBILE EXTRA OVERLAY */}
      <div className="absolute inset-0 bg-black/35 md:hidden z-0" />

      {/* ───────────────── SOFT GLOWS ───────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* TOP LEFT GLOW */}
        <div
          className="
            absolute
            top-[-180px]
            left-[-120px]
            w-[420px]
            h-[420px]
            rounded-full
            bg-primary/15
            blur-[120px]
          "
        />

        {/* BOTTOM RIGHT GLOW */}
        <div
          className="
            absolute
            bottom-[-220px]
            right-[-100px]
            w-[380px]
            h-[380px]
            rounded-full
            bg-[#C6A27E]/10
            blur-[120px]
          "
        />
      </div>

      {/* ───────────────── GRID TEXTURE ───────────────── */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ───────────────── CONTENT ───────────────── */}
      <div
        className="
    relative
    z-10
    w-full
    max-w-[50vw]
    px-5
    sm:px-6
    lg:px-10
  "
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className={cn(
            "max-w-4xl",
            align === "center" &&
              "mx-auto flex flex-col items-center text-center",
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
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  font-bold
                  text-white/60
                "
              >
                {subtitle}
              </span>
            </motion.div>
          )}

          {/* ───────────────── TITLE ───────────────── */}
          <motion.h1
            variants={fadeUp}
            className={cn(
              `
                leading-[0.92]
                tracking-[-0.05em]
              `,
              align === "center" ? "text-center" : "text-left",
            )}
          >
            <span
              className="
                block
                text-5xl
                sm:text-6xl
                lg:text-7xl
                font-black
              "
            >
              {title}
            </span>

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
          </motion.h1>

          {/* ───────────────── DESCRIPTION ───────────────── */}
          {description && (
            <motion.p
              variants={fadeUp}
              className={cn(
                `
                  mt-8
                  max-w-2xl
                  text-base
                  md:text-lg
                  leading-relaxed
                  text-white/70
                `,
                align === "center" && "text-center",
              )}
            >
              {description}
            </motion.p>
          )}

          {/* ───────────────── DECORATIVE LINE ───────────────── */}
          <motion.div
            variants={fadeUp}
            className="
              mt-10
              flex
              items-center
              gap-4
            "
          >
            <div className="w-16 h-px bg-primary/40" />

            <div className="w-2 h-2 rounded-full bg-primary/60" />

            <div className="w-24 h-px bg-primary/15" />
          </motion.div>

          {/* ───────────────── EXTRA CONTENT ───────────────── */}
          {children && (
            <motion.div variants={fadeUp} className="mt-12">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* ───────────────── TOP FADE ───────────────── */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#664c39]/40 to-transparent z-10" />

      {/* ───────────────── BOTTOM FADE ───────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/30 to-transparent z-10" />
    </section>
  );
}
