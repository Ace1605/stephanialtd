"use client";

import { motion } from "framer-motion";
import { TeamMemberCard } from "./TeamMemberCard";
import { StaticImageData } from "next/image";

interface TeamMember {
  name: string;
  title: string;
  image: StaticImageData;
  alt: string;
}

interface TeamSectionProps {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export const TeamSection = ({ title, subtitle, members }: TeamSectionProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-12 768:mt-14 1180:mt-16"
    >
      <h3 className="text-center text-black text-[28px] 640:text-[36px] 1180:text-[48px] font-bold leading-[36px] 640:leading-[44px] 1180:leading-[56px] tracking-[-1px] 640:tracking-[-1.5px] mb-4">
        {title} <span className="text-gradient">Team</span>
      </h3>
      <p className="text-center text-neutral-600 text-base 768:text-lg max-w-2xl mx-auto mb-12 768:mb-16">
        {subtitle}
      </p>

      <div className="grid 640:grid-cols-2 1024:grid-cols-3 gap-8 1024:gap-12">
        {members.map((member, index) => (
          <div key={member.name} className={""}>
            <TeamMemberCard {...member} delay={0.1 * (index + 1)} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
