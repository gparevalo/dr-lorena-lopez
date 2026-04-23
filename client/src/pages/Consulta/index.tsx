import { SEO } from "@/components/seo";
import { BaseLayout } from "@/layout/base-layout";
import { useLanguage } from "@/i18n";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, ScanFace, ClipboardList, FlaskConical, Sparkles, ShieldCheck, Lock, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

const stepIcons: React.ReactNode[] = [
  <ScanFace className="w-6 h-6" />,
  <ClipboardList className="w-6 h-6" />,
  <FlaskConical className="w-6 h-6" />,
  <Sparkles className="w-6 h-6" />,
];

type ConsultaFormData = { name: string; email: string; phone: string; interest: string; message: string };
type ConsultaField = keyof ConsultaFormData;

export default function Consulta() {
  const { t } = useLanguage();
  const c = t.consultaPage;
  const [formData, setFormData] = useState<ConsultaFormData>({ name: "", email: "", phone: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <BaseLayout>
      <SEO
        title={c.seo_title}
        description={c.seo_desc}
        canonicalPath="/consulta"
      />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,22%,11%)] via-[hsl(35,18%,14%)] to-[hsl(82,12%,16%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 60%, hsl(35,35%,65%) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, hsl(82,28%,52%) 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 pt-32 pb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-[10px] uppercase tracking-[0.55em] font-semibold text-[hsl(82,28%,62%)]">
                — {c.hero_label} —
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8"
            >
              {c.hero_headline_1}
              <br />
              <em className="not-italic text-[hsl(35,35%,75%)]">{c.hero_headline_2}</em>
              <br />
              <span className="text-[hsl(82,28%,62%)]">{c.hero_headline_3}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/55 text-xl leading-relaxed max-w-xl mb-12 font-light"
            >
              {c.hero_subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex flex-wrap gap-5"
            >
              {[c.trust_1, c.trust_2, c.trust_3].map((trust, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-primary/80" />
                  <span className="text-white/50 text-sm">{trust}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[hsl(35,28%,97%)] to-transparent" />
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="py-28 bg-[hsl(35,28%,97%)]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="text-center mb-16">
              <motion.div variants={fadeUp}>
                <span className="inline-block text-[10px] uppercase tracking-[0.45em] font-semibold text-primary mb-4">
                  — {c.what_label} —
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl mx-auto">
                {c.what_title}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground mt-5 max-w-xl mx-auto text-lg font-light leading-relaxed">
                {c.what_subtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {c.steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  data-testid={`card-consulta-step-${i}`}
                  className="group bg-[hsl(35,28%,97%)] p-12 hover:bg-[hsl(35,22%,95%)] transition-colors duration-500"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-primary/20 bg-primary/5 text-primary mb-8 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                    {stepIcons[i]}
                  </div>
                  <div className="text-[10px] font-mono text-primary/40 tracking-widest mb-3">0{i + 1}</div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── VALUE PROPOSITION ─── */}
      <section className="py-28 bg-[hsl(25,20%,10%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.div variants={fadeUp}>
                  <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-[hsl(82,28%,55%)] mb-4 block">
                    — {c.value_label} —
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  {c.value_title}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-white/50 text-lg leading-relaxed font-light">
                  {c.value_body}
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="space-y-0">
                {[
                  { icon: <Star className="w-5 h-5" />, text: c.trust_1 },
                  { icon: <ShieldCheck className="w-5 h-5" />, text: c.trust_2 },
                  { icon: <Lock className="w-5 h-5" />, text: c.trust_3 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-8 border-b border-white/5 last:border-b-0 group hover:bg-white/[0.03] transition-colors duration-500">
                    <div className="w-10 h-10 flex items-center justify-center border border-primary/20 text-primary/70 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-white/60 text-base font-light group-hover:text-white/80 transition-colors">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </RevealSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[hsl(35,28%,97%)] to-transparent" />
      </section>

      {/* ─── INQUIRY FORM ─── */}
      <section className="py-28 bg-[hsl(35,28%,97%)]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <motion.div variants={fadeUp}>
                  <span className="inline-block text-[10px] uppercase tracking-[0.45em] font-semibold text-primary mb-4">
                    — {c.form_label} —
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                  {c.form_title}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg font-light leading-relaxed mb-12">
                  {c.form_subtitle}
                </motion.p>

                <motion.div variants={fadeUp} className="space-y-6">
                  {[
                    { icon: <CheckCircle className="w-4 h-4 text-primary" />, text: c.trust_1 },
                    { icon: <ShieldCheck className="w-4 h-4 text-primary" />, text: c.trust_2 },
                    { icon: <Lock className="w-4 h-4 text-primary" />, text: c.trust_3 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      {item.icon}
                      <span className="text-sm text-foreground/65">{item.text}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div variants={fadeUp}>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center min-h-[400px] text-center border border-border p-16">
                    <div className="w-16 h-16 flex items-center justify-center bg-primary/10 mb-8">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{c.form_success_title}</h3>
                    <p className="text-muted-foreground font-light">{c.form_success_body}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-0 border border-border" data-testid="form-consulta">
                    {[
                      { key: "name", label: c.form_name, type: "text", testid: "input-name" },
                      { key: "email", label: c.form_email, type: "email", testid: "input-email" },
                      { key: "phone", label: c.form_phone, type: "tel", testid: "input-phone" },
                      { key: "interest", label: c.form_interest, type: "text", testid: "input-interest" },
                    ].map((field) => (
                      <div key={field.key} className="border-b border-border last:border-b-0">
                        <label className="block text-[9px] uppercase tracking-[0.4em] font-semibold text-muted-foreground px-6 pt-5 pb-1">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          data-testid={field.testid}
                          value={formData[field.key as ConsultaField]}
                          onChange={(e) => setFormData((p) => ({ ...p, [field.key]: e.target.value }))}
                          className="w-full px-6 pb-5 pt-1 bg-transparent text-foreground placeholder-muted-foreground/40 focus:outline-none text-base"
                          required={field.key !== "message"}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.4em] font-semibold text-muted-foreground px-6 pt-5 pb-1">
                        {c.form_message}
                      </label>
                      <textarea
                        data-testid="input-message"
                        value={formData.message}
                        onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                        rows={4}
                        className="w-full px-6 pb-5 pt-1 bg-transparent text-foreground placeholder-muted-foreground/40 focus:outline-none resize-none text-base"
                      />
                    </div>
                    <div className="p-6 bg-[hsl(35,22%,95%)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">{c.form_note}</p>
                      <button
                        type="submit"
                        data-testid="button-form-submit"
                        className="group flex items-center gap-3 px-8 py-4 bg-primary text-white text-[10px] uppercase tracking-[0.35em] font-semibold hover:bg-primary/80 transition-all duration-500 whitespace-nowrap"
                      >
                        {c.form_submit}
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
