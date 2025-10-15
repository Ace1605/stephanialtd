"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { SponsorSlider } from "@/components/modules/SponsorSlider";
import { Element } from "react-scroll";

export const mobileWidth = 768;

export const TestimonialSlide = () => {
  const desktopXPadding = 64;
  const mobileXPadding = 60;

  const testimonialCarouselRef = useRef<HTMLDivElement>(null);
  const fixedWidthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMargin = () => {
      const dynamicMarginElement = testimonialCarouselRef.current;
      const constantWidth = fixedWidthRef.current;

      if (dynamicMarginElement && constantWidth) {
        const windowWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;

        let halfPadding;
        if (document.body.clientWidth > mobileWidth) {
          halfPadding =
            (windowWidth - (constantWidth.clientWidth - desktopXPadding)) / 2;
        } else {
          halfPadding =
            (windowWidth - (constantWidth.clientWidth - mobileXPadding)) / 2;
        }

        dynamicMarginElement.style.paddingLeft = `${halfPadding}px`;
        dynamicMarginElement.style.paddingRight = `${halfPadding}px`;
      }
    };

    // Attached the event listener for window resize
    window.addEventListener("resize", updateMargin);

    // Triggers the resize event on component mount
    updateMargin();

    // Removed the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateMargin);
    };
  }, []);

  return (
    <Element name="home_testimonial">
      <section id={"home_testimonial"} className={"py-12 overflow-hidden"}>
        <div className="app-container">
          <div className="relative">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-8 640:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            
            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-8 640:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
            
            {/* Slider Content */}
            <div className="hidden-scrollbar overflow-x-auto 768:overflow-x-hidden">
              <div className={clsx("min-w-fit px-4")}>
                <SponsorSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
