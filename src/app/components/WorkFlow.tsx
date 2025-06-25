"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export default function WorkFlow({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-gradient-to-br from-[#f7f3ef] to-[#fdfcfb] py-20 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-6">
          How <span className="text-[#9e6a4f] italic">It Works</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          Understand the step-by-step flow to start using our platform. We’ve made it
          super simple to get started, with clear benefits at each stage.
        </p>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto pb-20">
        {data.map((item, index) => (
          <section
            key={index}
            aria-label={`Timeline step: ${item.title}`}
            className="flex flex-col md:flex-row justify-start pt-8 md:pt-32 gap-6 md:gap-10"
          >
            {/* Left Sticky Column */}
            <div className="sticky z-40 top-40 self-start flex flex-col md:flex-row items-center max-w-xs lg:max-w-sm md:w-full">
              {/* Circle Node */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#fdfcfb] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#9e6a4f] border-2 border-white shadow-md" />
              </div>
              {/* Title for large screens */}
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-semibold text-gray-700">
                {item.title}
              </h3>
            </div>

            {/* Right Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative w-full bg-white border-l-4 border-[#9e6a4f] shadow-md rounded-md px-6 py-5 md:px-8 md:py-6 group transition-all duration-300 hover:shadow-lg"
            >
              {/* Optional icon or badge for flair */}
              <div className="absolute -left-3 top-5 w-6 h-6 rounded-full bg-[#9e6a4f] text-white text-sm flex items-center justify-center shadow-sm">
                <span className="font-bold">✓</span>
              </div>

              {/* Content */}
              <h4 className="text-lg font-semibold text-[#3f3f46] mb-2">
                {item.title}
              </h4>
              <span className="text-base text-gray-700 leading-relaxed group-hover:text-gray-900">
                {item.content}
              </span>
            </motion.div>
          </section>
        ))}

        {/* Scroll Bar */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-[2.5rem] sm:left-8 top-0 w-[2px] bg-gradient-to-b from-transparent via-[#d4b8a8] to-transparent
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {isMounted && (
            <motion.div
              style={{ height: heightTransform, opacity: opacityTransform }}
              className="absolute inset-x-0 top-0 w-[2px] bg-[#9e6a4f] rounded-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}
