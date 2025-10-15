"use client";

import { motion } from "framer-motion";
import { AppCtaButton } from "@/components/buttons/AppCtaButton";

export function PartnershipsHero() {
  return (
    <section className="relative py-20 640:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #0194a3 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #0194a3 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="app-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full border border-blue-400/30 mb-6">
              Strategic Partnerships
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl 640:text-5xl 768:text-6xl 1024:text-7xl font-bold mb-6 leading-tight"
          >
            Partnering with
            <span className="block text-gradient">Industry Leaders</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg 640:text-xl 768:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            We collaborate with world-class OEM manufacturers to deliver cutting-edge technology, 
            reliable equipment, and comprehensive support across oil & gas, power, construction, 
            and telecommunications sectors.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col 640:flex-row gap-4 justify-center items-center"
          >
            <AppCtaButton
              href="#partnerships"
              className="primary-button h-12 768:h-14 px-8 gap-2 group"
              withArrow
              type="signup"
            >
              <span className="h-full y-center">
                View Our Partners
              </span>
            </AppCtaButton>
            
            <AppCtaButton
              href="/contact-sales"
              className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 h-12 768:h-14 flex items-center"
            >
              Partnership Inquiries
            </AppCtaButton>
          </motion.div>

          {/* Partnership Value Stats */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 640:grid-cols-4 gap-6 640:gap-8 mt-16 pt-12 border-t border-blue-400/30"
          >
            <div className="text-center">
              <div className="text-2xl 640:text-3xl font-bold text-blue-400 mb-2">6+</div>
              <div className="text-blue-200 text-sm">OEM Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl 640:text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-blue-200 text-sm">Years Partnership</div>
            </div>
            <div className="text-center">
              <div className="text-2xl 640:text-3xl font-bold text-blue-400 mb-2">Global</div>
              <div className="text-blue-200 text-sm">Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl 640:text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-blue-200 text-sm">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
