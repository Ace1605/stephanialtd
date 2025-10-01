import { CallToAction } from "@/components/core/Footer/CallToAction";
// import { DownloadPrompt } from "@/components/sections/home/DownloadPrompt";
// import { FreedomToChoose } from "@/components/sections/why-choose-stephania/FreedomToChoose";
import { Hero } from "@/components/sections/why-choose-stephania/Hero";
import { StoryLine } from "@/components/sections/why-choose-stephania/StoryLine";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function About() {
  return (
    <main>
      <Hero />
      <StoryLine />
      <CallToAction />
      {/* <FreedomToChoose/>
      <DownloadPrompt/> */}
    </main>
  );
}
