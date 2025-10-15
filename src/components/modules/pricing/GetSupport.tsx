"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import supportImage from "/public/assets/home/sales.jpg";
import { AppCtaButton } from "@/components/buttons/AppCtaButton";

export const GetSupport = () => {
  return (
    <section
      id={"hero"}
      className={"py-10 overflow-hidden 640:py-20 768:py-32"}
    >
      <div className="app-container grid 768:grid-cols-2 items-center gap-8">
        <div>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className={
              "text-center 768:text-left text-black text-[38px] 640:text-[48px] 1180:text-[64px] leading-[46px] 640:leading-[60px] 1180:leading-[80px] 768:w-11/12 font-bold"
            }
          >
            Partner with{" "}
            <span className={"text-gradient"}>Industry Leaders</span>
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
              "mt-4 640:mt-5 text-neutral-740 text-base 768:leading-[30px] 768:text-lg 960:max-w-[520px] font-normal text-center 768:text-left"
            }
          >
            Leverage our strategic partnerships with world-class OEM
            manufacturers to deliver cutting-edge solutions for your next
            project. Our expert team will help you access the right technology,
            equipment, and support for optimal results.
          </motion.p>

          <div className="flex flex-col 640:flex-row gap-4 mt-6">
            <AppCtaButton
              href="/contact-sales"
              className={
                "primary-button flex mx-auto h-12 768:h-14 768:mx-0 gap-4 group items-center w-max"
              }
              withArrow
            >
              <span className="h-full y-center">Start Your Project</span>
            </AppCtaButton>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="flex"
        >
          <Image
            className="object-cover w-full rounded-3xl"
            src={supportImage}
            priority
            alt="hero_image"
          />
        </motion.div>
      </div>
    </section>
  );
};
