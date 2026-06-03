import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { ButtonResultados } from "./ButtonResultados";

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
        "relative w-full min-h-[650px] md:min-h-[600px] overflow-hidden bg-background text-foreground p-8 md:p-12",
        className,
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
        <div className="md:col-span-1 flex flex-col justify-between order-2 md:order-1">
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

        <div className="md:col-span-6 relative h-80 min-h-[400px] md:min-h-[500px] order-1 md:order-2">
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
        <div className="md:col-span-5 flex flex-col justify-between md:pl-8 order-3 md:order-3">
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
                <div className="mt-2 pt-6  w-full text-sm uppercase tracking-[0.3em] font-bold text-primary/40 group-hover:text-primary transition-colors flex items-center gap-2">
                  <Link href={`/tratamientos/${activeReview.slug}`}>
                    Explorar{" "}
                    <span className="w-4 h-px bg-current group-hover:w-8 transition-all" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="border-t border-black/5 mt-6 mb-6"></div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex space-x-2 mt-8 md:mt-0 mb-6">
            {thumbnailReviews.map((review) => {
              // Find the original index to navigate to
              const originalIndex = reviews.findIndex(
                (r) => r.id === review.id,
              );
              return (
                <button
                  key={review.id}
                  onClick={() => handleThumbnailClick(originalIndex)}
                  className="overflow-hidden rounded-md w-16 h-20 md:w-20 md:h-24 opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label={`View review from ${review.name}`}
                >
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-contain"
                  />
                </button>
              );
            })}
          </div>
          {/* Navigation Buttons */}
          <div className="flex items-center space-x-2 mt-8 md:mt-0">
            <ButtonResultados
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-muted-foreground/50"
              onClick={handlePrev}
              aria-label="Previous review"
            >
              <ArrowLeft className="w-5 h-5" />
            </ButtonResultados>
            <ButtonResultados
              variant="default"
              size="icon"
              className="rounded-full w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleNext}
              aria-label="Next review"
            >
              <ArrowRight className="w-5 h-5" />
            </ButtonResultados>
          </div>
        </div>
      </div>
    </div>
  );
};
