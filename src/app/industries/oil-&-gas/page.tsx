import { Metadata } from "next";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { DownloadPrompt } from "@/components/sections/home/DownloadPrompt";
import { IndustriesHero } from "@/components/sections/industries/IndustriesHero";
import { StephaniaNumbers } from "@/components/modules/StephaniaNumbers";
import { CallToAction } from "@/components/core/Footer/CallToAction";
import { VideoSection } from "@/components/sections/industries/VideoSection";
import fullLady from "/public/assets/businesses/hero3.jpg";
import miniLady from "/public/assets/businesses/thirdBannerImage.jpg";
import { ServiceSolution } from "@/components/sections/industries/ServiceSolution";
import { Description } from "@/components/sections/industries/hook/useDescription";
import { oilGasGoals } from "@/components/sections/industries/contants";

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
        videoSrc="/assets/products/oilandgas.mp4"
        title="Delivering Proven Results For "
        lastWord="Oil & Gas"
        id="oil_gas_video_section"
        hClassName="768:!w-2/3"
      />
      <ServiceSolution
        firstWord="Optimize Operations with "
        lastWord=" Precision"
        description={<Description goals={oilGasGoals} />}
      />

      {/* <StephaniaNumbers withoutParent /> */}
      <CallToAction />
    </>
  );
}
