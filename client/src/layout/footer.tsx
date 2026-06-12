import { useLanguage } from "@/i18n";
import logo_header_white from "@assets/images/logo_header_white.png";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Instagram,
  Facebook,
  Flower2,
  Heart,
  Sparkles,
} from "lucide-react";

import { Link } from "wouter";

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/tratamientos", label: t.nav.tratamientos },
    { href: "/longevilift", label: t.nav.longevilift },
    { href: "/consulta", label: t.nav.agendar },
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-primary
        text-[#f7efe8]
      "
    >
      {/* ───────────────── TOP FADE ───────────────── */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/20 to-transparent z-10" />

      {/* ───────────────── AMBIENT GLOWS ───────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* LEFT GLOW */}
        <div
          className="
            absolute
            -top-40
            left-[-10%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-white/10
            blur-[140px]
          "
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute
            bottom-[-240px]
            right-[-10%]
            w-[420px]
            h-[420px]
            rounded-full
            bg-[#f8d7bb]/10
            blur-[140px]
          "
        />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* ───────────────── CONTENT ───────────────── */}
      <div
        className="
          relative
          z-20
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-10
          pt-24
          pb-10
        "
      >
        {/* ───────────────── TOP GRID ───────────────── */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-16
            lg:gap-10
          "
        >
          {/* ───────────────── BRAND ───────────────── */}
          <motion.div
            className="
              lg:col-span-5
              flex
              flex-col
              items-center
              lg:items-start
              text-center
              lg:text-left
            "
          >
            <Link href="/">
              <a className="group">
                <img
                  src={logo_header_white}
                  alt="Logo"
                  className="
                    h-16
                    sm:h-20
                    w-auto
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-[1.02]
                  "
                />
              </a>
            </Link>

            <p
              className="
                mt-8
                text-[#f5e6d9]/75
                text-base
                sm:text-lg
                leading-relaxed
                font-light
                max-w-md
              "
            >
              {t.footer.tagline}
            </p>

            {/* LUXURY BADGE */}
            <div
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.06]
                backdrop-blur-xl
                px-5
                py-3
                shadow-[0_10px_40px_rgba(0,0,0,0.12)]
              "
            >
              <Flower2 className="w-4 h-4 text-[#ffe7d0]" />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.28em]
                  text-[#f7efe8]/80
                  font-medium
                "
              >
                Medicina estética avanzada
              </span>
            </div>
          </motion.div>

          {/* ───────────────── NAVIGATION ───────────────── */}
          <motion.div
            className="
              lg:col-span-3
              flex
              flex-col
              items-center
              lg:items-start
            "
          >
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-4 h-4 text-[#ffe7d0]" />

              <h4
                className="
                  text-[#ffe7d0]
                  text-[11px]
                  uppercase
                  tracking-[0.35em]
                  font-bold
                "
              >
                Navegación
              </h4>
            </div>

            <div
              className="
                flex
                flex-col
                items-center
                lg:items-start
                gap-5
              "
            >
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      text-[#f7efe8]/70
                      hover:text-white
                      transition-all
                      duration-300
                      text-sm
                      tracking-[0.18em]
                      uppercase
                    "
                  >
                    <span
                      className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-[#ffe7d0]/40
                        group-hover:bg-white
                        transition
                      "
                    />

                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* ───────────────── CONTACT ───────────────── */}
          <motion.div
            className="
              lg:col-span-4
              flex
              flex-col
              items-center
              lg:items-start
            "
          >
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-4 h-4 text-[#ffe7d0]" />

              <h4
                className="
                  text-[#ffe7d0]
                  text-[11px]
                  uppercase
                  tracking-[0.35em]
                  font-bold
                "
              >
                Contacto
              </h4>
            </div>

            <div className="flex flex-col gap-5 w-full max-w-[280px]">
              <a
                href="https://www.instagram.com/dralorenalopez.medico/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-4
                  text-[#f7efe8]/75
                  hover:bg-white/[0.07]
                  hover:text-white
                  transition-all
                "
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4" />
                  <span className="text-sm tracking-[0.12em] uppercase">
                    Instagram
                  </span>
                </div>

                <ArrowUpRight
                  className="
                    w-4
                    h-4
                    opacity-40
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    transition-all
                  "
                />
              </a>

              <a
                href="https://www.facebook.com/share/17kvYvn671/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-4
                  text-[#f7efe8]/75
                  hover:bg-white/[0.07]
                  hover:text-white
                  transition-all
                "
              >
                <div className="flex items-center gap-3">
                  <Facebook className="w-4 h-4" />

                  <span className="text-sm tracking-[0.12em] uppercase">
                    Facebook
                  </span>
                </div>

                <ArrowUpRight
                  className="
                    w-4
                    h-4
                    opacity-40
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    transition-all
                  "
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ───────────────── DIVIDER ───────────────── */}
        <div
          className="
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            my-14
          "
        />

        {/* ───────────────── BOTTOM ───────────────── */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >
          {/* COPYRIGHT */}
          <p
            className="
              text-[#f7efe8]/50
              text-[10px]
              sm:text-[11px]
              uppercase
              tracking-[0.22em]
              text-center
              md:text-left
            "
          >
            © {new Date().getFullYear()} Dra. Lore López — {t.footer.rights}
          </p>

          {/* PD AGENCIA */}
          <a
            href="https://pdagencia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-2
              text-[#f7efe8]/45
              hover:text-white
              transition-all
            "
          >
            <span className="text-[11px] tracking-[0.12em]">Hecho con</span>

            <Heart
              className="
                w-3.5
                h-3.5
                text-[#ffe7d0]
                fill-[#ffe7d0]
                group-hover:scale-110
                transition-transform
              "
            />

            <span className="text-[11px] tracking-[0.12em]">por</span>

            <span
              className="
                text-[11px]
                tracking-[0.18em]
                uppercase
                text-white/80
                group-hover:text-white
                transition-colors
              "
            >
              PD Agencia
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
