import { AnimatePresence, motion } from "framer-motion";

export default function ImgStickySection({
  journey,
  setActiveStep,
  activeStep = 1,
}: {
  journey: typeof any;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
}) {
  const journeyActual =
    journey.find((item) => item.id === activeStep) ?? journey[0]; 
  return (
    <div className="hidden lg:block">
      <div className="sticky top-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={journeyActual.image}
            initial={{
              opacity: 0,
              scale: 1.05,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative "
          >
            <div
              className="
                  relative 
                  overflow-hidden
                  rounded-[40px]
                "
            >
              <img
                src={journeyActual.image}
                alt="Dra María de los Ángeles Arias"
                className="bg-contain 
                  h-[550px] w-full"
              />
              <div className="mt-10">
                <span
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-primary
                    text-xs
                    font-semibold
                  "
                >
                  {journeyActual.subtitle}
                </span>

                <h3
                  className="
                          font-heading
                          text-4xl

                          mt-4
                          mb-6
                        "
                >
                  {journeyActual.title}
                </h3>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
