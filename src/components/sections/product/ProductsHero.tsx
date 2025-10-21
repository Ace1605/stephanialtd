"use client";

import { HeroCtaPair } from "@/components/commons/hero/HeroCtaPair";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  lastWord?: string;
  description: string;
  image: StaticImageData;
  buttonText?: string;
  id: string;
  continuation?: string;
  imageClass?: string;
}

export const ProductsHero = ({
  title,
  lastWord,
  description,
  image,
  buttonText,
  id,
  continuation,
  imageClass,
}: Props) => {
  return (
    <section
      id={id}
      className={
        "py-16 overflow-hidden 640:py-20 1024:pb-0 1024:pt-12 1180:pb-6 1180:pt-14 1400:pb-12 1400:pt-20 1600:pt-28"
      }
    >
      <div className={"app-container"}>
        <div className="grid  768:flex gap-10 960:gap-14 768:justify-between">
          <div className={"m-auto w-full 768:ml-0 max-w-[580px]"}>
            <motion.h5
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
              }}
              className={
                "text-center 768:text-left text-black text-[40px] 640:text-[48px] 1180:text-[58px] leading-[49px] 640:leading-[60px] 1180:leading-[78px] tracking-[-1.8px] 640:tracking-[-3.85px] font-bold"
              }
            >
              {title} <br />
              <span className="text-gradient">{lastWord}</span>
              {continuation}
            </motion.h5>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="subtitle 768:mx-auto 768:ml-0 max-w-[460px] text-center 768:text-left mt-5"
            >
              {description}
            </motion.p>
            <HeroCtaPair target="_blank" buttonText={buttonText} justifyLeft />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className={"w-full"}
          >
            <div>
              <Image
                src={image}
                alt="people"
                className={clsx(imageClass, "object-contain rounded-2xl")}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
