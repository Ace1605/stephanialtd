import { CallToAction } from "@/components/core/Footer/CallToAction";
import { GetSupport } from "@/components/modules/pricing/GetSupport";
import { PartnershipsSection } from "@/components/sections/partnerships/PartnershipsSection";
// import { PartnershipsHero } from "@/components/sections/partnerships/PartnershipsHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Discover Stephania Support Services's strategic OEM partnerships with industry leaders including ENVIRO VALVE, DESAUTEL, ELECTROLUX, RMV VALVES, SHIPHAM VALVES, and STRACU VALVES. Our partnerships deliver cutting-edge technology and comprehensive support for engineering, construction, and procurement projects.",
  keywords: [
    "Stephania partnerships",
    "OEM partners",
    "engineering partnerships",
    "ENVIRO VALVE",
    "DESAUTEL",
    "ELECTROLUX",
    "RMV VALVES",
    "SHIPHAM VALVES",
    "STRACU VALVES",
    "valve solutions",
    "industrial equipment",
    "environmental control valves",
    "safety fire protection",
    "specialized valve technology",
    "pressure control systems",
  ],
};

export default function Partnership() {
  return (
    <main>
      {/* <PartnershipsHero /> */}
      <PartnershipsSection />
      <GetSupport />
      <CallToAction />
    </main>
  );
}
