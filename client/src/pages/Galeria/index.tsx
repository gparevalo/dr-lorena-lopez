import { SEO } from "@/components/seo";
import { BaseLayout } from "@/layout/base-layout";
import { useLanguage } from "@/i18n";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

const itemGradients = [
  "from-[hsl(82,18%,28%)] to-[hsl(82,12%,18%)]",
  "from-[hsl(35,28%,22%)] to-[hsl(25,22%,14%)]",
  "from-[hsl(25,22%,18%)] to-[hsl(35,18%,12%)]",
  "from-[hsl(60,12%,22%)] to-[hsl(82,15%,18%)]",
  "from-[hsl(35,22%,20%)] to-[hsl(25,18%,13%)]",
  "from-[hsl(82,14%,22%)] to-[hsl(35,18%,16%)]",
  "from-[hsl(35,30%,24%)] to-[hsl(35,22%,14%)]",
  "from-[hsl(82,22%,20%)] to-[hsl(82,15%,14%)]",
  "from-[hsl(25,22%,20%)] to-[hsl(82,12%,16%)]",
];

const itemSizes = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

const itemHeights = [
  "min-h-[460px]",
  "min-h-[220px]",
  "min-h-[220px]",
  "min-h-[220px]",
  "min-h-[220px]",
  "min-h-[220px]",
  "min-h-[220px]",
  "min-h-[220px]",
  "min-h-[220px]",
];

export default function Galeria() {
  const { t } = useLanguage();
  const g = t.galeriaPage;
  const [activeFilter, setActiveFilter] = useState("all");

  const allItems = g.items;
  const filtered = activeFilter === "all" ? allItems : allItems.filter((item) => item.category === activeFilter);

  const filters = [
    { id: "all", label: g.filter_all },
    ...g.categories.map((c) => ({ id: c.id, label: c.label })),
  ];

  return (
    <BaseLayout>
      <SEO title={g.seo_title} description={g.seo_desc} canonicalPath="/galeria" />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,22%,10%)] via-[hsl(35,18%,13%)] to-[hsl(82,14%,16%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(ellipse at 65% 45%, hsl(35,38%,62%) 0%, transparent 50%), radial-gradient(ellipse at 25% 65%, hsl(82,28%,52%) 0%, transparent 45%)`,
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 pt-36 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.55em] font-semibold text-[hsl(82,28%,62%)]">
              — {g.hero_label} —
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.0] tracking-tight mb-8 max-w-3xl"
          >
            {g.hero_headline_1}
            <br />
            <em className="not-italic text-[hsl(35,35%,72%)]">{g.hero_headline_2}</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/50 text-lg leading-relaxed max-w-lg font-light"
          >
            {g.hero_subtitle}
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(35,28%,97%)] to-transparent" />
      </section>

      {/* ─── FILTER BAR ─── */}
      <section className="py-12 bg-[hsl(35,28%,97%)] border-b border-border sticky top-[73px] z-30">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex items-center justify-between">
          <div className="flex items-center gap-1 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                data-testid={`filter-${filter.id}`}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 text-[10px] uppercase tracking-[0.35em] font-semibold transition-all duration-400 whitespace-nowrap ${
                  activeFilter === filter.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <p className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{g.note}</p>
        </div>
      </section>

      {/* ─── MASONRY GRID ─── */}
      <section className="bg-[hsl(35,28%,97%)] py-12">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[220px]">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                data-testid={`gallery-item-${item.id}`}
                className={`group relative overflow-hidden ${itemSizes[i % itemSizes.length]} ${itemHeights[i % itemHeights.length]}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${itemGradients[i % itemGradients.length]} transition-transform duration-700 group-hover:scale-105`} />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

                {/* Content overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  {item.treatment && (
                    <p className="text-[9px] uppercase tracking-[0.4em] text-primary/80 font-semibold mb-2">
                      {item.treatment}
                    </p>
                  )}
                  <h3 className="font-serif text-xl font-bold text-white leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-xs font-light">
                    {item.subtitle}
                  </p>
                </div>

                {/* Always-visible category dot */}
                <div className="absolute top-5 left-5 w-2 h-2 rounded-full bg-primary/50" />

                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-px bg-white/8" />
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-12">
            {g.note}
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-[hsl(25,20%,10%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <RevealSection>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
              {t.cta.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/45 text-lg font-light mb-10 max-w-lg mx-auto">
              {t.cta.subtitle}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/consulta">
                <button
                  data-testid="button-galeria-cta"
                  className="group inline-flex items-center gap-3 px-12 py-5 bg-primary text-white text-[11px] uppercase tracking-[0.4em] font-semibold hover:bg-primary/80 transition-all duration-500"
                >
                  {t.cta.button}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>
          </RevealSection>
        </div>
      </section>
    </BaseLayout>
  );
}
