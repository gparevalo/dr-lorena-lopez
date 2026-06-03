import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";

import { UnifiedSection } from "@/components/layout/UnifiedSection";

import { headerData, patientStories } from "@/data/realTestimonials";
import { fadeUp } from "@/lib/animations";
import LuxuryLabel from "@/pages/Home/components/LuxuryLabel";

export default function PatientStoriesSection() {
  const [activeStory, setActiveStory] = useState(0);
/*
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) =>
        prev === patientStories.length - 1 ? 0 : prev + 1,
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);
*/
  const currentStory = patientStories[activeStory];

  return (
    <UnifiedSection
      id="historias"
      dark={false}
      withGrid={false}
      withGlow={true}
      className=""
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <LuxuryLabel>{headerData.label}</LuxuryLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-heading mb-8 text-black leading-none tracking-tighter"
          >
            {headerData.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-black/50 leading-relaxed max-w-2xl mx-auto"
          >
            {headerData.description}
          </motion.p>
        </motion.div>

        {/* STORY */}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStory.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-[#ECE8E2] rounded-[40px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,.04)] overflow-hidden relative mb-10"
          >
            {/* BIG NUMBER */}

            <span className="absolute right-6 md:right-10 top-2 font-heading text-[120px] md:text-[220px] leading-none text-primary/[0.04] pointer-events-none">
              {String(activeStory + 1).padStart(2, "0")}
            </span>

            <div className="relative z-10 grid lg:grid-cols-12 gap-12">
              {/* LEFT */}

              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-8">
                  <Quote className="w-8 h-8 text-primary/30" />

                  <span className="uppercase tracking-[0.3em] text-[11px] text-primary font-semibold">
                    Historia real
                  </span>
                </div>

                <p className="uppercase tracking-[0.3em] text-[11px] text-primary font-semibold mb-4">
                  {currentStory.treatment}
                </p>

                <h3 className="font-heading text-4xl md:text-6xl leading-[0.95] mb-8 max-w-4xl">
                  {currentStory.title}
                </h3>

                <p className="text-lg text-black/70 leading-relaxed max-w-3xl">
                  {currentStory.text}
                </p>
              </div>

              {/* RIGHT */}

              <div className="lg:col-span-4">
                <div className="rounded-3xl bg-primary/5 p-8 h-full">
                  <p className="uppercase tracking-[0.3em] text-[11px] text-primary font-semibold mb-6">
                    Resultado percibido
                  </p>

                  <ul className="space-y-4">
                    {currentStory.outcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-black/70"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary" />

                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 pt-8 border-t border-black/10">
                    <p className="font-heading text-xl">
                      {currentStory.patient}
                    </p>

                    <p className="text-black/50 text-sm">{currentStory.age}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* MINI STORIES */}

        <div className="grid md:grid-cols-5 xl:grid-cols-5 gap-4">
          {patientStories.map((story, index) => (
            <motion.button
              key={story.id}
              whileHover={{ y: -4 }}
              onClick={() => setActiveStory(index)}
              className={`text-left rounded-3xl border p-5 transition-all duration-500 ${activeStory === index ? "bg-primary text-white border-primary scale-[1.03] shadow-xl" : "bg-white border-[#ECE8E2]"}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[10px] uppercase tracking-[0.25em] ${activeStory === index ? "text-white/70" : "text-primary"}`}
                >
                  {story.treatment}
                </span>

                <span
                  className={`font-heading text-2xl ${activeStory === index ? "text-white/30" : "text-primary/30"}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h4 className="font-heading text-xl leading-tight mb-3 line-clamp-2">
                {story.title}
              </h4>
 

              <div
                className={`mt-5 pt-4 border-t ${activeStory === index ? "border-white/10" : "border-black/10"}`}
              >
                <p className="font-heading text-sm">{story.patient}</p>

                <p
                  className={`text-xs ${activeStory === index ? "text-white/60" : "text-black/40"}`}
                >
                  {story.age}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </UnifiedSection>
  );
}
