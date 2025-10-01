"use client";

import {
  TestimonialSliderCards,
  reviews,
} from "@/components/modules/TestimonialSliderCards";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { SponsorSlider } from "@/components/modules/SponsorSlider";
import { BackButton, ForwardButton } from "@/components/svgs/Navigation";
import { Element } from "react-scroll";

export const mobileWidth = 768;

export const TestimonialSlide = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const desktopXPadding = 64;
  const mobileXPadding = 60;
  const distanceMovedOnDesktop = 620;
  const distanceMovedOnMobile = 384;

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

  const moveSliderBackward = () => {
    const constantWidth = document.getElementById("constantWidth");
    if (count > 0 && constantWidth) {
      if (document.body.clientWidth > mobileWidth) {
        setSliderPosition(
          (prevPosition) => prevPosition + distanceMovedOnDesktop
        );
      } else {
        setSliderPosition(
          (prevPosition) => prevPosition + distanceMovedOnMobile
        );
      }
      setCount(count - 1);
    }
    // Move slider to the left
  };

  const moveSliderForward = () => {
    const constantWidth = document.getElementById("constantWidth");
    if (count < reviews.length - 1 && constantWidth) {
      if (document.body.clientWidth > mobileWidth) {
        setSliderPosition(
          (prevPosition) => prevPosition - distanceMovedOnDesktop
        );
      } else {
        setSliderPosition(
          (prevPosition) => prevPosition - distanceMovedOnMobile
        );
      }
      // Move slider to the right
      setCount(count + 1);
    }
  };

  return (
    <Element name="home_testimonial">
      <section id={"home_testimonial"} className={"py-12 overflow-hidden"}>
        {/* <div
          ref={fixedWidthRef}
          id="constantWidth"
          className="app-container flex flex-col gap-1"
        >
          <h4
            className={
              "text-left text-black font-bold text-[30px] 640:text-[50px] 1180:text-[70px] leading-[39px] 640:leading-[56px] 1180:leading-[80px] tracking-[-1.5px] 640:tracking-[-3.5px] w-full"
            }
          >
            Hear from Stephania <span className="text-gradient">users</span>.
          </h4>
        </div> */}
        {/* <div
          id='dynamicMargin'
          ref={testimonialCarouselRef}
          className='hidden-scrollbar mt-7 768:mt-12 w-full overflow-x-auto px-8 768:pseudo-p'
        >
          <div
            className={clsx('min-w-fit')}
            style={{
              transform: `translateX(${sliderPosition}px)`,
              transition: 'ease-in-out',
              transitionDuration: '300ms',
            }}
          >
            <TestimonialSliderCards />
          </div>
        </div> */}
        {/* <div className='app-container flex gap-8 items-center mt-7'>
          <span className='cursor-pointer'>
            <BackButton onClick={moveSliderBackward} />
          </span>
          <span className='cursor-pointer'>
            <ForwardButton onClick={moveSliderForward} />
          </span>
        </div> */}
        <div className="hidden-scrollbar px-8 768:px-8 overflow-x-auto 768:overflow-x-hidden">
          <div className={clsx("min-w-fit")}>
            <SponsorSlider />
          </div>
        </div>
      </section>
    </Element>
  );
};
