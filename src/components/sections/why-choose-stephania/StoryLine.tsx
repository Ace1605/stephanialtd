"use client";

import { motion } from "framer-motion";
import { TeamSection } from "@/components/commons/team/TeamSection";
import storylineLady from "/public/assets/why_stephania/female_b.jpg";
import storylineMonitor from "/public/assets/why_stephania/female_s.jpg";
import officeMan from "/public/assets/why_stephania/male_o.jpg";

export const StoryLine = () => {
  const teamMembers = [
    {
      name: "DAVID STEVENS",
      title: "Chief Engineering Officer",
      image: storylineLady,
      alt: "Chief Engineering Officer",
    },
    {
      name: "SARAH MITCHELL",
      title: "Senior Project Manager",
      image: storylineMonitor,
      alt: "Senior Project Manager",
    },
    {
      name: "MICHAEL JOHNSON",
      title: "Lead Solutions Engineer",
      image: officeMan,
      alt: "Lead Solutions Engineer",
    },
  ];

  return (
    <section
      id={"pricing_hero"}
      className={"pt-10 overflow-hidden 640:pt-12 768:pt-16 pb-12 768:pb-16"}
    >
      <div className="app-container flex flex-col gap-4 768:px-36">
        <motion.h4
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className={
            "text-black text-[30px] tracking-[-1.05px] 640:tracking-[-1.8px] 640:text-[48px] 1180:text-[59px] leading-[39px] 640:leading-[46px] 768:leading-[58px] font-bold 1180:leading-[75px] text-left"
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
            "mt-3 text-neutral-600 text-base 768:leading-[28px] 768:text-lg font-normal"
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
            "mt-3 text-neutral-600 text-base 768:leading-[28px] 768:text-lg font-normal"
          }
        >
          Our Mission has always been to delivery quality/timely goods and
          services at a reasonable cost while ensuring that all supply chain
          processes are conducted with fairness, transparency and efficiency. We
          also aim to be recognized for our innovative approach to sourcing,
          development of strategic alliances and a progressive model of best
          practices.
        </motion.p>
        <TeamSection
          title="Our Creative"
          subtitle="Meet the dedicated professionals who bring innovation and expertise to every project we undertake."
          members={teamMembers}
        />
      </div>
    </section>
  );
};
