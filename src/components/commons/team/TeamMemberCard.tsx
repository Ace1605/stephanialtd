"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface TeamMemberCardProps {
  name: string;
  title: string;
  image: StaticImageData;
  alt: string;
  delay?: number;
}

export const TeamMemberCard = ({
  name,
  title,
  image,
  alt,
  delay = 0,
}: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="relative mb-6 mx-auto h-[340px] 768:h-[360px]">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover rounded-2xl shadow-lg"
        />
      </div>
      <p className="text-black font-bold text-lg 768:text-xl mb-2">{name}</p>
      <p className="text-gradient font-semibold text-sm 768:text-base tracking-wide">
        {title}
      </p>
    </motion.div>
  );
};
