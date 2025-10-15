import { Metadata } from "next";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { DownloadPrompt } from "@/components/sections/home/DownloadPrompt";
import { IndustriesHero } from "@/components/sections/industries/IndustriesHero";
import { StephaniaNumbers } from "@/components/modules/StephaniaNumbers";
import { CallToAction } from "@/components/core/Footer/CallToAction";
import { VideoSection } from "@/components/sections/industries/VideoSection";
import library from "/public/assets/businesses/hero3.jpg";
import student from "/public/assets/businesses/thirdBannerImage.jpg";
import { ServiceSolution } from "@/components/sections/industries/ServiceSolution";
import { Description } from "@/components/sections/industries/hook/useDescription";
import { constructionGoals } from "@/components/sections/industries/contants";

export const metadata: Metadata = {
  title: "Construction",
};

export default function Construction() {
  return (
    <>
      <IndustriesHero
        subtitle="Specialized innovative solutions designed specifically for the construction industry."
        description="From project management to equipment tracking, our services are crafted to meet the unique needs of construction companies and their operations."
        title="Construction"
        id="construction_hero"
        firstImage={library}
        secondImage={student}
      />
      <VideoSection
        videoSrc="/assets/products/construction.mp4"
        title="Delivering Proven Results For "
        lastWord="Construction"
        id="construction_video_section"
      />
      <ServiceSolution
        firstWord="Build Better with"
        lastWord=" Efficiency"
        description={<Description goals={constructionGoals} />}
      />

      {/* <StephaniaNumbers withoutParent /> */}
      <CallToAction />
    </>
  );
}
