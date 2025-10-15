import { Metadata } from "next";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { DownloadPrompt } from "@/components/sections/home/DownloadPrompt";
import { IndustriesHero } from "@/components/sections/industries/IndustriesHero";
import { StephaniaNumbers } from "@/components/modules/StephaniaNumbers";
import { CallToAction } from "@/components/core/Footer/CallToAction";
import { VideoSection } from "@/components/sections/industries/VideoSection";
import office from "/public/assets/businesses/hero2.jpg";
import library from "/public/assets/businesses/hero3.jpg";
import student from "/public/assets/businesses/thirdBannerImage.jpg";
import { ServiceSolution } from "@/components/sections/industries/ServiceSolution";
import { Description } from "@/components/sections/industries/hook/useDescription";
import { educationGoals } from "@/components/sections/industries/contants";

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
        image={office}
        title="Delivering Proven Results For "
        lastWord="Construction"
        id="construction_video_section"
      />
      <ServiceSolution
        title=" out your service all around."
        lastWord="Smooth"
        description={<Description goals={educationGoals} />}
      />

      {/* <StephaniaNumbers withoutParent /> */}
      <CallToAction />
    </>
  );
}
