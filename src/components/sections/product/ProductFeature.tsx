"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import clsx from "clsx";

interface Props {
  featureTitle?: ReactNode;
  lastWord?: string;
  continuation?: string;
  subtitle: string;
  image?: StaticImageData;
  videoSrc?: string;
  hClassName?: string;
  pClassName?: string;
  imageClass?: string;
  videoClass?: string;
}

export const ProductFeature = ({
  featureTitle,
  lastWord,
  continuation,
  subtitle,
  image,
  videoSrc,
  hClassName,
  pClassName,
  imageClass,
  videoClass,
}: Props) => {
  return (
    <section
      id={"product_feature"}
      className={
        "app-container pt-10 overflow-hidden 640:pt-12 768:pt-14 pb-14 768:pb-24"
      }
    >
      <h3
        className={clsx(
          "text-left text-black text-[38px] 640:text-48px] 1180:text-[60px] leading-[48px] 650:leading-[54px] 1180:leading-[64px] tracking-[-1.6px] 768:tracking-[-1.8px] 768:w-[700px] font-bold",
          hClassName
        )}
      >
        {featureTitle}
        <span>
          <span className={"text-gradient"}>{lastWord}</span>
        </span>
        {continuation}
      </h3>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className={clsx(
          "mt-2 mb-2 text-black text-base 768:leading-[28px] 768:text-[18px] font-normal text-left 768:w-[750px] pr-2",
          pClassName
        )}
      >
        {subtitle}
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className="relative flex flex-col gap-4"
      >
        {videoSrc ? (
          <video
            className={clsx(
              videoClass,
              "mt-7 768:mt-10 object-cover rounded-3xl object-center min-h-[280px] max-h-[500px] w-full"
            )}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : image ? (
          <Image
            className={clsx(
              imageClass,
              "mt-7 768:mt-10 object-cover rounded-3xl object-center min-h-[280px] max-h-[500px]"
            )}
            src={image}
            priority
            alt="stephania_product_feature_img"
          />
        ) : null}
      </motion.div>
    </section>
  );
};
