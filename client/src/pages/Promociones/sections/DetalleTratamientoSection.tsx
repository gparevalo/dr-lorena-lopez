import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function DetalleTratamientoSection({
  detalleTratamiento,
}: {
  detalleTratamiento: {
    slug: string;
    name: string;
    tagline: string;
    summary: string;
    highlight: string;
    position: string;
  } | null;
}) {
  const { t } = useLanguage();
  const tp = t.tratamientosPage;
  return (
    <>
      {/* DETALLE */}

      {detalleTratamiento && (
        <>
          {" "}
          {/* TAGLINE */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-4 flex flex-col mb-10"
          >
            <div className="w-10 h-px bg-primary/40" />
            <span
              className={cn(
                "text-[10px] uppercase tracking-[0.4em] font-semibold",
                "text-primary/70",
              )}
            >
              {detalleTratamiento.tagline}
            </span>
            {/* TITLE */}
            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl md:text-4xl lg:text-7xl leading-[0.95]"
            >
              {detalleTratamiento.name}
            </motion.h2>
          </motion.div>
          <br />
          <div
            className={cn(
              "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center mb-10",
              "text-foreground",
            )}
          >
            {/* TEXT BLOCK */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={cn("lg:col-span-6  relative  ", "")}
            >
              <div className="min-h-[425px]  pl-4 md:pl-10 overflow-hidden ">
                {/* BACKGROUND NUMBER */}
                <span
                  className="absolute left-6 lg:left-10 text-[120px] md:text-[140px] 
                    font-heading text-black/5 select-none pointer-events-none"
                >
                  0{detalleTratamiento.id}
                </span>
                <div className=" space-y-6  ">
                  <p className="text-primary uppercase tracking-[0.3em] text-xs">
                    ¿Por qué elegir este tratamiento?
                  </p>

                  <h3 className="font-heading text-4xl mt-3">
                    Lo que este tratamiento
                    <br />
                    puede hacer por ti
                  </h3>
                  {/* SUMMARY */}
                  <motion.p
                    variants={fadeUp}
                    className={cn(
                      "text-md  leading-relaxed     max-w-xl",
                      "text-foreground/70",
                    )}
                  >
                    {detalleTratamiento.summary}
                  </motion.p>

                  {/* BENEFITS */}
                  {detalleTratamiento.benefits && (
                    <motion.ul
                      variants={fadeUp}
                      className={cn(
                        "space-y-2 text-sm leading-relaxed ",
                        "text-foreground/70",
                      )}
                    >
                      {detalleTratamiento.benefits
                        .slice(0, 3)
                        .map((b: string, idx: number) => (
                          <li key={idx}>• {b}</li>
                        ))}
                    </motion.ul>
                  )}

                  {/* CTA */}

                  <Button asChild variant="editorial" withShimmer>
                    <Link href={`/tratamientos/${detalleTratamiento.slug}`}>
                      {tp.cta || "Ver tratamiento"}
                      <ArrowRight className="ml-3 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* VISUAL BLOCK */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={cn(
                "lg:col-span-6 relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden group",
                "",
              )}
            >
              {/* IMAGE */}
              <img
                src={detalleTratamiento.image}
                alt={detalleTratamiento.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* VIDEO */}
              {detalleTratamiento.video && (
                <video
                  src={detalleTratamiento.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              )}

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6 md:p-10 text-white">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/60">
                  Destacado
                </span>
                <p className="text-xs md:text-xs uppercase tracking-[0.25em] font-medium">
                  {detalleTratamiento.highlight}
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}
