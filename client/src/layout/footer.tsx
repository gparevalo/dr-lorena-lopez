import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[hsl(25,20%,10%)] border-t border-white/5 py-16 px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[80%] aspect-square bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 mb-12">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <p className="font-serif text-2xl font-bold text-white tracking-tight">
                Dra. Lore López
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-1 font-medium">
                {t.footer.specialty}
              </p>
            </div>

            <p className="text-white/45 max-w-sm text-base leading-relaxed font-light italic border-l border-primary/20 pl-5 mb-8">
              {t.footer.tagline}
            </p>

            <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-white/8 bg-white/[0.03]">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-[9px] uppercase tracking-[0.35em] font-semibold text-white/45">
                {t.footer.trusted_label}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h4 className="text-primary text-[10px] uppercase tracking-[0.55em] font-semibold mb-7">
              {t.footer.architect_label}
            </h4>

            <div className="flex flex-col gap-4">
              {[{ href: "/", label: t.nav.home }].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-3 text-white/35 hover:text-white transition-all duration-400 text-[11px] uppercase tracking-[0.3em] font-semibold"
                >
                  <span className="w-1.5 h-1.5 bg-primary/25 group-hover:bg-primary transition-colors" />
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h4 className="text-primary text-[10px] uppercase tracking-[0.55em] font-semibold mb-7">
              {t.footer.ecosystem_label}
            </h4>

            <div className="flex flex-col gap-4">
              {["Instagram", "Facebook"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center justify-between text-white/35 hover:text-white transition-all duration-400 text-[11px] uppercase tracking-[0.3em] font-semibold"
                >
                  {platform}
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                </a>
              ))}

              <a
                href="#"
                className="group flex items-center justify-between text-white/35 hover:text-white transition-all duration-400 text-[11px] uppercase tracking-[0.3em] font-semibold"
              >
                {t.footer.privacy_protocol}
                <ShieldCheck className="w-3.5 h-3.5 text-white/15" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-semibold">
              © {new Date().getFullYear()} Dra. Lore López — {t.footer.rights}
            </p>
            <p className="text-[9px] uppercase tracking-[0.3em] font-medium text-white/10 italic">
              Medicina Estética Avanzada
            </p>
          </div>

          <div className="group flex items-center gap-4">
            <span className="text-white/12 text-[10px] uppercase tracking-[0.35em] font-semibold group-hover:text-white/28 transition-colors">
              {t.footer.designed_by}
            </span>
            <div className="w-8 h-px bg-white/8 group-hover:w-16 group-hover:bg-primary transition-all duration-700" />
          </div>
        </div>
      </div>
    </footer>
  );
}
