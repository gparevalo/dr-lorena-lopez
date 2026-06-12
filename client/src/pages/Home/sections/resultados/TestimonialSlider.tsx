import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { ButtonResultados } from "./ButtonResultados";
import { fadeUp } from "@/lib/animations";
import { whatsappHref } from "@/lib/site";

type Review = {
  id: string | number;
  imageSrc: string;
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  benefits: any;
  zones: any;
  duration: string;
  downtime: string;
  highlight: string;
  image: string;
  video: string;
  position: string;
  treatments: [];
};

interface TestimonialSliderProps {
  reviews: Review[];
  className?: string;
}

export const TestimonialSlider = ({
  reviews,
  className,
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const activeReview = reviews[currentIndex];

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const thumbnailReviews = reviews.filter((_, i) => i !== currentIndex);

  const imageVariants = {
    enter: (direction: "left" | "right") => ({
      y: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      y: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const textVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn(
        "relative w-full min-h-[650px] md:min-h-[600px] overflow-hidden bg-white text-foreground p-8 md:p-0 pb-0",
        className,
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 h-full">
        <div className="md:col-span-1 flex flex-col justify-top items-end order-2 md:order-1">
          <div className="flex flex-row md:flex-col justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-4">
            <span className="text-sm text-muted-foreground ">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
            <h2 className="text-sm font-medium tracking-widest uppercase [writing-mode:vertical-rl] md:rotate-180 hidden md:block">
              Tratamientos
            </h2>
          </div>
        </div>

        <div className="md:col-span-5 relative h-80 min-h-[400px] md:h-[140px] order-1 md:order-2">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={activeReview.image}
              alt={activeReview.name}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} // Cubic bezier for smooth ease
              className="absolute inset-0 w-full h-full object-contain rounded-lg"
            />
          </AnimatePresence>
        </div>

        {/* === Right Column: Text and Navigation === */}
        <div className="md:col-span-6 flex flex-col justify-between md:pl-8 order-3 md:order-3">
          {/* Text Content */}
          <div className="relative overflow-hidden   min-h-[200px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                {" "}
                {/* Background Decoration */}
                <span className="absolute -right-4 -top-8 font-heading text-[120px] text-black/[0.02] group-hover:text-primary/[0.05] transition-colors duration-700 select-none pointer-events-none">
                  0{currentIndex + 1}
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary/60 font-bold mb-8 group-hover:translate-x-2 transition-transform duration-500">
                  Tratamiento {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-2xl text-black/90 mb-6 group-hover:text-primary transition-colors duration-500">
                  {activeReview.name}
                </h3>
                <p
                  className="
                text-foreground/70
                text-md
                leading-relaxed
                          mb-4
                        "
                >
                  {activeReview.summary}{" "}
                </p>
                {/* BENEFITS */}
                {!activeReview.treatments && activeReview.benefits && (
                  <motion.ul
                    variants={fadeUp}
                    className={cn(
                      "space-y-2 text-sm leading-relaxed ",
                      "text-foreground/70",
                    )}
                  >
                    {activeReview.benefits
                      .slice(0, 3)
                      .map((b: string, idx: number) => (
                        <li key={idx}>• {b}</li>
                      ))}
                  </motion.ul>
                )}
                {activeReview.treatments && (
                  <>
                    {" "}
                    <div className="lg:col-span-7 grid grid-cols-3 gap-2 ">
                      {activeReview.treatments.map((item, index) => (
                        <div
                          key={item.id}
                          className="group relative rounded-3xl border border-[#ECE8E2] bg-white p-4 hover:shadow-sm 
                  hover:scale-[1.03] transition"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div>
                                <p className="text-black/30 text-[11px] uppercase tracking-widest mt-1">
                                  Tratamiento 0{item.id}
                                </p>
                                <p className="font-heading text-lg leading-snug">
                                  {item.name}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                <div className="border-t border-black/5 mt-0 mb-2"></div>
                <div className="mt-2 pt-6 w-full text-xs uppercase tracking-[0.3em] font-bold text-primary group-hover:text-primary transition-colors flex items-center gap-2">
                  <a
                    href={whatsappHref(
                      "Hola, quiero aplicar al tratamiento " +
                        activeReview.name +
                        ". Mi nombre es ..",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex  items-center gap-3  mt-0 px-10 py-4 bg-primary text-white rounded-full uppercase tracking-[0.2em] text-xs font-semibold mr-4"
                  >
                    <Calendar size={18} />
                    Aplicar a valoración
                  </a>
                  <Link
                    href={`/tratamientos/${activeReview.slug}`}
                    className="flex flex-row"
                  >
                    Conocer el tratamiento{" "}
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </div>
                {/* NAVIGATION BUTTONS */}
                <div className="flex items-center justify-start gap-3 mt-8">
                  <ButtonResultados
                    variant="outline"
                    size="icon"
                    className="rounded-full w-12 h-12 border-muted-foreground/50"
                    onClick={handlePrev}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </ButtonResultados>

                  <ButtonResultados
                    variant="default"
                    size="icon"
                    className="rounded-full w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleNext}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </ButtonResultados>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex flex-col items-center mt-10 mb-6 gap-8">
        {/* THUMBNAILS ROW */}
        <div className="flex justify-center items-center gap-6 overflow-x-auto py-0 px-2 w-full">
          {reviews.map((review) => {
            const originalIndex = reviews.findIndex((r) => r.id === review.id);
            const isActive = originalIndex === currentIndex;

            return (
              <button
                key={review.id}
                onClick={() => handleThumbnailClick(originalIndex)}
                className={`flex flex-col items-center gap-2 transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-50 hover:opacity-90"
                }`}
              >
                {/* IMAGE */}
                <div
                  className={`relative rounded-lg overflow-hidden w-16 h-20 md:w-24 md:h-28 border transition-all duration-300 ${
                    isActive
                      ? "border-primary shadow-md scale-105"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* LABEL */}
                <span
                  className={`text-sm uppercase md:text-[10px] text-center max-w-[70px] leading-tight min-h-[24px] flex items-center justify-center text-black tracking-[0.17em] ${
                    isActive ? " tracking-[0.3em] " : ""
                  }`}
                >
                  {review.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
