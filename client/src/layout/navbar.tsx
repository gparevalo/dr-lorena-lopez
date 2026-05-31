import { useLanguage } from "@/i18n";
import { cn } from "@/lib/utils";
import logo_header from "@assets/images/logo_verde-removebg-preview.png";
import logo_header_white from "@assets/images/logo_verde-removebg-preview.png";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/tratamientos", label: t.nav.tratamientos }, 
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/30 py-4"
          : "bg-gradient-to-b from-black/60 via-black/40 to-transparent py-6",
      )}
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <a className="flex flex-col leading-none">
            <img
              src={scrolled ? logo_header : logo_header_white}
              className="h-8 md:h-14 w-auto object-contain"
            />
          </a>
        </Link>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "relative py-2 font-bold text-[11px] uppercase tracking-[0.25em] transition-all duration-300",
                    location === item.href
                      ? "text-primary"
                      : scrolled
                        ? "text-foreground/80 hover:text-foreground"
                        : "text-white/80 hover:text-white",
                  )}
                >
                  {item.label}

                  {/* underline */}
                  <span
                    className={cn(
                      "absolute left-0 -bottom-1 h-px bg-primary transition-all duration-500",
                      location === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full",
                    )}
                  />
                </a>
              </Link>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6">
            {/* CTA */}
            <a href="/consulta">
              <button
                className="
    px-8
    h-14
    bg-primary
    text-white
    uppercase
    tracking-[0.25em]
    text-xs
    font-bold
    rounded-full
    shadow-xl
    hover:scale-[1.02]
    transition-all
    w-full
    sm:w-auto
    flex
    items-center
    justify-center
    gap-3
  "
              >
                <CalendarDays className="w-4 h-4" />
                {t.nav.agendar}
              </button>
            </a>

            {/* Language */}
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className={cn(
                "flex font-bold items-center gap-2 text-[11px] uppercase tracking-[0.25em]",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/70 hover:text-white",
              )}
            >
              <Globe className="w-3 h-3" />
              {language === "en" ? "EN" : "ES"}
            </button>
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className={cn(
            "lg:hidden p-3",
            scrolled || location !== "/" ? "text-foreground" : "text-white",
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden pt-24 px-6"
          >
            <div className="flex flex-col h-full">
              {/* LINKS */}
              <div className="flex flex-col gap-6">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Link href={item.href}>
                      <a
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between py-3 border-b border-border/30"
                      >
                        <span className="font-heading text-xl uppercase tracking-[0.08em] text-foreground">
                          {item.label}
                        </span>
                        <ArrowRight className="w-5 h-5 text-primary opacity-70" />
                      </a>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* FOOTER */}
              <div className="mt-auto pb-10 flex flex-col gap-6">
                <button
                  onClick={() => {
                    setLanguage(language === "en" ? "es" : "en");
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
                >
                  <Globe className="w-4 h-4 text-primary" />
                  {language === "en" ? "ES" : "EN"}
                </button>

                <a href="/consulta">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 bg-primary text-white text-[11px] uppercase tracking-[0.3em] font-semibold"
                  >
                    {t.nav.agendar}
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
