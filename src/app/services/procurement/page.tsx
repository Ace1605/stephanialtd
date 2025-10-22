import { Metadata } from "next";
import phone from "/public/assets/businesses/343.jpg";
import posGuy from "/public/assets/businesses/2242.jpg";
import { ProductsHero } from "@/components/sections/product/ProductsHero";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { ProductFeature } from "@/components/sections/product/ProductFeature";
import { HowToGetStarted } from "@/components/sections/product/HowToGetStarted";
import pos from "/public/assets/businesses/77664.jpg";
import { SectionSlice } from "@/components/commons/sections/SectionSlice";
import { CallToAction } from "@/components/core/Footer/CallToAction";
import { ProductBrand } from "@/components/sections/product/ProductsBrand";

export const metadata: Metadata = {
  title: "Procurement",
};

export default function Procurement() {
  return (
    <>
      <ProductsHero
        id="pos_terminal_hero"
        image={phone}
        title={"Strategic "}
        lastWord="Procurement"
        continuation=" Solutions"
        description={
          "Comprehensive procurement solutions designed to optimize your supply chain and reduce costs while maintaining quality standards."
        }
        buttonText="Request Terminal"
      />
      <ProductBrand />
      <ProductFeature
        featureTitle="Strategic Supply Chain "
        lastWord="Optimization"
        continuation=" Solutions"
        subtitle="Transform your procurement operations with comprehensive supply chain management, vendor optimization, and cost reduction strategies tailored for your industry."
        image={pos}
      />
      <SectionSlice
        imagePosition={"right"}
        title={
          <span className={"1180:text-[49px] block"}>
            Streamline Your
            <span>
              <span className={"text-gradient"}> Procurement Process</span>
            </span>
          </span>
        }
        description={
          <span className={"block"}>
            {`From requisition to delivery, our comprehensive procurement platform automates workflows, ensures compliance, and provides complete visibility into your purchasing operations.`}
          </span>
        }
        image={posGuy}
        action="Get Started"
        actionLink="/contact-sales"
        withArrow
        imageClass="object-top"
      />
      {/* <HowToGetStarted
        title="How To Get "
        lastWord="Your POS"
        subtitle="Need support?"
        action="Talk to our team"
        firstBoxTitle="Create A Business Account And Log In"
        firstBoxText="Provide the required information and a business account will be
            created for you instantly. Once done, login to your account and
            click on the POS menu."
        secondBoxTitle="Request And Pay For Your Terminal"
        secondBoxText="Choose Your Preferred Payment Method: When requesting our POS
            device, select the convenience of a one-time payment or the ease of
            installment plans."
        ThirdBoxTitle="Get Your POS Delivered Within 48 Hours"
        thirdBoxText="Upon ordering a POS terminal, you'll be promptly assigned a
            dedicated Relationship Manager. This manager will deliver your
            terminal within 48 hours."
      /> */}
      <CallToAction />
    </>
  );
}
