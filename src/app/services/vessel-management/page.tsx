import { Metadata } from "next";
import vessel from "/public/assets/businesses/240.jpg";
import { ProductsHero } from "@/components/sections/product/ProductsHero";
import { ProductBrand } from "@/components/sections/product/ProductsBrand";
import { ProductFeature } from "@/components/sections/product/ProductFeature";
import drop from "/public/assets/businesses/30610.jpg";
import { SectionSlice } from "@/components/commons/sections/SectionSlice";
import plant from "/public/assets/why_stephania/workers.jpeg";
import { CallToAction } from "@/components/core/Footer/CallToAction";

export const metadata: Metadata = {
  title: "Vessel Management",
};

export default function VesselManagement() {
  return (
    <>
      <ProductsHero
        id="stephania_dropin_hero"
        image={vessel}
        title={"Advanced "}
        lastWord="Vessel"
        continuation=" Management"
        description={
          "Complete vessel management services including maintenance, crew management, and operational optimization for maritime operations."
        }
        buttonText="Get Started"
      />
      <ProductBrand />
      <ProductFeature
        featureTitle="Complete Vessel "
        lastWord="Operations"
        continuation=" Management"
        subtitle="Optimize your maritime operations with comprehensive vessel management services including maintenance, crew management, and operational efficiency solutions."
        image={drop}
        imageClass="object-top"
      />
      {/* <SectionSlice
        imagePosition={"right"}
        title={
          <span className={"1180:text-[49px] block"}>
            Real-Time Fleet
            <span>
              <span className={"text-gradient"}> Monitoring </span>
            </span>
            & Analytics
          </span>
        }
        hClassName="1300:text-[56px] 768:w-full"
        description={
          <span className={"block"}>
            {`Monitor your entire fleet in real-time with advanced tracking systems, performance analytics, and instant alerts for maintenance needs, ensuring optimal vessel operations and safety.`}
          </span>
        }
        image={payment}
        action="Get Started"
        actionLink="/contact-sales"
        withArrow
      /> */}
      <SectionSlice
        imagePosition={"left"}
        title={
          <span className={"1180:text-[49px] block"}>
            Maritime
            <span>
              <span className={"text-gradient"}> Compliance </span>
            </span>
            & Safety Management
          </span>
        }
        hClassName="768:w-4/7"
        description={
          <span className={"block 768:mr-4"}>
            {`Ensure full regulatory compliance with automated documentation, safety protocols, and certification management systems designed for maritime operations.`}
          </span>
        }
        image={plant}
        action="Contact Us"
        actionLink="/contact-sales"
        outline
        withArrow
      />
      <CallToAction />
    </>
  );
}
