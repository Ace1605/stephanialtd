"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AppCtaButton } from "@/components/buttons/AppCtaButton";

const industries = [
  {
    name: "Oil & Gas",
    description: "Comprehensive solutions for upstream, midstream, and downstream operations with proven expertise in exploration, production, and refining facilities.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L1 9L12 15L21 9V17H23V9L12 3ZM18.5 9L12 12.5L5.5 9L12 5.5L18.5 9ZM12 16.5L7 13.5V15.5L12 18.5L17 15.5V13.5L12 16.5Z"/>
      </svg>
    )
  },
  {
    name: "Power",
    description: "Engineering and construction services for power generation facilities, including conventional, renewable, and hybrid energy systems.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.5 2L6.5 7H10.5V15L15.5 10H11.5V2M12 20C7.59 20 4 16.41 4 12H2C2 17.52 6.48 22 12 22S22 17.52 22 12H20C20 16.41 16.41 20 12 20Z"/>
      </svg>
    )
  },
  {
    name: "Construction",
    description: "Industrial and commercial construction services with emphasis on heavy engineering, infrastructure, and complex facility development.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.74 10.25L21.71 18.21C22.1 18.6 22.1 19.24 21.71 19.63L19.63 21.71C19.24 22.1 18.6 22.1 18.21 21.71L10.25 13.74L8.5 15.5L6.5 13.5L8.25 11.75L2.92 6.42C2.53 6.03 2.53 5.4 2.92 5L5 2.92C5.4 2.53 6.03 2.53 6.42 2.92L11.75 8.25L13.5 6.5L15.5 8.5L13.74 10.25Z"/>
      </svg>
    )
  },
  {
    name: "Telecommunications",
    description: "Infrastructure solutions for telecommunications networks, including tower installations, equipment housing, and connectivity systems.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3.5 18.5L5.5 20.5L12 14L18.5 20.5L20.5 18.5L14 12L20.5 5.5L18.5 3.5L12 10L5.5 3.5L3.5 5.5L10 12L3.5 18.5ZM12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2Z"/>
      </svg>
    )
  }
];

export const IndustriesSection = () => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="industries" className="py-20 bg-slate-900 text-white">
      <div className="app-container" ref={inViewRef}>
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Industries We Serve
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary-main mx-auto mb-4"
          />
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-blue-200 max-w-2xl mx-auto"
          >
            Specialized expertise across key industrial sectors
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition group border border-slate-700 hover:border-primary-main"
            >
              <div className="flex items-start space-x-4">
                <div className="text-primary-main group-hover:scale-110 transition-transform flex-shrink-0">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-main mb-3 group-hover:text-white transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{industry.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <AppCtaButton
            href="/contact-sales"
            className="primary-button max-w-fit gap-2 h-12 768:h-14 group x-center mx-auto"
            withArrow
            type="signup"
          >
            <span className="h-full y-center">
              Discuss Your Project
            </span>
          </AppCtaButton>
        </motion.div>
      </div>
    </section>
  );
};