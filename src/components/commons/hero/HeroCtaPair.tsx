"use client";

import { AppCtaButton } from "@/components/buttons/AppCtaButton";
import clsx from "clsx";
import { motion } from "framer-motion";
// import Link from "next/link";

export const HeroCtaPair = ({
  waitlist,
  buttonText,
  buttonUrl,
  target,
  withArrow,
  justifyLeft,
  className = justifyLeft
    ? "768:justify-start grid 768:flex"
    : "768:justify-center grid 768:flex",
}: {
  waitlist?: boolean;
  className?: string;
  justifyLeft?: boolean;
  buttonText?: string;
  withArrow?: boolean;
  buttonUrl?: string;
  target?: string;
}) => {
  const wait = true;

  return (
    <div
      className={clsx("mt-4 640:mt-6 gap-3 768:gap-4", className ?? "x-center")}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
      >
        {withArrow ? (
          <AppCtaButton
            href={buttonUrl ? buttonUrl : "https://www.vpay.africa/signup"}
            className={"primary-button gap-2 h-12 768:h-14 group x-center"}
            withArrow
            type={"signup"}
            target={target}
          >
            <span className="h-full y-center">
              {buttonText ? buttonText : "Get Started"}
            </span>
          </AppCtaButton>
        ) : (
          <AppCtaButton
            href={buttonUrl ? buttonUrl : "https://www.vpay.africa/signup"}
            target={target}
            type={"signup"}
            className={
              "primary-button 768:px-6 h-12 768:h-14 y-center items-center"
            }
          >
            {buttonText ? buttonText : "Get Started"}
          </AppCtaButton>
        )}
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.6,
        }}
      >
        <Link
          href={"/contact-sales"}
          className={
            "outline-button y-center 768:px-6 h-12 768:h-14 items-center text-primary-main"
          }
        >
          Contact Us
        </Link>
      </motion.div> */}
    </div>
  );
};
