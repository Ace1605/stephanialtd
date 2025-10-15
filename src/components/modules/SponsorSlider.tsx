import Image from "next/image";
import clsx from "clsx";
import { sponsors } from "../sections/product/constants";
import { useState } from "react";
import React from "react";

interface Props {
  hide?: boolean;
}

export const SponsorSlider = ({ hide }: Props) => {
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Create sponsor item component
  const sponsorItems = sponsors.map((sponsor, index) => {
    // Check if this is the Stracu image by checking the src path
    const isStracuImage = sponsor.src.src && sponsor.src.src.includes('stracu');
    
    return (
      <div
        key={index}
        className="w-[140px] h-[60px] 768:w-[160px] 768:h-[50px] flex justify-center items-center cursor-pointer flex-shrink-0"
      >
        <Image
          className={`max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300 ${
            isStracuImage ? 'invert' : ''
          }`}
          src={sponsor.src}
          priority
          alt="sponsor_image"
        />
      </div>
    );
  });

  // Create enough copies to ensure seamless infinite scrolling
  const repeatedSponsors = Array.from({ length: 6 }, (_, i) =>
    sponsorItems.map((item, index) =>
      React.cloneElement(item, { key: `${i}-${index}` })
    )
  ).flat();

  return (
    <div className={clsx(hide && "!hidden 768:flex", "overflow-hidden w-full")}>
      <div
        className="flex items-center gap-48 768:gap-60"
        style={{
          animation: "slide 120s linear infinite",
          animationPlayState: isPaused ? "paused" : "running",
          width: "max-content",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {repeatedSponsors}
      </div>
    </div>
  );
};
