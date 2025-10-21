import { Metadata } from "next";
import { CallToAction } from "@/components/core/Footer/CallToAction";
import { VideoSection } from "@/components/sections/industries/VideoSection";
import { ServiceSolution } from "@/components/sections/industries/ServiceSolution";
import { Description } from "@/components/sections/industries/hook/useDescription";
import { oilGasGoals } from "@/components/sections/industries/contants";

export const metadata: Metadata = {
  title: "Oil & Gas",
};

export default function OilAndGas() {
  return (
    <>
      <VideoSection
        videoSrc="/assets/products/fpso.mp4"
        title="Oil & Gas"
        id="oil_gas_video_section"
        hClassName="768:!w-2/3"
        videoClass="max-h-[450px] 768:max-h-[600px]"
        subtitle="Specialized solutions for the oil and gas industry."
        description="Stephania provides world-class engineering and procurement solutions specifically designed for the complex demands of the oil and gas industry. Our comprehensive platform encompasses upstream, midstream, and downstream operations with specialized services including advanced equipment management systems, predictive maintenance solutions, supply chain optimization for critical components, FPSO and offshore platform support, pipeline integrity management, HSE compliance systems, and real-time monitoring technologies. We deliver procurement services for drilling equipment, production systems, refinery components, and specialized tools while ensuring regulatory compliance, environmental safety, and operational excellence across exploration, production, transportation, and processing operations."
      />
      <ServiceSolution
        firstWord="Optimize Operations with "
        lastWord=" Precision"
        description={<Description goals={oilGasGoals} />}
      />
      <CallToAction />
    </>
  );
}
