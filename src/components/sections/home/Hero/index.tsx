"use client";

import { HeroCtaPair } from "@/components/commons/hero/HeroCtaPair";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import heroImage from "/public/assets/home/home-hospitality.png";
import secondImage from "/public/assets/home/home-fashion.png";
import thirdImage from "/public/assets/home/home-retail.png";
import fourthImage from "/public/assets/home/home-transportation.png";
import fifthImage from "/public/assets/home/home-education.png";
import sixImage from "/public/assets/home/home-online.png";
import { useEffect, useState } from "react";
import { startWordChanging } from "@/helpers/converters/hyphenateString";
import { ImageDownloadTrigger } from "@/components/commons/hero/ImageDownloadTrigger";

export const imgSrcs: StaticImageData[] = [
  heroImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
  sixImage,
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const words: string[] = [
    `${" "}Fashion`,
    `${" "}Retail Stores`,
    `${" "}Transportation`,
    `${" "}Education`,
    `${" "}Online stores`,
    `${" "}Hospitality`,
  ];
  useEffect(() => {
    startWordChanging(
      "changingWord",
      "changingImages",
      words,
      imgSrcs,
      4,
      setCurrentImageIndex
    );

    return () => {};
  }, []);

  return (
    <section
      id={"hero"}
      className={
        "py-16 overflow-hidden 640:py-20 1024:pb-8 1024:pt-12 1180:pb-16 1180:pt-20 1400:pb-20 1400:pt-28"
      }
    >
      <div className="app-container grid 768:grid-cols-2 items-center gap-10 768:gap-20">
        <div>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className={
              "text-center 768:text-left font-bold text-black text-[42px] 360:text-[48px] 390:text-[50px] 640:text-[54px] 1180:text-[72px] 1400:text-[82px] leading-[45px] 360:leading-[49px] 640:leading-[66px] 1180:leading-[70px] 1400:leading-[80px] tracking-[-2.5px] 1180:tracking-[-5.28px]"
            }
          >
            Simplifying Payment Processes for{" "}
            <span className={""}>
              <span id="changingWord" className={"text-gradient"}>
                Hospitality{" "}
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className={
              "mt-4 1024:mt-2 1300:mt-5 text-neutral-1000 leading-[24px] 1024:leading-[26px] 1300:leading-[30px] tracking-[-0.32px] 768:tracking-[-0.4px] text-base 1300:text-lg 960:max-w-[480px] font-normal text-center 768:text-left 768:w-5/6 1024:w-full 1300:w-2/3"
            }
          >
            The easiest way to setup your business bank accounts, send/receive
            payments and verify customer bank transfers instantly.
          </motion.p>

          <HeroCtaPair target="_blank" justifyLeft />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="relative 768:flex justify-end"
        >
          <Image
            width={600}
            height={400}
            src={imgSrcs[currentImageIndex].src}
            id="changingImages"
            className="w-full object-contain 1024:max-w-[380px] 1300:max-w-[440px] 1400:max-w-[480px] 1600:max-w-[565px]"
            alt="hero_image"
          />
          {/* <ImageDownloadTrigger /> */}
        </motion.div>
      </div>
    </section>
  );
};
