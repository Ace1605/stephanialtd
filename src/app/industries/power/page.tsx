import { Metadata } from "next";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { DownloadPrompt } from "@/components/sections/home/DownloadPrompt";
import { IndustriesHero } from "@/components/sections/industries/IndustriesHero";
import { StephaniaNumbers } from "@/components/modules/StephaniaNumbers";
import { CallToAction } from "@/components/core/Footer/CallToAction";
import { VideoSection } from "@/components/sections/industries/VideoSection";
import guy from "/public/assets/businesses/hero2.jpg";
import waiter from "/public/assets/businesses/hero3.jpg";
import leisure from "/public/assets/businesses/thirdBannerImage.jpg";
import { ServiceSolution } from "@/components/sections/industries/ServiceSolution";
import { Description } from "@/components/sections/industries/hook/useDescription";
import { hospitalityGoals } from "@/components/sections/industries/contants";

export const metadata: Metadata = {
  title: "Power",
};

export default function Power() {
  return (
    <>
      <IndustriesHero
        subtitle="Advanced solutions for the power and energy sector."
        description="Our comprehensive suite of products for power companies includes monitoring systems, grid management tools, and energy analytics - designed to optimize your operations and enhance efficiency."
        title="Power"
        id="power_hero"
        firstImage={waiter}
        secondImage={leisure}
      />
      <VideoSection
        image={guy}
        title="Delivering Proven Results For "
        lastWord="Power Companies"
        id="power_video_section"
        embedId="ArPpwq8189M"
        embedded
        hClassName="768:!w-2/3"
      />
      <ServiceSolution
        title=" out your service all around."
        lastWord="Smooth"
        description={<Description goals={hospitalityGoals} />}
      />

      {/* <StephaniaNumbers withoutParent /> */}
      <CallToAction />
    </>
  );
}
