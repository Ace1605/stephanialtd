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
  const sponsorItems = sponsors.map((sponsor, index) => (
    <div
      key={index}
      className="min-w-[120px] max-h-[60px] 768:max-h-[40px] 768:min-w-[140px] flex justify-center cursor-pointer flex-shrink-0"
    >
      <Image
        className="object-contain hover:scale-105 transition-transform duration-300"
        src={sponsor.src}
        priority
        alt="sponsor_image"
      />
    </div>
  ));

  // Create enough copies to ensure continuous scrolling across screen width
  const repeatedSponsors = Array.from({ length: 4 }, (_, i) =>
    sponsorItems.map((item, index) =>
      React.cloneElement(item, { key: `${i}-${index}` })
    )
  ).flat();

  return (
    <div className={clsx(hide && "!hidden 768:flex", "overflow-hidden w-full")}>
      <div
        className="flex items-center gap-2 768:gap-3"
        style={{
          animation: "slide 80s linear infinite",
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
