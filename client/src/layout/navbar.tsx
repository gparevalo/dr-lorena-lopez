import { useLanguage } from "@/i18n";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
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

  const navItems = [{ href: "/", label: t.nav.home }];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-[hsl(35,28%,97%)]/95 backdrop-blur-xl border-b border-[hsl(35,18%,87%)] py-4 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent border-b border-transparent py-7",
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent transition-opacity duration-1000",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex items-center justify-between">
        <Link href="/" className="group relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col leading-tight"
          >
            <span
              className={cn(
                "font-serif text-xl font-bold tracking-tight transition-colors duration-500",
                scrolled ? "text-foreground" : "text-white",
              )}
            >
              Dra. Lore López
            </span>
            <span
              className={cn(
                "text-[9px] uppercase tracking-[0.28em] font-medium mt-0.5 transition-colors duration-500",
                scrolled ? "text-muted-foreground" : "text-white/55",
              )}
            >
              Médico · Cirugía · Láser
            </span>
          </motion.div>
        </Link>

        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative group py-2 text-[10px] uppercase tracking-[0.35em] font-semibold transition-all duration-500",
                  location === item.href
                    ? scrolled
                      ? "text-primary"
                      : "text-white"
                    : scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/55 hover:text-white",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-full h-px bg-primary transform origin-right transition-transform duration-500",
                    location === item.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button
              data-testid="button-language-toggle"
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className={cn(
                "group flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] font-semibold transition-all duration-500",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/50 hover:text-white",
              )}
            >
              <Globe className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
              <span>{language.toUpperCase()}</span>
            </button>

            <a href="#contacto">
              <button
                data-testid="button-nav-cta"
                className="px-7 py-2.5 bg-primary text-white text-[10px] uppercase tracking-[0.3em] font-semibold hover:bg-primary/80 transition-all duration-500"
              >
                {t.nav.agendar}
              </button>
            </a>
          </div>
        </div>

        <button
          data-testid="button-mobile-menu"
          className={cn(
            "lg:hidden w-10 h-10 flex items-center justify-center border transition-all",
            scrolled
              ? "text-foreground border-border hover:border-primary/40"
              : "text-white border-white/20 hover:border-white/50",
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <X key="x" size={18} className="text-primary" />
            ) : (
              <Menu key="menu" size={18} />
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 w-full h-screen bg-[hsl(35,28%,97%)] z-40 lg:hidden"
          >
            <div className="flex flex-col h-full pt-28 px-10 pb-10 justify-between">
              <div className="flex flex-col gap-6">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 text-4xl font-serif font-bold text-foreground hover:text-primary transition-colors"
                    >
                      <span className="text-xs font-mono text-muted-foreground">
                        0{idx + 1}
                      </span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-8 border-t border-border flex flex-col gap-5"
              >
                <button
                  onClick={() => setLanguage(language === "en" ? "es" : "en")}
                  className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] font-semibold text-muted-foreground"
                >
                  <Globe className="w-4 h-4 text-primary" />
                  {t.nav.language_toggle}
                </button>

                <a href="#contacto" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-4 bg-primary text-white text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-primary/80 transition-all">
                    {t.nav.agendar}
                  </button>
                </a>
              </motion.div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-8 w-11 h-11 border border-border flex items-center justify-center text-primary"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
