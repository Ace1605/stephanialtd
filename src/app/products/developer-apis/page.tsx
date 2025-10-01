import { HeroCtaPair } from "@/components/commons/hero/HeroCtaPair";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import React from "react";
import { AppCtaButton } from "@/components/buttons/AppCtaButton";
import { BuildAwesomeProducts } from "@/components/sections/product/developer_apis/BuildAwesomeProducts";
import { TrustedDevelopers } from "@/components/sections/product/developer_apis/TrustedDevelopers";
import { CallToAction } from "@/components/core/Footer/CallToAction";

export default function DeveloperApis() {
  const description = "Build robust and scalable payment solutions with our comprehensive APIs. Whether you're creating e-commerce platforms, mobile apps, or custom payment systems, our APIs provide everything you need.";
  const slices = [];

  return (
    <>
      <div className="relative">
        <div className="pt-8 640:pt-20 pb-8 640:pb-20">
          <div className="app-container grid gap-10 768:gap-20 mt-10 items-center">
            <div className="relative">
              <h6 className="text-center text-black text-[40px] 640:text-[48px] 1180:text-[66px] leading-[49px] 640:leading-[60px] 1180:leading-[73px] tracking-[-1.7px] 640:tracking-[-3.3px] 560:max-w-[440px] 1024:max-w-[560px] mx-auto !font-bold">
                Build Seamlessly With Reliable
                <span>
                  <span className={"text-gradient"}> APIs</span>
                </span>
              </h6>
              <p className="mt-5 text-neutral-1000 text-center ">
                {description}
              </p>
              <div className="relative h-[100px]">
                <HeroCtaPair
                  buttonUrl="https://docs.stephania.africa/stephania-js-inline-dropin-integration-guide"
                  buttonText="Read our API Docs"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BuildAwesomeProducts />
      <div className="app-container my-6">
        <TrustedDevelopers />
        <div className="relative">
          <div className="text-center mt-12 mb-20">
            <p className="text-neutral-1000">
              Our APIs are designed for developers who want to integrate powerful payment functionality into their applications.
            </p>
            <div className="flex justify-center mt-6">
              <AppCtaButton
                href="/contact-sales"
                className="primary-button gap-2 h-12 768:h-14 group x-center"
                withArrow
              >
                <span className="h-full y-center">
                  Contact Us
                </span>
              </AppCtaButton>
            </div>
          </div>
        </div>
      </div>
      <FaqsAsFooter left faqs={[]} />
      <CallToAction />
    </>
  );
}
