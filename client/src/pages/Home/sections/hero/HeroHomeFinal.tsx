import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Crown, Flower } from "lucide-react";

export default function HeroHomeFinal() {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        relative
        h-[110vh]
        flex
        items-center
        overflow-hidden
        bg-black
      "
    >
      {/* ───────────────── BACKGROUND IMAGE ───────────────── */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-no-repeat
          bg-center 
        "
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      />

      {/* ───────────────── CONTENT ───────────────── */}
      <div
        className="
          relative
          z-20
          w-full
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-10
          py-28
        "
      >
        <div className="max-w-[760px]">
          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              inline-flex
              items-center
              gap-3
              mb-8
              rounded-full
              border
              border-primary/10
              bg-primary/25
              backdrop-blur-xl
              px-5
              py-2.5
            "
          >
            <Crown className="w-4 h-4 text-primary" />

            <p className="text-[10px] sm:text-xs tracking-[0.28em] uppercase text-primary/80 font-bold">
              {t.hero.label}
            </p>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-center
              md:text-left
              leading-[0.92]
              tracking-[-0.06em]
              
              max-w-[550px]
            "
          >
            <span
              className="
                block
                text-8xl 
                font-primary
              "
            >
              {t.hero.headline_1}
            </span>

            <span
              className="
                block
                italic
                font-serif
                text-primary
                text-8xl
              "
            >
              {t.hero.headline_2}
            </span>

            <span
              className="
                block
                font-serif
                text-8xl 
              "
            >
              {t.hero.headline_3}
            </span>
          </motion.h1>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="
              mt-14              flex
              flex-col
              sm:flex-row
              items-center
              md:items-start
              gap-4
            "
          >
            {/* PRIMARY CTA */}{" "}
            <a
              href="https://wa.me/593980163009"
              target="_blank"
              rel="noopener"
              className="w-full sm:w-auto"
            >
              <button
                className="
                  group
                  relative
                  overflow-hidden
                  w-full
                  sm:w-auto
                  h-14
                  px-8
                  rounded-full
                  bg-primary
                  text-white
                  uppercase
                  text-xs
                  font-black
                  tracking-[0.22em]
                  shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                  transition-all
                  hover:scale-[1.02]
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                {/* SHINE EFFECT */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    bg-gradient-to-r
                    from-white/0
                    via-white/20
                    to-white/0
                    translate-x-[-100%]
                    group-hover:translate-x-[100%]
                    duration-1000
                  "
                />

                <CalendarDays className="w-4 h-4 relative z-10" />

                <span className="relative z-10">{t.hero.cta_primary}</span>
              </button>
            </a>
            {/* SECONDARY CTA */}
            <Button
              asChild
              variant="ghost"
              className="
                group
                w-full
                sm:w-auto
                justify-center
                md:justify-start
                text-primary
                hover:bg-transparent
                px-2
                h-14
              "
            >
              <a
                href="#proceso"
                className="
                  flex
                  items-center
                  gap-3
                  uppercase
                  text-[11px]
                  font-bold
                  tracking-[0.24em]
                "
              >
                {t.hero.cta_secondary}

                <ArrowRight
                  className="
                    w-4
                    h-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </Button>
          </motion.div>

          {/* PREMIUM INFO STRIP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="
              mt-14
              flex
              flex-col
              sm:flex-row
              items-center
              sm:items-start
              gap-6
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
                rounded-3xl
                border
                border-white/10
                bg-primary/5
                backdrop-blur-xl
                px-6
                py-4
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-[#8B5E3C]/25
                  flex
                  items-center
                  justify-center
                "
              >
                <Flower className="w-5 h-5 text-primary" />
              </div>

              <div className="text-center sm:text-left">
                <p className=" font-semibold text-sm">
                  Medicina estética avanzada
                </p>

                <p className="text-primary/50 text-xs mt-1 uppercase tracking-[0.18em]">
                  Protocolos personalizados
                </p>
              </div>
            </div>

            <div
              className="
                flex
                items-center
                gap-4
                rounded-3xl
                border
                border-white/10
                bg-primary/5
                backdrop-blur-xl
                px-6
                py-4
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                "
              >
                <CalendarDays className="w-5 h-5 text-primary" />
              </div>

              <div className="text-center sm:text-left">
                <p className=" font-semibold text-sm">
                  Valoración especializada
                </p>

                <p className="text-primary/50 text-xs mt-1 uppercase tracking-[0.18em]">
                  Agenda disponible online
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
