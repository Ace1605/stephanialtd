import { Metadata } from "next";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { DownloadPrompt } from "@/components/sections/home/DownloadPrompt";
import { IndustriesHero } from "@/components/sections/industries/IndustriesHero";
import { StephaniaNumbers } from "@/components/modules/StephaniaNumbers";
import { CallToAction } from "@/components/core/Footer/CallToAction";
import { VideoSection } from "@/components/sections/industries/VideoSection";
import lady from "/public/assets/businesses/hero2.jpg";
import fullLady from "/public/assets/businesses/hero3.jpg";
import miniLady from "/public/assets/businesses/thirdBannerImage.jpg";
import { ServiceSolution } from "@/components/sections/industries/ServiceSolution";
import { Description } from "@/components/sections/industries/hook/useDescription";
import { onlineGoals } from "@/components/sections/industries/contants";

export const metadata: Metadata = {
  title: "Oil & Gas",
};

export default function OilAndGas() {
  return (
    <>
      <IndustriesHero
        subtitle="Specialized solutions for the oil and gas industry."
        description="Our platform offers comprehensive solutions tailored for oil and gas operations, including equipment management, supply chain optimization, and industry-specific tools designed for the energy sector."
        title="Oil & Gas"
        id="oil_gas_hero"
        firstImage={fullLady}
        secondImage={miniLady}
      />
      <VideoSection
        image={lady}
        title="Delivering Proven Results For "
        lastWord="Oil & Gas"
        id="oil_gas_video_section"
        hClassName="768:!w-2/3"
      />
      <ServiceSolution
        title=" out your service all around."
        lastWord="Smooth"
        description={<Description goals={onlineGoals} />}
      />

      {/* <StephaniaNumbers withoutParent /> */}
      <CallToAction />
    </>
  );
}
