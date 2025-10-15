import { Metadata } from "next";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { DownloadPrompt } from "@/components/sections/home/DownloadPrompt";
import { IndustriesHero } from "@/components/sections/industries/IndustriesHero";
import { StephaniaNumbers } from "@/components/modules/StephaniaNumbers";
import { CallToAction } from "@/components/core/Footer/CallToAction";
import { VideoSection } from "@/components/sections/industries/VideoSection";
import lady from "/public/assets/businesses/hero2.jpg";
import fashion from "/public/assets/businesses/hero3.jpg";
import miniFashion from "/public/assets/businesses/thirdBannerImage.jpg";
import { ServiceSolution } from "@/components/sections/industries/ServiceSolution";
import { Description } from "@/components/sections/industries/hook/useDescription";
import { fashionGoals } from "@/components/sections/industries/contants";

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
        image={lady}
        title="Delivering Proven Results For "
        lastWord="Telecom Companies"
        id="telecommunications_video_section"
        hClassName="768:!w-2/3"
      />
      <ServiceSolution
        title=" out your service all around."
        lastWord="Smooth"
        description={<Description goals={fashionGoals} />}
      />

      {/* <StephaniaNumbers withoutParent /> */}
      <CallToAction />
    </>
  );
}
