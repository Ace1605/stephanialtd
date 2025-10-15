import { Metadata } from "next";
import phone from "/public/assets/products/hero2.jpg";
import { ProductsHero } from "@/components/sections/product/ProductsHero";
import { ProductBrand } from "@/components/sections/product/ProductsBrand";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { ProductFeature } from "@/components/sections/product/ProductFeature";
import { HowToGetStarted } from "@/components/sections/product/HowToGetStarted";
import drop from "/public/assets/products/hero3.jpg";
import { SectionSlice } from "@/components/commons/sections/SectionSlice";
import payment from "/public/assets/products/thirdBannerImage.jpg";
import plant from "/public/assets/products/hero2.jpg";
import code from "/public/assets/products/hero3.jpg";
import { CallToAction } from "@/components/core/Footer/CallToAction";

export const metadata: Metadata = {
  title: "Vessel Management",
};

export default function VesselManagement() {
  return (
    <>
      <ProductsHero
        id="stephania_dropin_hero"
        image={phone}
        title={"Professional "}
        lastWord="Vessel Management"
        description={
          "Complete vessel management services including maintenance, crew management, and operational optimization for maritime operations."
        }
        buttonText="Get Started"
      />
      <ProductBrand />
      {/* <ProductFeature
        lastWord="Maximize "
        continuation="Sales With Better Payment Experience"
        subtitle="Give your customers the gift of modern, frictionless, painless payments."
        image={drop}
        firstBoxTitle="Accepts Naira Cards"
        firstBoxText="Easily handle payments with the convenience of processing Mastercard, Visa, and Verve cards."
        secondBoxTitle="Diverse Payment Options"
        secondBoxText="Your payment, your choice! Pick from our options of using cards or bank transfers, to pay the way you want."
        ThirdBoxTitle="Transparent Pricing"
        thirdBoxText="Enjoy the benefit of zero monthly fees, no setup charges, and no hidden costs - you only pay when you complete a sale."
        embedded
        embedId="t8xg51cNrn0"
      />
      <SectionSlice
        imagePosition={"right"}
        title={
          <span className={"1180:text-[49px] block"}>
            Instant Alerts with
            <span>
              <span className={"text-gradient"}> Real-Time </span>
            </span>
            Webhooks
          </span>
        }
        hClassName="1300:text-[56px] 768:w-full"
        description={
          <span className={"block"}>
            {`Keep up-to-date instantly with our sophisticated webhook functionality, designed to provide immediate notifications for every transaction as it happens, ensuring you're always informed in real time.`}
          </span>
        }
        image={payment}
        action="Get Started"
        actionLink="https://www.stephania.africa/signup"
        target="_blank"
        withArrow
      />
      <SectionSlice
        imagePosition={"left"}
        title={
          <span className={"1180:text-[49px] block"}>
            Accept payment on
            <span>
              <span className={"text-gradient"}> Wordpress </span>
            </span>
            and WooCommerce
          </span>
        }
        hClassName="768:w-4/7"
        description={
          <span className={"block 768:mr-4"}>
            {`Create your online store and get paid easily via our Checkout plugin on Wordpress and WooCommerce.`}
          </span>
        }
        image={plant}
        action="Lean More"
        actionLink="https://www.stephania.africa/signup"
        target="_blank"
        outline
        withArrow
      /> */}
      <CallToAction />
    </>
  );
}
