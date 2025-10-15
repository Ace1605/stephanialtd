"use client";

import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import heroImage from "/public/assets/home/hero1.jpg";
import secondImage from "/public/assets/home/hero2.jpg";
import thirdImage from "/public/assets/home/hero3.jpg";
import { useEffect, useState } from "react";
import { AppCtaButton } from "@/components/buttons/AppCtaButton";

export const imgSrcs: StaticImageData[] = [heroImage, secondImage, thirdImage];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [currentButtonIndex, setCurrentButtonIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const words: string[] = [
    `${" "}Engineering Excellence`,
    `${" "}Construction & Procurement`,
    `${" "}Industrial Solutions`,
  ];

  const paragraphs: string[] = [
    "Delivering comprehensive solutions across oil & gas, power, construction, and telecommunications sectors worldwide with proven expertise and innovation.",
    "End-to-end engineering, construction, and procurement services ensuring optimal project delivery with uncompromising quality standards.",
    "Specialized solutions for complex industrial environments including offshore, onshore, and midstream operations with focus on safety and efficiency.",
  ];

  const buttonTexts: string[] = ["Get Started", "Our Services", "Contact Us"];
  useEffect(() => {
    let currentIndex = 0;

    const updateContent = () => {
      const changingWord = document.getElementById("changingWord");
      if (changingWord) {
        changingWord.textContent = words[currentIndex];
      }

      // Update paragraph and button immediately to sync with the word
      setCurrentParagraphIndex(currentIndex);
      setCurrentButtonIndex(currentIndex);

      // Start transition for images
      const nextIndex = (currentIndex + 1) % words.length;
      setNextImageIndex(nextIndex);
      setIsTransitioning(true);

      // After a short delay, complete the image transition
      setTimeout(() => {
        setCurrentImageIndex(nextIndex);
        setIsTransitioning(false);
      }, 400);

      currentIndex = nextIndex;
    };

    // Set initial content
    updateContent();

    const interval = setInterval(updateContent, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id={"hero"}
      className={
        "relative py-16 overflow-hidden 640:py-20 1024:pb-8 1024:pt-12 1180:pb-16 1180:pt-20 1400:pb-20 1400:pt-28"
      }
    >
      {/* Background images with smooth transition */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${imgSrcs[currentImageIndex].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: isTransitioning ? 0 : 1,
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${imgSrcs[nextImageIndex].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: isTransitioning ? 1 : 0,
        }}
      />
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 app-container flex items-center justify-center 768:justify-start min-h-[400px] 768:min-h-[500px] 1024:min-h-[600px]">
        <div className="w-full">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className={
              "text-center font-bold text-white text-[42px] 360:text-[48px] 390:text-[50px] 640:text-[54px] 1180:text-[72px] 1400:text-[82px] leading-[45px] 360:leading-[49px] 640:leading-[66px] 1180:leading-[70px] 1400:leading-[80px] tracking-[-2.5px] 1180:tracking-[-5.28px] drop-shadow-lg"
            }
          >
            <span id="changingWord" className={"text-gradient"}>
              Engineering Excellence{" "}
            </span>
          </motion.h1>

          <motion.p
            key={currentParagraphIndex}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
            }}
            className={
              "mt-4 1024:mt-2 1300:mt-5 text-white max-w-[550px] mx-auto leading-[24px] 1024:leading-[26px] 1300:leading-[30px] tracking-[-0.32px] 768:tracking-[-0.4px] text-base 1300:text-lg font-normal text-center drop-shadow-md"
            }
          >
            {paragraphs[currentParagraphIndex]}
          </motion.p>

          <AppCtaButton
            href={"#"}
            className={
              "primary-button max-w-fit mt-4 640:mt-6 gap-2 h-12 768:h-14 group x-center mx-auto"
            }
            withArrow
            type={"signup"}
          >
            <span className="h-full y-center">
              {buttonTexts[currentButtonIndex]}
            </span>
          </AppCtaButton>
        </div>
      </div>

      {/* Hidden image for preloading and animation reference */}
      <div className="hidden">
        <div id="changingImages" />
      </div>
    </section>
  );
};
