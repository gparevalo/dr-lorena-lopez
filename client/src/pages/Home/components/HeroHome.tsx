import { useLanguage } from "@/i18n";
import heroImg from "@assets/images/6.png";
import { motion } from "framer-motion";

export default function HeroHome() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[100vh] bg-white overflow-hidden">
 
      {/* ─── HEADER / TITULO ─── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-[12%] md:top-[14%] lg:top-[14%] left-0 w-full flex justify-center z-20 px-6"
      >
        <div className="text-center max-w-2xl ">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-bold">
            {t.hero.label}
          </p>
          <h1 className="font-heading text-6xl sm:text-7xl md:text-6xl lg:text-8xl  text-black flex flex-col gap-0 leading-none tracking-[-0.03em]">
            <span>{t.hero.headline_1}</span>

            <span className="font-serif italic text-primary font-bold -mt-4">
              {t.hero.headline_2}
            </span>

            <span className="font-serif  -mt-2">{t.hero.headline_3}</span>
          </h1>
        </div>
      </motion.div>

      {/* ─── LEFT FLOAT (DESKTOP) ─── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className=" hidden md:block absolute top-[30%] md:top-[50%] lg:top-[60%] left-[6%] max-w-md md:max-w-xs text-left z-20"
      >
        <p className="text-black/60 text-md leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="mt-6">
          <p className="text-3xl font-bold">450+</p>
          <p className="text-black/50 text-sm">Clientes atendidos</p>
        </div>
      </motion.div>

      {/* ─── RIGHT FLOAT (DESKTOP) ─── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="   lg:block absolute top-[52%] md:top-[50%] lg:top-[60%] left-[6%]  right-[6%] text-right z-20"
      >
        <div className="flex justify-end gap-1 text-primary text-lg">
          ★ ★ ★ ★ ★
        </div>

        <div className="mt-2">
          <p className="text-3xl font-bold">14+ Años</p>
          <p className="text-black/50 text-sm">Experiencia médica</p>
        </div>
      </motion.div>

      {/* ─── CENTER VISUAL ─── */}
      <div className="absolute  lg:bottom-0 bottom-[0%] md:left-1/2 md:-translate-x-1/2 flex items-end justify-center">
        {/* SHAPE */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute bottom-0  overflow-hidden"
        >
          <div
            className="
            w-[430px] h-[170px]
            sm:w-[620px] sm:h-[320px]
            md:w-[680px] md:h-[300px]
            lg:w-[650px] lg:h-[290px]
            bg-primary rounded-t-full
            shadow-[0_-20px_60px_rgba(0,0,0,0.08)]
          "
          />
        </motion.div>

        {/* IMAGE */}
        <motion.img
          src={heroImg}
          alt="Doctora"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
            relative z-10 
            h-[460px]   sm:h-[600px]  md:h-[600px] lg:h-[600px] 
            w-full object-cover
          "
        />
      </div>

      {/* ─── CTA (GLASS / LUXURY) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="
    absolute 
    bottom-[2%] sm:bottom-[5%] md:bottom-[5%] lg:bottom-[5%]
    left-0 w-full
    flex flex-col sm:flex-row 
    justify-center items-center
    gap-4
    z-30
  "
      >
        <a href="#contacto">
          <button
            className="
            px-6 py-3 
            bg-white text-primary 
            text-[11px] uppercase tracking-[0.3em] font-semibold
            backdrop-blur-md
            shadow-md hover:shadow-xl 
            transition duration-300
          "
          >
            {t.hero.cta_primary}
          </button>
        </a>

        <a href="#proceso">
          <button
            className="
            px-6 py-3 
            border border-white/60 
            text-white 
            text-[11px] uppercase tracking-[0.3em] font-semibold
            backdrop-blur-md
            hover:bg-white hover:text-primary 
            transition duration-300
          "
          >
            {t.hero.cta_secondary}
          </button>
        </a>
      </motion.div>
    </section>
  );
}
