"use client";

import { CallToAction } from "@/components/core/Footer/CallToAction";
import { Hero } from "@/components/sections/home/Hero";
import { TestimonialSlide } from "@/components/sections/home/TestimonialSlide";
import { WhyChooseStephania } from "@/components/sections/home/WhyChooseStephania";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { IndustriesSection } from "@/components/sections/home/IndustriesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TestimonialSlide />
      <WhyChooseStephania />
      <ServicesSection />
      {/* <IndustriesSection /> */}
      <CallToAction />
    </main>
  );
}
