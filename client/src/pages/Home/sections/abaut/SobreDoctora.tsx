import { UnifiedSection } from "@/components/layout/UnifiedSection";
import { useLanguage } from "@/i18n";
import { fadeUp, revealRight, staggerContainer } from "@/lib/animations";
import imgDr from "@assets/images/hero.png";
import { motion } from "framer-motion";
import LuxuryLabel from "../../components/LuxuryLabel";

export default function SobreDoctora() {
  const { t } = useLanguage();

  return (
    <UnifiedSection id="doctora" dark={false} withGlow={true}>
      <div className="editorial-grid items-center gap-12 lg:gap-24">
        {/* ───────────────── LEFT CONTENT ───────────────── */}
        <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <LuxuryLabel>{t.about.label}</LuxuryLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="
                font-heading
                text-foreground
                leading-[0.9]
                tracking-tight
                mb-8
              "
              style={{ fontSize: "var(--text-6xl)" }}
            >
              {t.about.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                font-serif
                italic
                font-medium
                text-xl
                md:text-2xl
                text-primary
                mb-10
              "
            >
              {t.about.specialty}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="
                space-y-6
                text-foreground/70
                text-lg
                leading-relaxed
                mb-12
              "
            >
              <p>{t.about.bio_1}</p>

              <p className="opacity-70 font-light">
                {t.about.bio_2}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-6
                border-t
                border-black/5
                pt-10
              "
            >
              {t.about.credentials.map((c: string, i: number) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2 flex-shrink-0" />

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      font-bold
                      opacity-80
                    "
                  >
                    {c}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ───────────────── RIGHT IMAGE ───────────────── */}
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            variants={revealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              relative
              aspect-[4/5]
              w-full
              max-w-[520px]
              overflow-hidden
              bg-ivory
              group
            "
          >
            <img
              src={imgDr}
              alt="Dra. Lore López"
              className="
                w-full
                h-full
                object-cover
                grayscale-[0.15]
                group-hover:grayscale-0
                transition-all
                duration-1000
                scale-105
                group-hover:scale-100
              "
            />

            {/* Cinematic overlays */}
            <div className="absolute inset-0 border border-black/5" />
            <div className="absolute inset-8 border border-white/20" />

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 hidden lg:block" />

            <div className="absolute top-1/2 -left-4 w-12 h-px bg-primary/40 hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </UnifiedSection>
  );
}