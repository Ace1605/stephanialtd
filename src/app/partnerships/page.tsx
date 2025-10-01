import { CallToAction } from "@/components/core/Footer/CallToAction";
import { GetSupport } from "@/components/modules/pricing/GetSupport";
import { PartnershipsSection } from "@/components/sections/partnerships/PartnershipsSection";
import { PartnershipsHero } from "@/components/sections/partnerships/PartnershipsHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships",
  description: "Discover Stephania Support Services' strategic partnerships with industry leaders including ENVIRO VALVE, DESAUTEL, ELECTROLUX, RMV VALVES, SHIPHAM VALVES, and STRACU VALVES. Together, we deliver exceptional engineering solutions across construction, energy, and oil & gas sectors.",
  keywords: [
    "Stephania partnerships",
    "strategic alliances", 
    "engineering partnerships",
    "ENVIRO VALVE",
    "DESAUTEL",
    "ELECTROLUX", 
    "RMV VALVES",
    "SHIPHAM VALVES",
    "STRACU VALVES",
    "valve solutions",
    "industrial partnerships",
    "construction partnerships",
    "energy partnerships",
    "oil & gas partnerships"
  ],
};


export default function Partnership() {
  return (
    <main>
      <PartnershipsHero />
      <PartnershipsSection />
      <GetSupport />
      <CallToAction />
    </main>
  );
}
