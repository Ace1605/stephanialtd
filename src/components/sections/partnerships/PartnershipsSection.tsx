"use client";

import { AppCtaButton } from "@/components/buttons/AppCtaButton";
import enviro from "/public/assets/partners/enviro.png";
import desautel from "/public/assets/partners/desautel.png";
import electrolux from "/public/assets/partners/electrolux.svg";
import stracu from "/public/assets/partners/stracu.png";
import rwvvales from "/public/assets/partners/rwvvales.avif";
import shipham from "/public/assets/partners/shipham.svg";
import hero_img from "/public/assets/partners/envirovalveimage.png";
import des from "/public/assets/partners/desauletimage.png";
import electro from "/public/assets/partners/electrolux.png";
import stra from "/public/assets/partners/stra.png";
import rmv from "/public/assets/partners/rmv.png";
import ship from "/public/assets/partners/shipham.png";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export const PartnershipsSection = () => {
  const [stackOrder, setStackOrder] = useState<number[]>([]);
  const options = [
    {
      title: (
        <motion.h4
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="text-slate-900"
        >
          ENVIRO VALVE
        </motion.h4>
      ),
      logo: enviro,
      subtitle: "Environmental Control Valves",
      src: hero_img,
      link: "https://envirovalve.net/",
    },
    {
      title: (
        <motion.h4
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="text-white"
        >
          DESAUTEL
        </motion.h4>
      ),
      logo: desautel,
      src: des,
      subtitle: "Safety & Fire Protection",
      link: "https://www.desautel.fr/fr/",
      bg: "/assets/home/secondBannerImage.jpg",
    },
    {
      title: (
        <motion.h4
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="text-slate-900"
        >
          ELECTROLUX
        </motion.h4>
      ),
      logo: electrolux,
      src: electro,
      subtitle: "Industrial Equipment",
      link: "https://www.electroluxgroup.com/en/",
    },
    {
      title: (
        <motion.h4
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="text-white"
        >
          STRACU VALVES
        </motion.h4>
      ),
      logo: stracu,
      src: stra,
      subtitle: "Specialized Valve Technology",
      link: "https://www.stracau.com/en/stracau-industrial-valves-france",
      bg: "/assets/home/firstBannerImage.jpg",
    },
    {
      title: (
        <motion.h4
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="text-white"
        >
          RMV VALVES
        </motion.h4>
      ),
      logo: rwvvales,
      src: rmv,
      subtitle: "Industrial Valve Solutions",
      link: "https://www.rmvvalves.com/",
      bg: "/assets/home/secondBannerImage.jpg",
    },
    {
      title: (
        <motion.h4
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="text-slate-900"
        >
          SHIPHAM VALVES
        </motion.h4>
      ),
      logo: shipham,
      src: ship,
      subtitle: "Pressure Control Systems",
      link: "https://www.shiphamvalves.com/",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section id={"partnerships"} className={"app-container mt-14 768:mt-28"}>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
        }}
        className={
          "my-7 font-bold text-center mx-auto font-primary text-black text-[44px] 480:text-[60px] 640:text-[91px] leading-[50px] 480:leading-[64px] 640:leading-[95px] w-full 768:w-3/4"
        }
      >
        Our Strategic Partners
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className="mt-3 subtitle text-center mx-auto mb-12 max-w-3xl"
      >
        Collaborating with world-class OEM manufacturers to deliver cutting-edge
        engineering solutions. Our strategic partnerships ensure access to
        premium equipment, advanced technology, and comprehensive support for
        complex industrial projects.
      </motion.p>
      <div ref={ref} className="relative h-full">
        {options.map((option, index) => {
          if (inView && !stackOrder.includes(index)) {
            setStackOrder((prev) => [...prev, index]);
          }
          const penultimate = options.length - 2 === index;
          const isLast = options.length - 1 === index;
          const top = 100 * (index + 1);
          return (
            <div
              key={index}
              className={clsx(
                option.bg ? "pl-9 640:pl-14" : "px-9 640:px-14",
                "mb-10 rounded-3xl relative",
                inView && "sticky top-24 w-full",
                isLast && "!bg-black"
              )}
              style={{
                background: option.bg
                  ? `url('${option.bg}')`
                  : "linear-gradient(145deg, #ffffff 0%, #f8fafc 40%, #e2e8f0 100%)",
                zIndex: index * 2,
                top: inView && index !== 0 ? `${top}px` : "",
              }}
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="grid 1024:flex justify-between gap-8 1024:gap-1 relative"
              >
                <div className="flex flex-col justify-between py-12">
                  <Image
                    className="max-h-[50px] w-auto object-contain object-left"
                    src={option.logo}
                    priority
                    alt={`${option.title} logo`}
                  />
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 1.2,
                    }}
                    className="mt-6"
                  >
                    <>{option.title}</>
                    <p
                      className={clsx(
                        option.bg && "text-white",
                        !option.bg && "text-slate-700",
                        "768:max-w-[250px] font-secondary font-medium"
                      )}
                    >
                      {option.subtitle}
                    </p>
                  </motion.div>
                </div>
                <div className="relative pt-12">
                  <Image
                    className={clsx(
                      penultimate
                        ? "w-full max-w-[370px] 1024:max-w-[400px] mr-5 rounded-2xl"
                        : "w-full max-w-[370px] 1024:max-w-[500px] rounded-2xl",
                      index === 1 &&
                        "w-full max-w-[370px] object-cover 1024:max-w-[600px] rounded-2xl"
                    )}
                    src={option.src}
                    priority
                    alt={`${option.title} showcase`}
                  />
                  <div
                    className={clsx(
                      option.bg ? "bottom-10 right-16" : "-right-10 bottom-14",
                      "absolute animate-float"
                    )}
                  >
                    <AppCtaButton
                      href={option.link}
                      type={"signin"}
                      className={
                        "x-between group w-[170px] h-10 gap-2 primary-button shadow-sm"
                      }
                      target="_blank"
                      withArrow
                    >
                      <span className="h-full text-sm y-center">
                        View Partner
                      </span>
                    </AppCtaButton>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
