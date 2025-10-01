"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import clsx from "clsx";
import { AppCtaButton } from "@/components/buttons/AppCtaButton";

export function PartnershipsSection() {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const partners = [
    {
      title: "ENVIRO VALVE",
      logo: "/assets/partners/enviro.png",
      subtitle: "Environmental Valve Solutions & Technology",
      src: "/assets/home/hero-img.png",
      link: "#",
      bg: "/assets/home/firstBannerImage.jpg",
    },
    {
      title: "DESAUTEL",
      logo: "/assets/partners/desautel.jpg",
      src: "/assets/home/integrations.png",
      subtitle: "Advanced Engineering & Industrial Solutions",
      link: "#",
      bg: "/assets/home/secondBannerImage.jpg",
    },
    {
      title: "ELECTROLUX",
      logo: "/assets/partners/electrolux.svg",
      src: "/assets/home/powering-img.png",
      subtitle: "Global Leader in Home & Professional Appliances",
      link: "#",
    },
    {
      title: "RMV VALVES",
      logo: "/assets/partners/enviro.png",
      src: "/assets/home/stay-ahead-img.png",
      subtitle: "Precision Valve Manufacturing & Engineering",
      link: "#",
      bg: "/assets/home/thirdBannerImage.jpg",
    },
    {
      title: "STRACU VALVES",
      logo: "/assets/partners/electrolux.svg",
      src: "/assets/home/monitor.png",
      subtitle: "Structural & Commercial Valve Solutions",
      link: "#",
    },
    {
      title: "SHIPHAM VALVES",
      logo: "/assets/partners/desautel.jpg",
      src: "/assets/home/market.png",
      subtitle: "Marine & Industrial Valve Specialists",
      link: "#",
      bg: "/assets/home/secondBannerImage.jpg",
    },
  ];

  return (
    <section id={"partnerships"} className={"app-container mt-14"}>
      <div ref={inViewRef} className="grid grid-cols-1 1024:grid-cols-2 gap-8">
        {partners.map((partner, index) => {
          const isLast = partners.length - 1 === index;
          const hasBackground = !!partner.bg;

          return (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              className={clsx(
                hasBackground ? "pl-9 640:pl-14" : "px-9 640:px-14",
                "rounded-3xl relative group",
                "shadow-md hover:shadow-lg transition-all duration-300",
                isLast && "!bg-black"
              )}
              style={{
                background: hasBackground
                  ? `url('${partner.bg}')`
                  : "linear-gradient(160.32deg, #fff5e6 40%, #f1ebf4 80%)",
              }}
            >
              <div className="grid 1024:flex flex-col gap-6 relative py-8">
                <div className="flex flex-col justify-between">
                  <Image
                    className="max-h-[50px] w-auto object-contain object-left mb-4"
                    src={partner.logo}
                    width={200}
                    height={50}
                    priority
                    alt={`${partner.title} logo`}
                  />

                  <div>
                    <h4
                      className={clsx(
                        "text-2xl 640:text-3xl font-bold tracking-normal mb-2",
                        hasBackground && (index % 2 !== 0 || index === 0)
                          ? "text-white"
                          : "text-black",
                        isLast && "!text-white"
                      )}
                    >
                      {partner.title}
                    </h4>
                    <p
                      className={clsx(
                        "768:max-w-[250px] font-secondary font-medium",
                        hasBackground && (index % 2 !== 0 || index === 0)
                          ? "text-gray-200"
                          : "text-neutral-600",
                        isLast && "!text-gray-300"
                      )}
                    >
                      {partner.subtitle}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div
                    className={clsx(
                      hasBackground ? "bottom-4 right-4" : "-right-8 bottom-4",
                      "absolute"
                    )}
                  >
                    <AppCtaButton
                      href={partner.link}
                      type={"signin"}
                      className={
                        "x-between group h-10 gap-2 primary-button shadow-md hover:shadow-lg transition-all duration-200"
                      }
                      target="_blank"
                      withArrow
                    >
                      <span className="h-full text-sm y-center">
                        Learn More
                      </span>
                    </AppCtaButton>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
