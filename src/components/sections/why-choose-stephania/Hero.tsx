"use client";

import { HeroCtaPair } from "@/components/commons/hero/HeroCtaPair";
import coat_lady from "/public/assets/why_stephania/c1.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      id={"about_hero"}
      className={"pt-12 overflow-hidden 640:pt-16 768:pt-20 pb-6 768:pb-8"}
    >
      <div className={"app-container 640:mb-32"}>
        <div className="960:flex gap-10 1280:gap-20">
          <div className={"mx-auto"}>
            <div className="">
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                }}
                className={
                  "max-w-[760px] text-black text-center mx-auto font-bold text-[50px] 640:text-[54px] 1180:text-[82px] leading-[49px] 640:leading-[66px] 1180:leading-[80px] tracking-[-2.5px] 1180:tracking-[-5.28px]"
                }
              >
                We provide Bespoke & Off-the-peg{" "}
                <span className="text-gradient">Engineering Services</span>
              </motion.h4>
            </div>
            <HeroCtaPair
              buttonUrl="/contact-sales"
              withArrow
              target="_parent"
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className="px-4 768:px-8 mt-10 768:mt-16 1180:mt-24"
      >
        <Image
          src={coat_lady}
          alt="about_hero"
          priority
          className="object-cover w-full object-center 768:object-cover min-h-[280px] 768:h-none rounded-3xl max-h-[700px]"
        />
      </motion.div>
    </section>
  );
};
