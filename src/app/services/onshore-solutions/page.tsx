import { Metadata } from "next";
import phone from "/public/assets/businesses/9938.jpg";
import { ProductsHero } from "@/components/sections/product/ProductsHero";
import { ProductBrand } from "@/components/sections/product/ProductsBrand";
import { ProductFeature } from "@/components/sections/product/ProductFeature";
import pos from "/public/assets/businesses/724.jpg";
import { SectionSlice } from "@/components/commons/sections/SectionSlice";
import payment from "/public/assets/businesses/126917.jpg";
import { CallToAction } from "@/components/core/Footer/CallToAction";

export const metadata: Metadata = {
  title: "Onshore Solutions",
};

export default function OnShoreSolutions() {
  return (
    <>
      <ProductsHero
        id="tap_and_pay_hero"
        image={phone}
        title={"Integrated "}
        lastWord="Onshore"
        continuation=" Solutions"
        description={
          "Comprehensive onshore solutions including drilling operations, production facilities, and land-based infrastructure designed to maximize efficiency and safety."
        }
        buttonText="Get Started"
        imageClass="max-h-[438.4px] !object-cover object-center"
      />
      <ProductBrand />
      <ProductFeature
        featureTitle="Comprehensive Onshore "
        lastWord="Operations"
        continuation=" Management"
        hClassName="768:!w-2/3"
        pClassName="768:!w-2/3 768:pr-6"
        subtitle="Optimize your onshore operations with integrated solutions for drilling, production, and infrastructure management designed for land-based energy operations."
        image={pos}
      />
      <SectionSlice
        imagePosition={"right"}
        title={
          <span className={"1180:text-[49px] block"}>
            Maximize
            <span className="text-gradient"> onshore efficiency </span>
            with smart solutions
          </span>
        }
        hClassName="768:!w-5/6"
        description={
          <span className={"block"}>
            {`Enhance your onshore operations with intelligent monitoring systems, predictive maintenance, and automated workflows that optimize performance and reduce operational costs.`}
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
