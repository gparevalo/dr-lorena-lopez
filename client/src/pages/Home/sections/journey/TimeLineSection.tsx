import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";
import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function TimeLineSection({
  journey,
  setActiveStep,
  activeStep = 1,
}: {
  journey: typeof any;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
}) {
  const { t } = useLanguage();
  const td = t.treatmentDetail;

  return (
    <div className="relative">
      <div className="space-y-40">
        {" "}
        {journey.map((step) => (
          <motion.div
            onViewportEnter={() => {
              setActiveStep(step.id);
            }}
            key={step.id}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
                    relative
                    pl-0
                    md:pl-2
                  "
          >
            <div
              className="
                      relative

                      bg-white

                      rounded-[40px]

                      border
                      border-[#ECE8E2]

                      p-10
                      md:p-12

                      shadow-[0_20px_60px_rgba(0,0,0,.04)]

                      overflow-hidden
                    "
            >
              <span
                className="
                        absolute
                        -top-8
                        right-6

                        font-heading
                        text-[170px]

                        leading-none

                        text-primary/[0.04]

                        pointer-events-none
                      "
              >
                {step.number}
              </span>

              <div className="relative z-10">
                <div
                  className="
                          w-16
                          h-px
                          bg-primary/30
                          mb-8
                        "
                />

                <span
                  className="
                          uppercase
                          tracking-[0.35em]
                          text-primary
                          text-[11px]
                          font-semibold
                        "
                >
                  {step.subtitle}
                </span>

                <h3
                  className="
                          font-heading
                          text-4xl
                          mt-2
                          mb-2
                        "
                >
                  {step.title}
                </h3>

                <p
                  className="
                text-foreground/70
                text-md
                leading-relaxed
                          mb-4
                        "
                >
                  {step.description}
                </p>

                <ul className="space-y-22">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="
                              flex
                              items-center
                              gap-3 opacity-70 font-light text-md
                            "
                    >
                      <span
                        className="
                                w-2
                                h-2
                                rounded-full
                                bg-primary
                                shrink-0
                              "
                      />

                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className=" mt-10">
                <span
                  className="
                          uppercase
                          tracking-[0.35em]
                          text-primary
                          text-[11px]
                          font-semibold mt-20
                        "
                >
                  Packs y promociones:
                </span>
              </div>

              {/* JOURNEY */}
              {step.products?.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-10">
                  {step.products?.slice(0, 1).map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className=" group  transition-all duration-500  "
                    >
                      <div
                        className="
                flex
                items-start
                gap-4
                rounded-3xl
                border
                border-white/10
                bg-primary/5
                backdrop-blur-xl
                px-6
                py-4
              "
                      >
                        <div
                          className="
                  w-40
                  h-12
                  rounded-2xl
                  bg-[#8B5E3C]/25
                  flex
                  items-center
                  justify-center
                "
                        >
                          0{index + 1}
                        </div>

                        <div className="text-center sm:text-left ">
                          <p className=" font-semibold text-sm  pb-2">
                            {item.name}
                          </p>

                          <p className="text-black/60 text-sm mt-1 pb-4">
                            {item.description}
                          </p>

                          <div
                            className="flex items-center gap-2 text-primary text-xs uppercase tracking-[0.25em] "
                          >
                            Adquirir
                            <ArrowRight className=" w-4 h-4 group-hover:translate-x-1 transition-transform " />
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}

                  {step.products.length > 1 && (
                    <div
                      className="
          flex
          items-center
          justify-center

          rounded-3xl

          border-2
          border-dashed
          border-primary/20

          bg-primary/[0.03]

          min-h-[140px]

          text-center
        "
                    >
                      <div>
                        <p
                          className="
              font-heading
              text-4xl
              text-primary
            "
                        >
                          +{step.products.length - 1}
                        </p>

                        <p
                          className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-black/50
              mt-2
            "
                        >
                          productos más
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ACTIONS */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 justify-start items-start mt-10"
              >
                <Button asChild variant="editorial" withShimmer>
                  <Link href="/contacto">
                    {td.cta_button}
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="px-8 text-[11px] uppercase tracking-[0.4em] text-primary"
                >
                  <Link href="/tratamientos">
                    Explorar
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
