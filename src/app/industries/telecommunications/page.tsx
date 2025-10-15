import { Metadata } from "next";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { DownloadPrompt } from "@/components/sections/home/DownloadPrompt";
import { IndustriesHero } from "@/components/sections/industries/IndustriesHero";
import { StephaniaNumbers } from "@/components/modules/StephaniaNumbers";
import { CallToAction } from "@/components/core/Footer/CallToAction";
import { VideoSection } from "@/components/sections/industries/VideoSection";
import fashion from "/public/assets/businesses/hero3.jpg";
import miniFashion from "/public/assets/businesses/thirdBannerImage.jpg";
import { ServiceSolution } from "@/components/sections/industries/ServiceSolution";
import { Description } from "@/components/sections/industries/hook/useDescription";
import { telecommunicationsGoals } from "@/components/sections/industries/contants";

export const metadata: Metadata = {
  title: "Telecommunications",
};

export default function Telecommunications() {
  return (
    <>
      <IndustriesHero
        subtitle="Advanced solutions for the telecommunications industry."
        description="Stephania offers comprehensive solutions for telecommunications companies including billing systems, customer management tools, and service provisioning platforms designed to enhance connectivity and customer experience."
        title="Telecommunications"
        id="telecommunications_hero"
        firstImage={fashion}
        secondImage={miniFashion}
      />
      <VideoSection
        videoSrc="/assets/products/telecom.mp4"
        title="Delivering Proven Results For "
        lastWord="Telecom Companies"
        id="telecommunications_video_section"
        hClassName="768:!w-2/3"
      />
      <ServiceSolution
        firstWord="Connect the World with "
        lastWord="Reliability"
        description={<Description goals={telecommunicationsGoals} />}
      />

      {/* <StephaniaNumbers withoutParent /> */}
      <CallToAction />
    </>
  );
}
