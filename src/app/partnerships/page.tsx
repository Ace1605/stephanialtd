import { CallToAction } from "@/components/core/Footer/CallToAction";
import { GetSupport } from "@/components/modules/pricing/GetSupport";
import { PricingHeroSection } from "@/components/modules/pricing/PricingHeroSection";
// import { PricingModule } from '@/components/modules/pricing/PricingModule';
// import { DownloadPrompt } from '@/components/sections/home/DownloadPrompt';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships",
};

export default function Partnership() {
  return (
    <main>
      <PricingHeroSection />
      {/* <PricingModule pricing={pricing} /> */}
      <GetSupport />
      {/* <DownloadPrompt /> */}
      <CallToAction />
    </main>
  );
}
