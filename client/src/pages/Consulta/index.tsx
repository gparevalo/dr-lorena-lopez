import { SEO } from "@/components/seo";
import { useLanguage } from "@/i18n";
import { BaseLayout } from "@/layout/base-layout";
import heroImg from "@assets/images/61.png";
import { motion, useInView } from "framer-motion";
import { ClipboardList, FlaskConical, ScanFace, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import CtaSection from "../Home/sections/cta/CtaSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={stagger}
      className={className}
    >
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

type ConsultaFormData = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};
type ConsultaField = keyof ConsultaFormData;

export default function Consulta() {
  const { t } = useLanguage();
  const c = t.consultaPage;
  const [formData, setFormData] = useState<ConsultaFormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
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
      {/* ─── CONTACT HERO ─── */}
      <section className="relative min-h-screen bg-[#f7f3ee] overflow-hidden">
        <div className="grid lg:grid-cols-12 min-h-screen">
          {/* LEFT ATMOSPHERIC PANEL */}
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block">
            {/* luxury image */}
            <img
              src={heroImg}
              alt=""
              className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
            />

            {/* cinematic overlay */}
            <div
              className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/50
          via-black/10
          to-transparent
        "
            />

            {/* editorial line */}
            <div
              className="
          absolute
          top-0
          right-0
          w-px
          h-full
          bg-white/10
        "
            />

            {/* floating statement */}
            <div
              className="
          absolute
          bottom-16
          left-12
          right-12
        "
            >
              <p
                className="
            text-white/40
            uppercase
            tracking-[0.35em]
            text-[10px]
            mb-5
          "
              >
                Private Consultation
              </p>

              <p
                className="
            text-white
            text-2xl
            leading-relaxed
            font-serif
          "
              >
                Un espacio diseñado para entender tu armonía facial desde una
                visión médica y estética.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
        lg:col-span-7
        relative
        flex
        items-center
      "
          >
            {/* soft gradients */}
            <div
              className="
          absolute
          top-[10%]
          right-[-10%]
          w-[600px]
          h-[600px]
          rounded-full
          bg-primary/10
          blur-[120px]
        "
            />

            <div
              className="
              pt-48
          relative
          z-20
          w-full
          px-8
          lg:px-24 
        "
            >
              {/* label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="
            flex
            items-center
            gap-4
            mb-10
          "
              >
                <div className="w-12 h-px bg-primary/30" />

                <span
                  className="
              text-[10px]
              uppercase
              tracking-[0.45em]
              text-primary
              font-semibold
            "
                >
                  {c.hero_label}
                </span>
              </motion.div>

              {/* headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="
            font-serif
            text-[#1a1816]
            leading-[0.9]
            tracking-[-0.05em]
            mb-10
            text-[4rem]
            sm:text-[5rem]
            lg:text-[7rem]
            max-w-[900px]
          "
              >
                <span className="block">{c.hero_headline_1}</span>

                <span className="block italic text-primary">
                  {c.hero_headline_2}
                </span>

                <span className="block">{c.hero_headline_3}</span>
              </motion.h1>

              {/* body */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="
            text-[#5e5852]
            text-xl
            leading-[1.9]
            font-light
            max-w-[650px]
            mb-14
          "
              >
                {c.hero_subtitle}
              </motion.p>
 
            </div>
          </div>
        </div>
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
              <motion.h2
                variants={fadeUp}
                className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl mx-auto"
              >
                {c.what_title}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground mt-5 max-w-xl mx-auto text-lg font-light leading-relaxed"
              >
                {c.value_body}
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
                  <div className="flex items-center gap-5 mb-6">
                    {/* number */}
                    <div
                      className="
      text-xl
      font-mono
      tracking-[0.35em]
      text-primary/35
      pt-[2px]
    "
                    >
                      0{i + 1}
                    </div>

                    {/* title */}
                    <h3
                      className="
      font-serif
      text-xl
      font-bold
      text-foreground
      leading-none
      group-hover:text-primary
      transition-colors duration-300
    "
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>
      {/* ─── FINAL CTA (CONCIERGE) ─── */}
      <CtaSection />
    </BaseLayout>
  );
}
