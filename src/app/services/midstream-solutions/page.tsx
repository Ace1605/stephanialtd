import { Metadata } from "next";
import phone from "/public/assets/businesses/solutions.jpg";
import { ProductsHero } from "@/components/sections/product/ProductsHero";
import { ProductBrand } from "@/components/sections/product/ProductsBrand";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { ProductFeature } from "@/components/sections/product/ProductFeature";
import { HowToGetStarted } from "@/components/sections/product/HowToGetStarted";
import pos from "/public/assets/businesses/pipes.jpg";
import { SectionSlice } from "@/components/commons/sections/SectionSlice";
import payment from "/public/assets/businesses/142.jpg";
import { CallToAction } from "@/components/core/Footer/CallToAction";
import { Stars } from "@/components/svgs/Stars";

export const metadata: Metadata = {
  title: "Midstream Solutions",
};

export default function MidstreamSolutions() {
  return (
    <>
      <ProductsHero
        id="tap_and_pay_hero"
        image={phone}
        title={"Complete "}
        lastWord="Midstream"
        continuation=" Solutions"
        description={
          "End-to-end midstream solutions including pipeline management, storage facilities, and distribution networks designed to optimize your operations."
        }
        buttonText="Get Started"
      />
      <ProductBrand />
      <ProductFeature
        featureTitle="Integrated Midstream "
        lastWord="Infrastructure"
        continuation=" Solutions"
        hClassName="768:!w-2/3"
        pClassName="768:!w-2/3 768:pr-6"
        subtitle="Comprehensive midstream solutions for pipeline operations, storage facilities, and distribution networks that optimize transportation and storage efficiency."
        image={pos}
      />
      <SectionSlice
        imagePosition={"right"}
        title={
          <span className={"1180:text-[49px] block"}>
            Optimize
            <span className="text-gradient"> midstream operations </span>
            end-to-end
          </span>
        }
        hClassName="768:!w-11/12"
        description={
          <span className={"block"}>
            {`Streamline your midstream operations with integrated systems that connect production to markets, ensuring efficient transportation, storage, and distribution of energy products.`}
          </span>
        }
        image={payment}
        action="Get Started"
        actionLink="/contact-sales"
        withArrow
        floatingImage={
          <div className="w-12 h-12 bg-white/50 backdrop-blur-sm border border-white/2 rounded-full flex items-center justify-center">
            <Stars />
          </div>
        }
        floatingImageClassName="right-5 top-5"
      />
      <CallToAction />
    </>
  );
}
