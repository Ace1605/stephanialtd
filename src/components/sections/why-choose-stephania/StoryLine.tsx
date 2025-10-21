"use client";

import { motion } from "framer-motion";
import { TeamSection } from "@/components/commons/team/TeamSection";
import Image from "next/image";
import nwokeImage from "/public/assets/team/nwoke.jpeg";
import thelmaImage from "/public/assets/team/thelma.jpeg";
import johnImage from "/public/assets/team/john.jpeg";
import emmaImage from "/public/assets/team/emma.jpeg";
import worker from "/public/assets/why_stephania/workers.jpeg";

export const StoryLine = () => {
  const teamMembers = [
    {
      name: "LADY CHRISTY NWOKE",
      title: "MD Stephania Support Services Ltd",
      image: nwokeImage,
      alt: "MD Stephania Support Services Ltd",
    },
    {
      name: "THELMA PERE",
      title: "Accountant • Expeditor",
      image: thelmaImage,
      alt: "Accountant and Expeditor",
    },
    {
      name: "JOHN HOWARD",
      title: "Procurement Manager",
      image: johnImage,
      alt: "Procurement Manager",
    },
    {
      name: "EMMANUEL BOB",
      title: "Procurement Lead • Logistics Manager",
      image: emmaImage,
      alt: "Procurement Lead and Logistics Manager",
    },
  ];

  return (
    <section
      id={"pricing_hero"}
      className={"pt-10 overflow-hidden 640:pt-12 768:pt-16 pb-12 768:pb-16"}
    >
      <div className="app-container flex flex-col gap-4">
        <motion.h4
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className={
            "text-black text-[30px] tracking-[-1.05px] 640:tracking-[-1.8px] 640:text-[48px] 1180:text-[59px] leading-[39px] 640:leading-[46px] 768:leading-[58px] font-bold 1180:leading-[75px] text-center"
          }
        >
          Our <span className="text-gradient">Experience</span> and Foundation
        </motion.h4>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className={
            "mt-3 text-neutral-600 text-center max-w-[1000px] mx-auto text-base 768:leading-[28px] 768:text-lg font-normal"
          }
        >
          We are established on the foundation of quality, delivery and project
          satisfaction our decade of experience across the boards of the
          Engineering Industry
        </motion.p>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className={
            "mt-3 text-neutral-600 text-center max-w-[1100px] mx-auto text-base 768:leading-[28px] 768:text-lg font-normal"
          }
        >
          Our Mission has always been to delivery quality/timely goods and
          services at a reasonable cost while ensuring that all supply chain
          processes are conducted with fairness, transparency and efficiency. We
          also aim to be recognized for our innovative approach to sourcing,
          development of strategic alliances and a progressive model of best
          practices.
        </motion.p>

        {/* Image section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 768:mt-16 mb-8 768:mb-12"
        >
          <Image
            src={worker}
            alt="Stephania Engineering Excellence"
            className="w-full h-auto rounded-2xl object-cover max-h-[450px] 768:max-h-[600px] object-center"
          />
        </motion.div>

        <TeamSection
          title="Leadership"
          subtitle="Meet the experienced professionals driving Stephania's success in engineering and procurement excellence."
          members={teamMembers}
        />
      </div>
    </section>
  );
};
