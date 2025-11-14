"use client";

import { HeroCtaPair } from "@/components/commons/hero/HeroCtaPair";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id={"about_hero"}
      className={"pt-12 overflow-hidden 640:pt-16 768:pt-20 pb-6 768:pb-8"}
    >
      <div className={"app-container"}>
        <div className="960:flex items-center gap-10 1280:gap-20">
          {/* Content on the left */}
          <div className="960:w-1/2">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
              }}
              className={
                "text-black text-left font-bold text-[40px] 640:text-[48px] 1180:text-[60px] leading-[42px] 640:leading-[52px] 1180:leading-[68px] tracking-[-2px] 1180:tracking-[-3.2px] mb-6"
              }
            >
              Bespoke{" "}
              <span className="text-gradient">Engineering Solutions</span>
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="text-neutral-600 text-lg 768:text-xl leading-relaxed mb-8 768:pr-10"
            >
              Stephania a woman-owned, engineering, procurement, constructions
              located in USA, UK, NIGERIA offers bespoke engineering solutions
            </motion.p>
            <HeroCtaPair
              buttonUrl="/contact-sales"
              withArrow
              target="_parent"
              className="flex items-center justify-start"
            />
          </div>

          {/* Image on the right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="960:w-1/2 mt-10 960:mt-0"
          >
            <div className="min-h-[250px] 768:min-h-[400px] max-h-[500px] 1180:max-h-[600px] relative">
              <iframe
                src="https://player.vimeo.com/video/1135014504?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1"
                className="w-full absolute top-0 h-full"
                style={{
                  border: "1px solid #0194a3",
                  borderRadius: "24px",
                  clipPath: "inset(0 round 24px)",
                }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Stephania Video"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
