import { useLanguage } from "@/i18n";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, X, ArrowRight } from "lucide-react";
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
    { href: "/doctora", label: t.nav.doctora },
    { href: "/galeria", label: t.nav.galeria }, 
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-[0.16, 1, 0.3, 1]",
        scrolled
          ? "bg-background/85 backdrop-blur-2xl border-b border-border/30 py-4"
          : "bg-transparent py-8",
      )}
    >
      <div className="max-w-[1500px] mx-auto px-8 lg:px-16 flex items-center justify-between">
        {/* LOGO: Cinematic Editorial Approach */}
        <Link href="/">
          <a className="group flex flex-col leading-none">
            <span
              className={cn(
                "font-heading text-2xl lg:text-3xl tracking-[-0.02em] transition-colors duration-700",
                scrolled || location !== "/" ? "text-foreground" : "text-white",
              )}
            >
              Dra. <span className="font-serif italic text-primary/80 lowercase">Lore</span> López
            </span>
            <span
              className={cn(
                "text-[7px] uppercase tracking-[0.6em] font-bold mt-1 transition-colors duration-700 opacity-60 font-accent",
                scrolled || location !== "/" ? "text-muted-foreground" : "text-white/70",
              )}
            >
              Medicina Estética avanzada
            </span>
          </a>
        </Link>

        {/* DESKTOP MENU: Wide & Breathable */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "relative py-2 font-accent text-[9px] uppercase tracking-[0.4em] font-medium transition-all duration-500",
                    location === item.href
                      ? "text-primary px-2"
                      : (scrolled || location !== "/" ? "text-foreground/70 hover:text-foreground" : "text-white/50 hover:text-white"),
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-700",
                      location === item.href ? "w-full" : "group-hover:w-full",
                    )}
                  />
                </a>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-8">
            {/* Language Toggle: Discrete */}
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className={cn(
                "group flex items-center gap-3 font-accent text-[9px] uppercase tracking-[0.3em] font-semibold transition-all duration-500",
                scrolled || location !== "/" ? "text-muted-foreground hover:text-foreground" : "text-white/30 hover:text-white",
              )}
            >
              <Globe className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              <span>{language === "en" ? "EN" : "ES"}</span>
            </button>

            {/* CTA: Concierge Style */}
            <Link href="/#contacto">
              <button
                className={cn(
                  "relative px-10 py-4 bg-primary text-white font-bold text-[9px] uppercase tracking-[0.5em] transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl shadow-primary/10",
                  !scrolled && location === "/" && "bg-white text-black hover:bg-primary hover:text-white"
                )}
              >
                {t.nav.agendar}
              </button>
            </Link>
          </div>
        </div>

        {/* MOBILE TRIGGER */}
        <button
          className={cn(
            "lg:hidden p-4 transition-all",
            scrolled || location !== "/" ? "text-foreground" : "text-white",
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU: Fullscreen Editorial Reveal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background lg:hidden pt-32 px-10"
          >
            <div className="flex flex-col h-full gap-8">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                >
                  <Link href={item.href}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between py-4"
                    >
                      <div className="flex flex-col">
                        <span className="font-accent text-[8px] text-primary/40 tracking-[0.4em] mb-2">0{idx + 1}</span>
                        <span className="font-heading text-5xl uppercase tracking-tight text-foreground transition-all duration-500 group-hover:italic group-hover:text-primary">
                          {item.label}
                        </span>
                      </div>
                      <ArrowRight className="w-8 h-8 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-primary" />
                    </a>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-auto pb-16 flex flex-col gap-10"
              >
                <button
                  onClick={() => {
                    setLanguage(language === "en" ? "es" : "en");
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-4 font-accent text-xs uppercase tracking-[0.4em] text-muted-foreground"
                >
                  <Globe className="w-4 h-4 text-primary" />
                  {language === "en" ? "Switch to Spanish" : "English Version"}
                </button>
                <Link href="/#contacto" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-8 bg-primary text-white text-[10px] uppercase tracking-[0.6em] font-bold shadow-2xl">
                    {t.nav.agendar}
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
