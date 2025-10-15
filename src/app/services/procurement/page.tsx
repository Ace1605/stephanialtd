import { Metadata } from "next";
import phone from "/public/assets/products/hero2.jpg";
import posGuy from "/public/assets/products/hero3.jpg";
import { ProductsHero } from "@/components/sections/product/ProductsHero";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { ProductFeature } from "@/components/sections/product/ProductFeature";
import { HowToGetStarted } from "@/components/sections/product/HowToGetStarted";
import pos from "/public/assets/products/thirdBannerImage.jpg";
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
        title={"Streamlined "}
        lastWord="Procurement Services"
        description={
          "Comprehensive procurement solutions designed to optimize your supply chain and reduce costs while maintaining quality standards."
        }
        buttonText="Request Terminal"
      />
      <ProductBrand />
      {/* <ProductFeature
        featureTitle="Robust and User-Friendly "
        lastWord="Payment Devices "
        continuation="for African Enterprises"
        subtitle="Elevate your sales with our advanced, feature-rich POS device, designed to enable you to craft personalized, brand-centric customer experiences."
        image={pos}
        firstBoxTitle="Multiple Payment Channel"
        firstBoxText="Unlike typical POS systems that only process card payments, Stephania Terminal offers a variety of payment options for customers."
        secondBoxTitle="Simplified Daily Accounting"
        secondBoxText="Track each Terminal transaction in real time via the Stephania Dashboard, rather than as a single bulk sum, saving numerous hours in reconciliation."
        ThirdBoxTitle="Exceptional Connectivity"
        thirdBoxText="Our Terminal devices come equipped with both Wi-Fi and a global SIM card, with a robust data signal for continuous network access."
      />
      <SectionSlice
        imagePosition={"right"}
        title={
          <span className={"1180:text-[49px] block"}>
            Perform a Variety of
            <span>
              <span className={"text-gradient"}> Transactions</span>
            </span>
          </span>
        }
        description={
          <span className={"block"}>
            {`Experience the versatility of conducting various transactions with ease. With our POS terminal, you can accept transfers, facilitate bill payments, and process both card and QR payments effortlessly. Additionally, provide instant printed receipts to customers for a seamless transaction experience.`}
          </span>
        }
        image={posGuy}
        action="Request Terminal"
        actionLink="https://www.stephania.africa/signup"
        target="_blank"
      />
      <HowToGetStarted
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
