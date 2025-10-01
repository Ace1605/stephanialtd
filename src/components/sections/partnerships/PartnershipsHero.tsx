"use client";

import { motion } from "framer-motion";

export function PartnershipsHero() {
  return (
    <section className="app-container pt-20 pb-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl 768:text-6xl font-bold font-primary text-black mb-6"
        >
          Our Strategic Partners
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg 768:text-xl text-neutral-600 font-secondary max-w-4xl mx-auto"
        >
          We collaborate with industry-leading companies to deliver exceptional
          engineering solutions across construction, energy, and oil & gas
          sectors. Our partnerships enable us to provide cutting-edge
          technologies and maintain the highest quality standards.
        </motion.p>
      </div>
    </section>
  );
}
