import { motion } from "motion/react";
import React from "react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof any;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-1 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ small, large, image }, i) => (
                <div
                  className="p-0 rounded-3xl   shadow-lg shadow-primary/10 max-w-xs w-full"
                  key={i}
                >
                  {small && (
                    <>
                      <div className="h-[200px] rounded-[28px] overflow-hidden">
                        <img
                          src={image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </>
                  )}
                  {large && (
                    <>
                      <div className="col-span-2 row-span-2 h-[420px] rounded-[32px] overflow-hidden">
                        <img
                          src={image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
