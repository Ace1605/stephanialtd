import { Metadata } from "next";
import phone from "/public/assets/businesses/1223.jpg";
import { ProductsHero } from "@/components/sections/product/ProductsHero";
import { ProductBrand } from "@/components/sections/product/ProductsBrand";
import { ProductFeature } from "@/components/sections/product/ProductFeature";
import design from "/public/assets/businesses/50906.jpg";
import { SectionSlice } from "@/components/commons/sections/SectionSlice";
import project from "/public/assets/businesses/3932.jpg";
import process from "/public/assets/businesses/23070.jpg";
import { CallToAction } from "@/components/core/Footer/CallToAction";
import { Stars } from "@/components/svgs/Stars";

export const metadata: Metadata = {
  title: "Engineering Services",
};

export default function EngineeringServices() {
  return (
    <>
      <ProductsHero
        id="cashier_hero"
        image={phone}
        title={"Bespoke "}
        lastWord="Engineering"
        continuation=" Services"
        description={
          "Comprehensive engineering solutions including design, consulting, and project management services tailored to meet your specific industry requirements."
        }
        buttonText="Get Started"
      />
      <ProductBrand />
      <ProductFeature
        featureTitle="Expert Engineering "
        lastWord="Design"
        continuation=" & Consulting"
        subtitle="Transform your vision into reality with our comprehensive engineering expertise covering design, analysis, and technical consulting across multiple industries."
        image={design}
      />
      <SectionSlice
        imagePosition={"right"}
        title={
          <span className={"1180:text-[49px] block"}>
            Streamline your
            <span>
              <span className={"text-gradient"}> project lifecycle </span>
            </span>
            management
          </span>
        }
        hClassName="768:w-full 768:pr-10"
        description={
          <span className={"block"}>
            {`From initial concept to final delivery, our project management expertise ensures your engineering projects are completed on time, within budget, and to specification.`}
          </span>
        }
        image={project}
        action="Get Started"
        withArrow
        actionLink="/contact-sales"
        floatingImage={
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/2 rounded-full flex items-center justify-center">
            <Stars />
          </div>
        }
        floatingImageClassName="right-10 top-10"
      />
      <SectionSlice
        imagePosition={"left"}
        title={
          <span className={"1180:text-[49px] block"}>
            Optimize your
            <span>
              <span className={"text-gradient"}> engineering processes</span>
            </span>
          </span>
        }
        description={
          <span className={"block"}>
            {`With Stephania's engineering services, you can enhance operational efficiency, reduce costs, and improve quality across your entire engineering workflow.`}
          </span>
        }
        image={process}
        action="Contact Us"
        actionLink="/contact-sales"
        outline
        floatingIcon={
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/2 rounded-full flex items-center justify-center">
            <Stars />
          </div>
        }
        floatingIconClassName="-right-2 top-16"
        floatingImage={
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/2 rounded-full flex items-center justify-center">
            <Stars />
          </div>
        }
        floatingImageClassName="left-10 top-10"
      />
      <CallToAction />
    </>
  );
}
