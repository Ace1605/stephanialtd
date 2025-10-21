"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  title?: string;
  lastWord: string;
  description?: ReactNode;
  firstWord?: string;
}

export const ServiceSolution = ({
  title,
  firstWord,
  description,
  lastWord,
}: Props) => {
  return (
    <section className="pt-5 pb-16 768:pb-32 768:pt-12">
      <div className={"relative app-container"}>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className={
            "text-center text-black mx-auto font-semibold text-[35px] 640:text-[52px] 1180:text-[70px] leading-[41px] 640:leading-[60px] 1180:leading-[80px] tracking-[-0.64px] 1024:tracking-[-3.5px] w-full 768:w-2/3"
          }
        >
          {firstWord && firstWord}
          <span>
            <span className={"text-gradient"}>{lastWord}</span>
          </span>
          {title && title}
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
            "block text-center mb-8 mt-5 text-black text-base leading-[24px] 768:leading-[30px] 768:text-[18px] tracking-[-0.32px] 640:tracking-[-0.4px] font-normal"
          }
        >
          Stephania is a growth engine for a new generation of innovative,
          forward-looking organizations operating in Africa.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="hidden 768:grid-cols-3 gap-10 768:gap-28 mt-10 768:mt-24 768:pb-10 border-b-none 768:border-b border-neutral-300"
        >
          <div className="hidden 768:block col-span-1">
            <p className="capitalize font-normal">YOUR BUSINESS GOAL</p>
          </div>
          <div className="hidden 768:block col-span-2">
            <p className="capitalize font-normal text-neutral-600 text-sm 768:text-base 768:text-black">
              HOW TO SOLVE IT WITH STEPHANIA
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mt-10 768:mt-0"
        >
          {description}
        </motion.div>
      </div>
    </section>
  );
};
