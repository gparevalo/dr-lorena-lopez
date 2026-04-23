import { SEO } from "@/components/seo";
import { BaseLayout } from "@/layout/base-layout";
import { useLanguage } from "@/i18n";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Globe, Video, MapPin, CheckCircle, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

type IntlFormData = { name: string; email: string; location: string; message: string };
type IntlField = keyof IntlFormData;

export default function PacientesInternacionales() {
  const { t } = useLanguage();
  const p = t.internacionales;
  const [formData, setFormData] = useState<IntlFormData>({ name: "", email: "", location: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <BaseLayout>
      <SEO title={p.seo_title} description={p.seo_desc} canonicalPath="/pacientes-internacionales" />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,22%,9%)] via-[hsl(35,20%,13%)] to-[hsl(82,14%,17%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(ellipse at 15% 55%, hsl(35,40%,60%) 0%, transparent 50%), radial-gradient(ellipse at 80% 35%, hsl(82,28%,52%) 0%, transparent 48%)`,
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 pt-36 pb-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.55em] font-semibold text-[hsl(82,28%,62%)]">
                — {p.hero_label} —
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8"
            >
              {p.hero_headline_1}
              <br />
              <em className="not-italic text-[hsl(35,35%,72%)]">{p.hero_headline_2}</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/55 text-xl leading-relaxed max-w-xl font-light"
            >
              {p.hero_subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {p.markets.map((market, i) => (
              <div key={i} className="p-6 border border-white/8 bg-white/[0.03] group hover:bg-white/[0.06] hover:border-primary/25 transition-all duration-400">
                <MapPin className="w-4 h-4 text-primary/60 mb-4" />
                <p className="font-serif text-sm font-bold text-white mb-2">{market.city}</p>
                <p className="text-white/35 text-xs leading-relaxed">{market.body}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[hsl(35,28%,97%)] to-transparent" />
      </section>

      {/* ─── VIRTUAL PROCESS ─── */}
      <section className="py-28 bg-[hsl(35,28%,97%)]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="text-center mb-16">
              <motion.div variants={fadeUp}>
                <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-primary mb-4 block">
                  — {p.virtual_label} —
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl mx-auto">
                {p.virtual_title}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground mt-5 max-w-xl mx-auto text-lg font-light">
                {p.virtual_subtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {p.virtual_steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  data-testid={`virtual-step-${i}`}
                  className="group bg-[hsl(35,28%,97%)] p-10 hover:bg-[hsl(35,22%,95%)] transition-colors duration-500"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-2xl font-bold text-primary/20">{step.step}</span>
                    <div className="w-6 h-px bg-primary/20" />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center border border-primary/20 bg-primary/5 text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                    {i === 0 ? <Globe className="w-4 h-4" /> : i === 1 ? <Video className="w-4 h-4" /> : i === 2 ? <CheckCircle className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── MARKETS ─── */}
      <section className="py-28 bg-[hsl(25,20%,10%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="text-center mb-16">
              <motion.div variants={fadeUp}>
                <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-[hsl(82,28%,55%)] mb-4 block">
                  — {p.markets_label} —
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-white">
                {p.markets_title}
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {p.markets.map((market, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  data-testid={`market-card-${i}`}
                  className="group border border-white/8 p-8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-primary/30 transition-all duration-500"
                >
                  <MapPin className="w-5 h-5 text-primary/50 mb-6 group-hover:text-primary transition-colors" />
                  <h3 className="font-serif text-xl font-bold text-white mb-4 group-hover:text-[hsl(82,28%,65%)] transition-colors">
                    {market.city}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                    {market.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </RevealSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[hsl(35,28%,97%)] to-transparent" />
      </section>

      {/* ─── CONCIERGE ─── */}
      <section className="py-28 bg-[hsl(35,28%,97%)]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.div variants={fadeUp}>
                  <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-primary mb-4 block">
                    — {p.concierge_label} —
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  {p.concierge_title}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-foreground/65 leading-relaxed text-lg font-light">
                  {p.concierge_body}
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="space-y-0 border border-border">
                {[
                  { icon: <Video className="w-4 h-4" />, text: p.virtual_steps[1].title },
                  { icon: <MapPin className="w-4 h-4" />, text: p.virtual_steps[3].title },
                  { icon: <ShieldCheck className="w-4 h-4" />, text: p.cta_note },
                  { icon: <Globe className="w-4 h-4" />, text: p.markets_title },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 px-8 py-6 border-b border-border last:border-b-0 group hover:bg-[hsl(35,22%,95%)] transition-colors duration-400">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-400">
                      {item.icon}
                    </div>
                    <span className="text-foreground/65 text-sm font-light group-hover:text-foreground/85 transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section className="py-28 bg-[hsl(82,12%,94%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-border" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <motion.div variants={fadeUp}>
                  <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-primary mb-4 block">
                    — {p.cta_label} —
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                  {p.cta_title}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg font-light leading-relaxed">
                  {p.cta_subtitle}
                </motion.p>
              </div>

              <motion.div variants={fadeUp}>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center min-h-[360px] text-center border border-border bg-white p-16">
                    <CheckCircle className="w-12 h-12 text-primary mb-6" />
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{p.form_success_title}</h3>
                    <p className="text-muted-foreground font-light">{p.form_success_body}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-0 border border-border bg-white" data-testid="form-internacionales">
                    {[
                      { key: "name", label: t.consultaPage.form_name, type: "text", testid: "input-intl-name" },
                      { key: "email", label: t.consultaPage.form_email, type: "email", testid: "input-intl-email" },
                      { key: "location", label: t.consultaPage.form_location, type: "text", testid: "input-intl-location" },
                    ].map((field) => (
                      <div key={field.key} className="border-b border-border last:border-b-0">
                        <label className="block text-[9px] uppercase tracking-[0.4em] font-semibold text-muted-foreground px-6 pt-5 pb-1">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          data-testid={field.testid}
                          value={formData[field.key as IntlField]}
                          onChange={(e) => setFormData((prev) => ({ ...prev, [field.key]: e.target.value }))}
                          className="w-full px-6 pb-5 pt-1 bg-transparent text-foreground focus:outline-none text-base"
                          required
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.4em] font-semibold text-muted-foreground px-6 pt-5 pb-1">
                        {t.consultaPage.form_message}
                      </label>
                      <textarea
                        data-testid="input-intl-message"
                        value={formData.message}
                        onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                        rows={4}
                        className="w-full px-6 pb-5 pt-1 bg-transparent text-foreground focus:outline-none resize-none text-base"
                      />
                    </div>
                    <div className="p-6 bg-[hsl(82,12%,94%)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">{p.cta_note}</p>
                      <button
                        type="submit"
                        data-testid="button-intl-submit"
                        className="group flex items-center gap-3 px-8 py-4 bg-primary text-white text-[10px] uppercase tracking-[0.35em] font-semibold hover:bg-primary/80 transition-all duration-500 whitespace-nowrap"
                      >
                        {p.cta_button}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </RevealSection>
        </div>
      </section>
    </BaseLayout>
  );
}
