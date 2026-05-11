import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  title2?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imagePortada?: string;
  children?: ReactNode;
  className?: string;
  dark?: boolean;
}

export function PageHero({
  title,
  title2,
  subtitle,
  description,
  image,
  imagePortada,
  children,
  className,
  dark = true,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden",
        dark ? "bg-black text-white" : "bg-transparent text-black",
        className,
      )}
    >
      {/* Background with Depth */}
      <div className="absolute inset-0 z-0">
        {image && (
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}

        {/* Gradients & Blur */}
        <div
          className={cn(
            "absolute inset-0 z-1",
            dark
              ? "bg-gradient-to-b from-black/80 via-black/50 to-black"
              : "bg-gradient-to-b from-black/80 via-white/20 to-white",
          )}
        />

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="absolute inset-0 z-2 backdrop-blur-[1px]"
        />

        {/* Decorative elements */}
        {dark && (
          <>
            <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full translate-y-[-50%] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[60%] h-[400px] bg-primary/5 blur-[100px] rounded-full translate-y-[50%] pointer-events-none" />
          </>
        )}
      </div>

      {/* Content Container */}
      <div className="section-container relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {subtitle && (
            <motion.span
              variants={fadeUp}
              className="block font-bold text-[10px] uppercase tracking-[0.4em] text-white/[0.7] mb-6"
            >
              {subtitle}
            </motion.span>
          )}

          <motion.h1
            variants={fadeUp}
            className="font-heading text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] tracking-tight"
          >
            {title}
            {title2 && (
              <span className="font-serif italic text-primary font-bold -mt-4">
                {title2}
              </span>
            )}
          </motion.h1>

          {description && (
            <motion.p
              variants={fadeUp}
              className="    text-lg md:text-lg text-foreground/90 max-w-2xl leading-relaxed mb-12"
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {children && <motion.div variants={fadeUp}>{children}</motion.div>}
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${dark ? "#fff" : "#000"} 1px, transparent 1px),
            linear-gradient(to bottom, ${dark ? "#fff" : "#000"} 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 50% 50% at 50% 50%, #000 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 50% 50% at 50% 50%, #000 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
