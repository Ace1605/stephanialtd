import { Metadata } from "next";
import { CallToAction } from "@/components/core/Footer/CallToAction";
import { VideoSection } from "@/components/sections/industries/VideoSection";
import { ServiceSolution } from "@/components/sections/industries/ServiceSolution";
import { Description } from "@/components/sections/industries/hook/useDescription";
import { powerGoals } from "@/components/sections/industries/contants";

export const metadata: Metadata = {
  title: "Power",
};

export default function Power() {
  return (
    <>
      <VideoSection
        videoSrc="/assets/products/power.mp4"
        title="Power"
        id="power_video_section"
        hClassName="768:!w-2/3"
        videoClass="max-h-[450px] 768:max-h-[600px]"
        subtitle="Advanced solutions for the power and energy sector."
        description="Stephania delivers advanced engineering solutions and comprehensive services for the power generation and energy sector, supporting the transition to sustainable and efficient energy systems. Our specialized offerings include smart grid management systems, renewable energy integration platforms, power plant optimization tools, transmission and distribution monitoring, energy storage solutions, load forecasting systems, and grid stability analytics. We provide procurement services for power generation equipment, transformers, switchgear, protective systems, and renewable energy components while supporting conventional thermal plants, nuclear facilities, hydroelectric systems, wind farms, and solar installations with cutting-edge technology solutions that enhance reliability, efficiency, and environmental sustainability."
      />
      <ServiceSolution
        title=" the Future with Innovation"
        lastWord="Power"
        description={<Description goals={powerGoals} />}
      />

      {/* <StephaniaNumbers withoutParent /> */}
      <CallToAction />
    </>
  );
}
