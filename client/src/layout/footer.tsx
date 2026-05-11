import { useLanguage } from "@/i18n";
import logo_header_white from "@assets/images/logo_verde-removebg-preview.png";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/tratamientos", label: t.nav.tratamientos },
    { href: "/doctora", label: t.nav.doctora },
    { href: "/galeria", label: t.nav.galeria }, 
    { href: "/consulta", label: t.nav.agendar },
  ];

  return (
    <footer className="relative bg-black/[0.9] text-white overflow-hidden py-6 px-6 lg:px-10">
    

      <div className="max-w-6xl mx-auto relative z-10 ">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-10 mt-10">
          {/* BRAND */}
          <motion.div className="lg:col-span-4 text-start">
            <Link href="/">
              <a className="flex flex-col leading-none">
                <img
                  src={logo_header_white}
                  className="h-8 md:h-20 w-full object-cover"
                />
              </a>
            </Link>
 
            <p className="mt-8 text-white/40 text-lg leading-relaxed font-light italic border-l border-primary/30 pl-6 max-w-md">
              {t.footer.tagline}
            </p>

            <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 border border-white/10 bg-white/[0.03]">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">
                {t.footer.trusted_label}
              </span>
            </div>
          </motion.div>

          {/* NAV */}
          <motion.div className="lg:col-span-5">
            <h4 className="text-primary text-[11px] uppercase tracking-[0.3em] font-semibold mb-10">
              {t.footer.architect_label}
            </h4>

            <div className="grid grid-cols-2 gap-y-5 gap-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-3 text-white/50 hover:text-white transition text-[13px] tracking-[0.15em]"
                >
                  <span className="w-1.5 h-1.5 bg-primary/30 group-hover:bg-primary transition" />
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* SOCIAL */}
          <motion.div className="lg:col-span-3">
            <h4 className="text-primary text-[11px] uppercase tracking-[0.3em] font-semibold mb-10">
              {t.footer.ecosystem_label}
            </h4>

            <div className="flex flex-col gap-5">
              {["Instagram", "Facebook"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="group flex items-center justify-between text-white/50 hover:text-white transition text-[13px] tracking-[0.15em]"
                >
                  {platform}
                  <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition" />
                </a>
              ))}

              <a
                href="#"
                className="group flex items-center justify-between text-white/50 hover:text-white transition text-[13px] tracking-[0.15em]"
              >
                {t.footer.privacy_protocol}
                <ShieldCheck className="w-4 h-4 text-white/20 group-hover:text-primary transition" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[11px] tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Dra. Lore López — {t.footer.rights}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-white/30 text-[10px] uppercase tracking-[0.25em]">
              {t.footer.designed_by}
            </span>
            <div className="w-10 h-px bg-white/10 group-hover:w-20 transition-all duration-700" />
          </div>
        </div>
      </div>
    </footer>
  );
}
