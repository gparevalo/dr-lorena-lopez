import { UnifiedSection } from "@/components/layout/UnifiedSection";
import { SEO } from "@/components/seo";
import { useLanguage } from "@/i18n";
import { BaseLayout } from "@/layout/base-layout";
import { cn } from "@/lib/utils";
import { useScroll, useTransform } from "framer-motion";
import { ArrowRight, Minus } from "lucide-react";
import { useRef } from "react";
import CtaSection from "../Home/components/CtaSection";
import HeaderPage from "./componentes/HeaderPage";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

function LuxuryLabel({
  children,
  dark = false,
}: {
  children: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <Minus
        className={cn("w-6 h-px", dark ? "text-primary/70" : "text-primary/50")}
      />
      <span
        className={cn(
          "text-[9px] uppercase tracking-[0.6em] font-semibold",
          dark ? "text-primary/90" : "text-primary",
        )}
      >
        {children}
      </span>
    </div>
  );
}

export default function Tratamientos() {
  const { t } = useLanguage();
  const tp = t.tratamientosPage;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <BaseLayout>
      <SEO
        title={tp.seo_title}
        description={tp.seo_desc}
        canonicalPath="/tratamientos"
      />

      {/* ─── HERO: MINIMALIST LUXURY ─── */}
      <HeaderPage />

      {/* ─── TREATMENT ROWS ─── */}
      <section className="bg-background">
        {tp.treatments.map((treatment, i) => (
          <UnifiedSection
            key={treatment.slug}
            dark={i % 2 !== 0}
            withGrid={false}
            className="py-28 relative overflow-hidden"
          >
            <div
              className={cn(
                "max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center",
                i % 2 !== 0 ? "text-white" : "text-foreground",
              )}
            >
              {/* BACKGROUND INDEX (BIG TYPO) */}
              <span className="absolute left-6 lg:left-10 top-10 text-[160px] font-heading text-black/5 select-none">
                0{i + 1}
              </span>

              {/* LEFT / TEXT BLOCK */}
              <div
                className={cn(
                  "lg:col-span-6 space-y-10",
                  i % 2 !== 0 ? "lg:order-2" : "",
                )}
              >
                {/* TAG */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-primary/40" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-primary/60 font-semibold">
                    {treatment.tagline}
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="font-heading text-5xl md:text-7xl leading-[0.95]">
                  {treatment.name}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-lg md:text-xl font-light leading-relaxed font-serif italic text-foreground/70 max-w-xl">
                  {treatment.summary}
                </p>

                {/* CTA */}
                <a
                  href={`/tratamientos/${treatment.slug}`}
                  className={cn(
                    "inline-flex items-center gap-4 px-12 py-5 text-[11px] uppercase tracking-[0.4em] font-semibold transition-all duration-500",
                    i % 2 !== 0
                      ? "bg-white text-black hover:bg-primary hover:text-white"
                      : "bg-black text-white hover:bg-primary",
                  )}
                >
                  {tp.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>

              {/* RIGHT / VISUAL BLOCK (placeholder for image/video later) */}
              <div
                className={cn(
                  "lg:col-span-6 h-[420px] rounded-2xl bg-black/5 border border-black/10",
                  i % 2 !== 0 ? "lg:order-1" : "",
                )}
              >
                {/* highlight block */}
                <div className="h-full flex items-end p-10">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary/40">
                      Destacado
                    </span>
                    <p className="text-sm uppercase tracking-[0.25em] font-medium">
                      {treatment.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </UnifiedSection>
        ))}
      </section>

      {/* ─── FINAL CTA (CONCIERGE) ─── */}
      <CtaSection />
    </BaseLayout>
  );
}
