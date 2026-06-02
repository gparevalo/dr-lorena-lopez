import { motion } from "framer-motion";

export default function TimeLineSection({
  journey,
  setActiveStep,
  activeStep = 1,
}: {
  journey: typeof any;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
}) {
  return (
    <div className="relative">
      <div
        className=" 
              hidden
              md:block
                absolute 
                top-0
                bottom-0
                w-px
                bg-black/10
              "
      />

      <div className="space-y-40">
        {" "}
        {journey.map((step) => (
          <motion.div
            onViewportEnter={() => setActiveStep(step.id)}
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
              amount: 0.8,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
                    relative
                    pl-0
                    md:pl-20
                  "
          >
            <div
              className="
              hidden
              md:block
                      absolute
                      left-[20px]
                      top-10

                      w-4
                      h-4

                      rounded-full
                      bg-primary

                      border-4
                      border-white

                      shadow-lg
                      z-10
                    "
            />

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

                          mt-4
                          mb-6
                        "
                >
                  {step.title}
                </h3>

                <p
                  className="
                          text-black/60
                          leading-relaxed
                          mb-10
                        "
                >
                  {step.description}
                </p>

                <ul className="space-y-4">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="
                              flex
                              items-center
                              gap-3

                              text-black/70
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
