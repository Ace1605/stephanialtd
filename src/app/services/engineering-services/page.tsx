import { Metadata } from "next";
import phone from "/public/assets/products/hero2.jpg";
import { ProductsHero } from "@/components/sections/product/ProductsHero";
import { ProductBrand } from "@/components/sections/product/ProductsBrand";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { ProductFeature } from "@/components/sections/product/ProductFeature";
import attendant from "/public/assets/products/hero3.jpg";
import { SectionSlice } from "@/components/commons/sections/SectionSlice";
import cashierGuy from "/public/assets/products/thirdBannerImage.jpg";
import blueLady from "/public/assets/products/hero2.jpg";
import { CallToAction } from "@/components/core/Footer/CallToAction";

export const metadata: Metadata = {
  title: "Engineering Services",
};

export default function EngineeringServices() {
  return (
    <>
      <ProductsHero
        id="cashier_hero"
        image={phone}
        title={"Professional "}
        lastWord="Engineering"
        continuation=" Services For Your Projects"
        description={
          "Comprehensive engineering solutions including design, consulting, and project management services tailored to meet your specific industry requirements."
        }
        buttonText="Get Started"
      />
      <ProductBrand />
      {/* <ProductFeature
        featureTitle="Collaborate With Your Team "
        lastWord="Anywhere"
        subtitle="Keep everyone focused on the big picture, and let Stephania automate the rest: collect payment, eliminate fake alerts, real time updates."
        image={attendant}
        firstBoxTitle="Payment Verification"
        firstBoxText="Cashier can instantly verify payment without depending on the business owner"
        secondBoxTitle="Fake Alert Elimination"
        secondBoxText="Eliminate risk of bank transfer reversal and customer fraud."
        ThirdBoxTitle="Fast Payment Verification"
        thirdBoxText="Give customer immediate verification, eliminating customers wait time."
        embedded
        embedId="R1b8CjYO6gE"
      />
      <SectionSlice
        imagePosition={"right"}
        title={
          <span className={"1180:text-[49px] block"}>
            Manage all your
            <span>
              <span className={"text-gradient"}> cashier transactions </span>
            </span>
            in a single place
          </span>
        }
        hClassName="768:w-full 768:pr-10"
        description={
          <span className={"block"}>
            {`Sync all of your payments into one place. Create unique cashier profiles for payment collections that settle in one platform.`}
          </span>
        }
        image={cashierGuy}
        action="Get Started"
        withArrow
        actionLink="https://www.stephania.africa/signup"
        target="_blank"
      />
      <SectionSlice
        imagePosition={"left"}
        title={
          <span className={"1180:text-[49px] block"}>
            Optimize business your
            <span>
              <span className={"text-gradient"}> operations</span>
            </span>
          </span>
        }
        description={
          <span className={"block"}>
            {`With Stephania Cashier, you can manage and streamline operations across multiple locations, sales channels, and employees to improve efficiency and your bottom line.`}
          </span>
        }
        image={blueLady}
        action="Try StephaniaCashier"
        actionLink="https://www.stephania.africa/signup"
        target="_blank"
        outline
        hasDownload
      /> */}
      <CallToAction />
    </>
  );
}
