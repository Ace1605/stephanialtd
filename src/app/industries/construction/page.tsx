import { Metadata } from "next";
import { CallToAction } from "@/components/core/Footer/CallToAction";
import { VideoSection } from "@/components/sections/industries/VideoSection";
import { ServiceSolution } from "@/components/sections/industries/ServiceSolution";
import { Description } from "@/components/sections/industries/hook/useDescription";
import { constructionGoals } from "@/components/sections/industries/contants";

export const metadata: Metadata = {
  title: "Construction",
};

export default function Construction() {
  return (
    <>
      <VideoSection
        videoSrc="/assets/products/construction.mp4"
        title="Construction"
        id="construction_video_section"
        videoClass="max-h-[450px] 768:max-h-[600px]"
        subtitle="Specialized innovative solutions designed specifically for the construction industry."
        description="Stephania empowers construction companies with innovative engineering solutions and comprehensive project management systems that streamline operations from ground-breaking to completion. Our specialized services include advanced project lifecycle management, real-time equipment tracking and maintenance systems, supply chain optimization, workforce management platforms, safety compliance monitoring, BIM integration, cost estimation tools, and quality assurance systems. We provide procurement solutions for construction materials, vendor management platforms, progress tracking with drone technology, and digital documentation systems that ensure projects are delivered on time, within budget, and to the highest safety and quality standards."
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
