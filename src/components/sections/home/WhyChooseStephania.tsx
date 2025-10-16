"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { AppCtaButton } from "@/components/buttons/AppCtaButton";
import { useState, useEffect } from "react";
import { Users } from "@/components/svgs/Users";
import { CustomCheck } from "@/components/svgs/CustomCheck";
import { Cap } from "@/components/svgs/Cap";

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
      icon: <Cap className="w-12 h-12" />,
      number: "15",
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: <CustomCheck className="w-12 h-12" />,
      number: "200",
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      icon: <Users className="w-12 h-12" />,
      number: "50",
      suffix: "+",
      label: "Expert Team",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C14.8,12.4 14.1,13.2 13.2,13.2H10.8C9.9,13.2 9.2,12.4 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z" />
        </svg>
      ),
      number: "100",
      suffix: "%",
      label: "Safety Focus",
    },
  ];

  return (
    <section id="why_choose_stephania" className="py-0">
      <div ref={inViewRef}>
        {/* Main Content Section */}
        <div className="grid 1024:grid-cols-2 gap-8 1024:gap-12 pt-16 pb-24 app-container">
          {/* Left - Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden"
          >
            <Image
              src="/assets/home/homeabout.jpg"
              alt="Heavy duty engineering equipment"
              fill
              className="object-cover object-center rounded-3xl"
              priority
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-white flex items-center"
          >
            <div className="max-w-lg">
              <h2 className="text-black font-bold text-3xl 640:text-4xl 768:text-5xl leading-tight mb-6">
                Engineering Solutions{" "}
                <span className="text-gradient">Built to Last</span>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4 text-base 640:text-lg">
                Stephania Ltd is a premier engineering, construction, and
                procurement company with a proven track record of delivering
                exceptional results across multiple industries. Our commitment
                to excellence, innovation, and safety has established us as a
                trusted partner for complex industrial projects worldwide.
              </p>

              <AppCtaButton
                href="/about"
                type="signin"
                className="bg-teal-600 flex max-w-[140px] justify-center mt-7 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Learn more
              </AppCtaButton>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <div className="relative">
          {/* Background Video */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/home/bgvid.mp4" type="video/mp4" />
            </video>
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 640:p-12 1024:p-16">
            {/* Header */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h3 className="text-3xl 640:text-4xl font-bold text-white mb-4">
                Driving Excellence Through
              </h3>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Proven track record of delivering world-class engineering
                solutions
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 640:grid-cols-2 1024:grid-cols-4 gap-8">
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
                      initial={{ y: 50, opacity: 0, scale: 0.9 }}
                      animate={
                        inView
                          ? { y: 0, opacity: 1, scale: 1 }
                          : { y: 50, opacity: 0, scale: 0.9 }
                      }
                      transition={{
                        duration: 0.8,
                        delay: 0.4 + index * 0.15,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        y: -10,
                        transition: { duration: 0.3 },
                      }}
                      className="group"
                    >
                      {/* Bordered Card */}
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:border-white/40">
                        {/* Icon with Circular Progress */}
                        <div className="relative mb-8">
                          <div className="relative w-20 h-20 mx-auto">
                            {/* Circular Progress Background */}
                            <svg
                              className="w-20 h-20 transform -rotate-90"
                              viewBox="0 0 80 80"
                            >
                              <circle
                                cx="40"
                                cy="40"
                                r="36"
                                stroke="rgba(255, 255, 255, 0.2)"
                                strokeWidth="8"
                                fill="transparent"
                              />
                              <motion.circle
                                cx="40"
                                cy="40"
                                r="36"
                                stroke="#0194a3"
                                strokeWidth="8"
                                fill="transparent"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={
                                  inView
                                    ? { pathLength: 0.75 }
                                    : { pathLength: 0 }
                                }
                                transition={{
                                  duration: 2,
                                  delay: 0.6 + index * 0.15,
                                  ease: "easeInOut",
                                }}
                                strokeDasharray="0 1"
                              />
                            </svg>

                            {/* Icon in Center */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-white opacity-90 transform group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Number */}
                        <div className="mb-4">
                          <span className="text-4xl 640:text-5xl font-bold text-white block">
                            {countedNumber}
                            {stat.suffix || ""}
                          </span>
                        </div>

                        {/* Label */}
                        <h3 className="text-blue-200 font-medium text-lg leading-tight group-hover:text-white transition-colors duration-300">
                          {stat.label}
                        </h3>

                        {/* Decorative Line */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: "60%" } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: 1 + index * 0.15,
                          }}
                          className="h-0.5 bg-gradient-to-r from-transparent via-primary-main to-transparent mx-auto mt-6"
                        />
                      </div>
                    </motion.div>
                  );
                };

                return <StatCard key={index} />;
              })}
            </div>

            {/* Bottom Accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center space-x-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-blue-200 text-sm font-medium">
                  Trusted by industry leaders worldwide
                </span>
                <div className="w-2 h-2 bg-primary-main rounded-full animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
