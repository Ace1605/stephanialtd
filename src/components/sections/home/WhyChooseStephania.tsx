"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { AppCtaButton } from "@/components/buttons/AppCtaButton";
import { useState, useEffect } from "react";

// Custom hook for count-up animation
const useCountUp = (
  endValue: number,
  inView: boolean,
  duration: number = 2000
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, inView, duration]);

  return count;
};

export const WhyChooseStephania = () => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
      ),
      number: "15",
      label: "Years of Service",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
        </svg>
      ),
      number: "60",
      label: "Operational Brigades",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
      number: "200",
      suffix: "+",
      label: "Units Engineering",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
      number: "700",
      suffix: "+",
      label: "Employees of the Company",
    },
  ];

  return (
    <section id="why_choose_stephania" className="py-0">
      <div ref={inViewRef}>
        {/* Main Content Section */}
        <div className="grid 1024:grid-cols-2 min-h-[500px] pb-8">
          {/* Left - Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden"
          >
            <Image
              src="/assets/home/heavyduty.png"
              alt="Heavy duty engineering equipment"
              fill
              className="object-cover object-left"
              priority
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-white flex items-center px-8 640:px-12 1024:px-16 py-12 640:py-16"
          >
            <div className="max-w-lg">
              <h2 className="text-black font-bold text-3xl 640:text-4xl 768:text-5xl leading-tight mb-6">
                We provide{" "}
                <span className="text-gradient">
                  Bespoke <br /> & Off-the-peg
                </span>
                <br />
                Engineering Services
              </h2>

              <p className="text-gray-600 leading-relaxed mb-2 text-base 640:text-lg">
                A subsidiary of Solafide Projects, established on the foundation
                of quality, delivery and project satisfaction our decade of
                experience across the breath of the Engineering industry.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 text-base 640:text-lg">
                Our core aim and objective has been to supply high quality goods
                and services at a reasonable cost while ensuring that all supply
                chain processes are conducted with fairness, transparency and
                efficiency. We also aim to be recognised for our innovative
                approach to sourcing, development of strategic alliances and a
                progressive mindset of best practices.
              </p>

              <AppCtaButton
                href="/about"
                type="signin"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                About us
              </AppCtaButton>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 640:grid-cols-2 1024:grid-cols-4">
          {stats.map((stat, index) => {
            const StatCard = () => {
              const targetNumber = parseInt(stat.number);
              const countedNumber = useCountUp(
                targetNumber,
                inView,
                2000 + index * 200
              );

              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={
                    inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, 
                      ${index === 0 ? "#7f1d1d, #991b1b" : ""}
                      ${index === 1 ? "#991b1b, #b91c1c" : ""}
                      ${index === 2 ? "#dc2626, #b91c1c" : ""}
                      ${index === 3 ? "#dc2626, #ef4444" : ""}
                    )`,
                  }}
                >
                  <div className="p-8 640:p-12 text-center text-white min-h-[200px] flex flex-col justify-center">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className="text-white opacity-90">{stat.icon}</div>
                    </div>

                    {/* Number */}
                    <div className="mb-4">
                      <span className="text-4xl 640:text-5xl 768:text-6xl font-bold text-yellow-400">
                        {countedNumber}
                        {stat.suffix || ""}
                      </span>
                    </div>

                    {/* Label */}
                    <h3 className="text-white font-medium text-base 640:text-lg leading-tight">
                      {stat.label}
                    </h3>
                  </div>
                </motion.div>
              );
            };

            return <StatCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};
