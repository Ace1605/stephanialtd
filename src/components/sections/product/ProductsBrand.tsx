"use client";

import clsx from "clsx";
import { SponsorSlider } from "@/components/modules/SponsorSlider";

export const ProductBrand = () => {
  return (
    <div
      className={
        "app-container relative pt-4 1024:pt-1 1180:pt-6 640:pb-16 pb-8"
      }
    >
      <div className="absolute left-0 top-0 bottom-0 w-8 640:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-8 640:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <h3 className="text-center text-xl 768:text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300 mt-14 mb-10">
        Our Partners
      </h3>
      <div className="hidden-scrollbar mt-6 768:mt-10 px-8 768:px-0 768:app-container overflow-x-auto 768:overflow-x-hidden">
        <div className={clsx("min-w-fit")}>
          <SponsorSlider />
        </div>
      </div>
    </div>
  );
};
