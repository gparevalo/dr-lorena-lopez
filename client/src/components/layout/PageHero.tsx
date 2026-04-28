import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, staggerContainer, fadeIn } from "@/lib/animations";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  children?: ReactNode;
  className?: string;
  dark?: boolean;
}

export function PageHero({
  title,
  subtitle,
  description,
  image,
  children,
  className,
  dark = true,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden",
        dark ? "bg-black text-white" : "bg-white text-black",
        className
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
        <div className={cn(
          "absolute inset-0 z-1",
          dark ? "bg-gradient-to-b from-black/80 via-black/40 to-black" : "bg-gradient-to-b from-white/80 via-white/40 to-white"
        )} />
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="absolute inset-0 z-2 backdrop-blur-[2px]"
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
              className="block font-heading text-[10px] uppercase tracking-[0.4em] text-primary mb-6"
            >
              {subtitle}
            </motion.span>
          )}

          <motion.h1
            variants={fadeUp}
            className="font-heading text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] tracking-tight"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={fadeUp}
              className="font-serif italic text-xl md:text-2xl text-foreground/70 max-w-2xl leading-relaxed mb-12"
            >
              {description}
            </motion.p>
          )}

          {children && (
            <motion.div variants={fadeUp}>
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${dark ? '#fff' : '#000'} 1px, transparent 1px),
            linear-gradient(to bottom, ${dark ? '#fff' : '#000'} 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
