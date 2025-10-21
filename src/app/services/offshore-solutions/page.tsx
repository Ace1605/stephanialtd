import { Metadata } from "next";
import phone from "/public/assets/why_stephania/ourworkers.jpeg";
import { ProductsHero } from "@/components/sections/product/ProductsHero";
import { ProductBrand } from "@/components/sections/product/ProductsBrand";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { ProductFeature } from "@/components/sections/product/ProductFeature";
import { HowToGetStarted } from "@/components/sections/product/HowToGetStarted";
import pos from "/public/assets/businesses/96059.jpg";
import { SectionSlice } from "@/components/commons/sections/SectionSlice";
import payment from "/public/assets/businesses/372.jpg";
import { CallToAction } from "@/components/core/Footer/CallToAction";

export const metadata: Metadata = {
  title: "Offshore Solutions",
};

export default function OffShoreSolutions() {
  return (
    <>
      <ProductsHero
        id="tap_and_pay_hero"
        image={phone}
        title={"Specialized "}
        lastWord="Offshore"
        continuation=" Solutions"
        description={
          "Specialized offshore solutions including platform operations, subsea systems, FPSO management, and marine logistics designed for challenging offshore environments."
        }
        buttonText="Get Started"
        imageClass="max-h-[438.4px] !object-cover object-top"
      />
      <ProductBrand />
      <ProductFeature
        featureTitle="Advanced Offshore "
        lastWord="Platform"
        continuation=" Solutions"
        hClassName="768:!w-2/3"
        pClassName="768:!w-2/3 768:pr-6"
        subtitle="Specialized offshore solutions for challenging marine environments including FPSO operations, subsea systems, and platform management for deep-water operations."
        videoSrc="/assets/products/fpso.mp4"
      />
      <SectionSlice
        imagePosition={"right"}
        title={
          <span className={"1180:text-[49px] block"}>
            Navigate
            <span className="text-gradient"> offshore challenges </span>
            with confidence
          </span>
        }
        hClassName="768:!w-5/6"
        description={
          <span className={"block"}>
            {`Overcome the complexities of offshore operations with specialized solutions designed for harsh marine environments, ensuring safety, efficiency, and regulatory compliance.`}
          </span>
        }
        image={payment}
        action="Get Started"
        actionLink="/contact-sales"
        withArrow
      />
      <CallToAction />
    </>
  );
}
