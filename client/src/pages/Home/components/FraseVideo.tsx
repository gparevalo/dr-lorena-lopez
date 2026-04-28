import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function FraseVideo() {
  const { t } = useLanguage();

  return (
    <UnifiedSectionBlack
      id="philosophy"
      className="bg-primary relative flex items-center justify-center overflow-hidden h-[70vh]"
    >
      {/* Cinematic subtle grid on background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "60px 60px" }} />
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 -left-12 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp} className="mb-12 flex justify-center">
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
              <Quote className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          <motion.p 
            variants={fadeUp}
            className="font-serif italic font-medium text-white/90 leading-[1.3] mb-8"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {t.about.philosophy}
          </motion.p>
          
          <motion.p
            variants={fadeUp}
            className="font-heading text-secondary font-bold tracking-tighter"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            {t.about.philosophy2}
          </motion.p>
          
          <motion.div 
            variants={fadeUp} 
            className="mt-12 w-12 h-px bg-white/30 mx-auto"
          />
        </motion.div>
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary opacity-50 pointer-events-none" />
    </UnifiedSectionBlack>
  );
}
