import { Metadata } from "next";
import { CallToAction } from "@/components/core/Footer/CallToAction";
import { VideoSection } from "@/components/sections/industries/VideoSection";
import { ServiceSolution } from "@/components/sections/industries/ServiceSolution";
import { Description } from "@/components/sections/industries/hook/useDescription";
import { telecommunicationsGoals } from "@/components/sections/industries/contants";

export const metadata: Metadata = {
  title: "Telecommunications",
};

export default function Telecommunications() {
  return (
    <>
      <VideoSection
        videoSrc="/assets/products/telecom.mp4"
        subtitle="Advanced solutions for the telecommunications industry."
        description="Stephania delivers cutting-edge telecommunications solutions that revolutionize how telecom companies operate in today's connected world. Our comprehensive suite includes advanced billing systems with real-time processing, sophisticated customer management platforms with AI-driven insights, automated service provisioning tools, network optimization systems, and 5G infrastructure support. We specialize in OSS/BSS integration, IoT connectivity solutions, cloud-native architectures, and digital transformation services that enhance operational efficiency, improve customer satisfaction, and accelerate time-to-market for new services while ensuring regulatory compliance and security."
        title="Telecommunications"
        id="telecommunications_video_section"
        hClassName="768:!w-2/3"
        videoClass="max-h-[450px] 768:max-h-[600px]"
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
