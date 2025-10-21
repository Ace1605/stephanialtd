import { Metadata } from "next";
import phone from "/public/assets/businesses/8234.jpg";
import { ProductsHero } from "@/components/sections/product/ProductsHero";
import { ProductBrand } from "@/components/sections/product/ProductsBrand";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { ProductFeature } from "@/components/sections/product/ProductFeature";
import { HowToGetStarted } from "@/components/sections/product/HowToGetStarted";
import { SectionSlice } from "@/components/commons/sections/SectionSlice";
import lady from "/public/assets/businesses/23128.jpg";
import checkout from "/public/assets/businesses/58281.jpg";
import { CallToAction } from "@/components/core/Footer/CallToAction";

export const metadata: Metadata = {
  title: "Construction Services",
};

export default function ConstructionServices() {
  return (
    <>
      <ProductsHero
        id="storefront_hero"
        image={phone}
        title={"Complete "}
        lastWord="Construction"
        continuation=" Solutions"
        description={
          "Comprehensive construction services from planning to completion, delivering quality projects on time and within budget."
        }
        buttonText="Get Started"
      />
      <ProductBrand />
      <ProductFeature
        featureTitle="Comprehensive Construction "
        lastWord="Project"
        continuation=" Management"
        hClassName="768:!w-2/3"
        subtitle="From planning to completion, our construction solutions integrate project management, equipment tracking, and quality control to ensure successful project delivery."
        image={lady}
      />
      <SectionSlice
        imagePosition={"right"}
        title={
          <span className={"1180:text-[54px] block"}>
            Build Better with
            <span>
              <span className={"text-gradient"}> Smart Technology</span>
            </span>
          </span>
        }
        hClassName="768:!w-full"
        description={
          <span className={"block"}>
            {`Leverage advanced construction technologies including BIM integration, drone monitoring, and IoT sensors to enhance project efficiency and quality control.`}
          </span>
        }
        image={checkout}
        action="Get Started"
        actionLink="/contact-sales"
        withArrow
      />
      {/* <HowToGetStarted
        title="How To Start "
        lastWord="Selling Online"
        subtitle="Need support?"
        action="Talk to our team"
        firstBoxTitle="Create A Free Account"
        firstBoxText="Provide the required information and a business account will be created for you instantly. Once done, login to your account and click on the Products menu."
        secondBoxTitle="Setup Your Product"
        secondBoxText="Begin by setting up your store's inventory, complete with high-quality images of your products, prices and detailed descriptions of their specifications."
        ThirdBoxTitle="Start Selling"
        thirdBoxText="Distribute your store's link, initiate the sales process, and commence accepting various payment methods."
      /> */}
      <CallToAction />
    </>
  );
}
