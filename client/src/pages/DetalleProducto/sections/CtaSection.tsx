import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";
import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { TreatmentInfo } from "./interfaces";

interface CtaSectionProps {
  detail: TreatmentInfo;
}

export default function CtaSection({ detail }: CtaSectionProps) {
  const { t } = useLanguage();
  const td = t.treatmentDetail;
  return (
    <>
      <section className="py-40">
        <div className="max-w-5xl mx-auto text-center">
          <span className="uppercase tracking-[0.35em] text-primary text-[11px] font-semibold">
            Siguiente paso
          </span>

          <h2 className="font-heading text-6xl lg:text-7xl leading-[0.9] mt-8 mb-10">
            Tu tratamiento
            <br />
            comienza con una
            <br />
            valoración personalizada
          </h2>

          <p className="max-w-2xl mx-auto text-black/60 leading-relaxed mb-16">
            Cada paciente tiene necesidades diferentes. La valoración permite
            diseñar un plan completamente adaptado a tus objetivos.
          </p>

          {/* ACTIONS */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://wa.me/593980163009"
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-10 rounded-full bg-primary text-white flex items-center justify-center uppercase tracking-[0.25em] text-xs font-semibold"
            >
              Agendar valoración
              <ArrowRight className="ml-3 w-4 h-4" />
            </a>

            <Button
              asChild
              variant="ghost"
              className="px-8 text-[11px] uppercase tracking-[0.4em] text-primary"
            >
              <Link href="/tratamientos">
                <ArrowLeft className="mr-3 w-4 h-4" />
                {td.back}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
