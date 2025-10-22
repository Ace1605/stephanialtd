"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Stars } from "@/components/svgs/Stars";
import { ArrowRight } from "@/components/svgs/Arrows";
import Link from "next/link";

const services = [
  {
    title: "Engineering Excellence Delivered",
    description:
      "Comprehensive engineering solutions from concept to commissioning, including design, analysis, and technical consultation for complex industrial projects.",
    image: "/assets/home/eng.jpg",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
    link: "/services/engineering-services",
  },
  {
    title: "Construction & Project Management",
    description:
      "End-to-end construction management and execution services, delivering projects on time and within budget with uncompromising quality standards.",
    image: "/assets/businesses/1223.jpg",
    bgColor: "bg-gradient-to-br from-teal-50 to-cyan-100",
    link: "/services/construction",
  },
  {
    title: "Strategic Procurement Solutions",
    description:
      "Strategic procurement services ensuring optimal sourcing, vendor management, and supply chain efficiency for your critical projects.",
    image: "/assets/businesses/343.jpg",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
    link: "/services/procurement",
  },
  {
    title: "Offshore & Marine Operations",
    description:
      "Expert offshore solutions for challenging marine environments, including platform services, subsea operations, and offshore installations.",
    image: "/assets/businesses/372.jpg",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
    link: "/services/offshore-solutions",
  },
];

export const ServicesSection = () => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 768:py-32 bg-white">
      <div className="app-container" ref={inViewRef}>
        {/* Hero Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl 640:text-5xl 768:text-6xl 1024:text-7xl font-bold text-black mb-8 leading-tight"
          >
            Industrial. Engineering.{" "}
            <span className="text-gradient">Excellence.</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg 768:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            Deliver comprehensive engineering solutions, manage complex
            construction projects, and optimize industrial processes all from
            one expert team built for excellence.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 768:grid-cols-2 gap-8 1024:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              {/* Service Card */}
              <div
                className={`${service.bgColor} rounded-3xl p-8 768:p-12 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              >
                {/* Image Container */}
                <div className="relative mb-8 overflow-hidden rounded-2xl transition-all duration-300">
                  <div className="relative h-48 640:h-56 768:h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover w-full transform group-hover:scale-105 transition-transform duration-500"
                      priority={index < 2}
                    />
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute top-2 right-2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/2 rounded-full flex items-center justify-center">
                    <Stars />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl 768:text-3xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 text-base 768:text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href={service.link}
                    className="pt-4 inline-flex focus:pb-4 focus:px-4 items-center text-primary-main font-semibold group-hover:gap-3 gap-2 transition-all duration-300 cursor-pointer"
                  >
                    <span>Learn more</span>
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
