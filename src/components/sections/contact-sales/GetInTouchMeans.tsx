import { AppCtaButton } from "@/components/buttons/AppCtaButton";
import { motion } from "framer-motion";
import { contactMeans } from "./contants";
import clsx from "clsx";
import {
  Chat,
  Phone,
  SuggestionEmail,
} from "@/components/svgs/contact/contactIcons";
import { useState } from "react";
import Link from "next/link";
import { TruncateWord } from "@/helpers/formatters/truncateWord";
import { Email, Whatsapp } from "@/components/svgs/blog/Socials";
import { Telegram } from "@/components/svgs/Socials";
import { PhoneIcon } from "@/components/svgs/blog/PhoneIcon";

export const GetInTouchMeans = () => {
  const [flippedIndex, setFlippedIndex] = useState(-1);

  const handleCardFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? -1 : index);
  };

  const iconReveal = (i: number) => {
    if (i === 0) return <Phone />;
    else if (i === 1) return <Chat />;
    else return <SuggestionEmail />;
  };

  const socialReveal = (value: string) => {
    if (value.includes('@') || value.includes('mailto')) {
      return <Email />;
    } else if (value.includes('tel:') || value.includes('+') || /^\+?[\d\s-()]+$/.test(value)) {
      return <PhoneIcon />;
    } else if (value.includes('wa.me') || value.includes('whatsapp')) {
      return <Whatsapp />;
    } else if (value.includes('t.me') || value.includes('telegram')) {
      return <Telegram />;
    } else {
      return <PhoneIcon />; // Default fallback
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="grid 1180:grid-cols-3 gap-6 768:gap-12 my-8 768:my-16"
    >
      {contactMeans.map(
        ({ title, description, btnText, backTitle, links }, i) => {
          const isOdd = i % 2 === 0 ? false : true;
          const isHovered = flippedIndex === i;

          return (
            <div key={i} className="">
              <div
                className={`flip-card min-h-[348px] ${isHovered ? "is-flipped" : ""}`}
              >
                <div className="bg-white min-h-[260px] relative rounded-[20px] border border-neutral-100 p-6 768:p-9 card__face card__face--front">
                  <span className="flex justify-center mb-6">
                    {iconReveal(i)}
                  </span>
                  <p className="text-gradient text-center text-[20px] leading-normal 640:leading-[30px] font-semibold">
                    {title}
                  </p>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                    }}
                    className={
                      "mt-2.5  768:mt-3 mx-auto text-neutral-600 text-base 768:leading-[24px] font-medium text-center max-w-[245px]"
                    }
                  >
                    {description}
                  </motion.p>
                  <div
                    onClick={() => handleCardFlip(i)}
                    className={"flex justify-center mt-7 cursor-pointer"}
                  >
                    <p
                      className={clsx(
                        isOdd
                          ? "primary-button y-center 768:px-6 h-11 items-center text-white"
                          : "outline-button y-center 768:px-6 h-11 items-center text-primary-main"
                      )}
                    >
                      <span className="">{btnText}</span>
                    </p>
                  </div>
                </div>
                <div
                  key={i}
                  className="relative bg-white min-h-[260px] rounded-[20px] border border-neutral-100 p-6 768:p-9 card__face card__face--back"
                >
                  <span className="flex justify-center mb-6">
                    {iconReveal(i)}
                  </span>
                  <p className="text-gradient text-center text-[20px] leading-normal 640:leading-[30px] font-semibold">
                    {backTitle}
                  </p>
                  {links.map((x, i) => (
                    <div key={i} className="mx-auto w-full 640:max-w-[280px]">
                      <Link
                        href={
                          x.value.includes('@') && !x.value.includes('mailto')
                            ? `mailto:${x.value}`
                            : x.value.match(/^\+?[\d\s-()]+$/) && !x.value.includes('tel:')
                              ? `tel:${x.value.replace(/\s/g, '')}`
                              : x.value
                        }
                        className={clsx(
                          links.length > 2
                            ? "border-b border-neutral-310"
                            : "flex justify-center",
                          "py-2 text-neutral-600 text-base 768:leading-[24px] font-medium text-center flex gap-2 425:gap-4 hover:text-primary-main"
                        )}
                        target={
                          x.value.includes('@') || x.value.match(/^\+?[\d\s-()]+$/)
                            ? "_parent"
                            : "_blank"
                        }
                      >
                        {links.length > 2 && (
                          <span className="">{socialReveal(x.value)}</span>
                        )}
                        <span className="hidden 425:block text-center">
                          {TruncateWord(x.value, 28)}
                        </span>
                        <span className="block 425:hidden text-center">
                          {TruncateWord(x.value, 20)}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }
      )}
    </motion.div>
  );
};
