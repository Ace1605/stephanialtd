"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  title: string;
  videoSrc: string;
  id: string;
  lastWord?: string;
  hClassName?: string;
  subtitle?: string;
  description?: string;
  videoClass?: string;
}

export const VideoSection = ({
  title,
  videoSrc,
  lastWord,
  id,
  hClassName,
  subtitle,
  description,
  videoClass,
}: Props) => {
  return (
    <section id={id} className="block pt-12 pb-12 768:pb-24 768:pt-16">
      <div className={"relative app-container"}>
        <div className="block">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className={clsx(
              hClassName,
              "text-left text-black font-bold text-[37px] 640:text-[52px] 1180:text-[70px] leading-[41px] 640:leading-[60px] 1180:leading-[80px] w-full 768:w-1/2"
            )}
          >
            <span className={"text-gradient"}>{title}</span>
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="subtitle text-neutral-1000 mx-auto 768:mx-0 max-w-[720px] text-left mt-2.5"
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="relative mt-10 768:mt-12"
        >
          <video
            className={clsx(
              videoClass,
              "object-cover w-full min-h-[280px] 768:min-h-[400px] rounded-2xl"
            )}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="subtitle text-neutral-1000 text-left mt-5"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};
