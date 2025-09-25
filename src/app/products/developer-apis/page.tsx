import { HeroCtaPair } from "@/components/commons/hero/HeroCtaPair";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import { AppCtaButton } from "@/components/buttons/AppCtaButton";
import { BuildAwesomeProducts } from "@/components/sections/product/developer_apis/BuildAwesomeProducts";
import clsx from "clsx";
import { TrustedDevelopers } from "@/components/sections/product/developer_apis/TrustedDevelopers";
import { CallToAction } from "@/components/core/Footer/CallToAction";

export default async function DeveloperApis() {
  const client = createClient();
  const faqs = await client.getAllByType("faq");
  const apis = await client.getSingle("developer_apis", {
    graphQuery: `
    {
        developer_apis {
            title
            description
            banner
            categories
            slices

        }
    }`,
  });

  const {
    data: { description, banner, slices },
  } = apis;

  return (
    <>
      <div className="relative">
        <div className="pt-8 640:pt-20 pb-8 640:pb-20">
          <div className="app-container grid gap-10 768:gap-20 mt-10 items-center">
            <div className="relative">
              <h6 className="text-center text-black text-[40px] 640:text-[48px] 1180:text-[66px] leading-[49px] 640:leading-[60px] 1180:leading-[73px] tracking-[-1.7px] 640:tracking-[-3.3px] 560:max-w-[440px] 1024:max-w-[560px] mx-auto !font-bold">
                Build Seamlessly With Reliable
                <span>
                  <span className={"text-gradient"}> APIs</span>
                </span>
              </h6>
              <p className="mt-5 text-neutral-1000 text-center ">
                {description}
              </p>
              <div className="relative h-[100px]">
                <HeroCtaPair
                  buttonUrl="https://docs.vpay.africa/vpay-js-inline-dropin-integration-guide"
                  buttonText="Read our API Docs"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BuildAwesomeProducts />
      <div className="app-container my-6">
        <TrustedDevelopers />
        <div className="relative">
          {slices.map(({ id, slice_type, primary, items }, index) => {
            if (slice_type === "content_block") {
              return (
                <div
                  className={
                    "grid mt-12 mb-20 768:my-36 768:grid-cols-2 gap-8 768:gap-20 items-center"
                  }
                  key={id}
                >
                  <div
                    className={clsx(
                      index % 2 != 1 && "768:!order-2",
                      "tall-list img-list order-2 768:order-none"
                    )}
                  >
                    {primary && (
                      <PrismicRichText field={primary.content} key={id} />
                    )}
                  </div>
                  <div className={"rich-text tall-list prismic-head"}>
                    {items.map(({ content }) => {
                      return (
                        <div key={id}>
                          <PrismicRichText field={content} />
                          <div className={"flex mt-2 768:mt-4"}>
                            <AppCtaButton
                              href="/contact-sales"
                              className={
                                "primary-button gap-2 h-12 768:h-14 group x-center"
                              }
                              withArrow
                            >
                              <span className="h-full y-center">
                                Contact Us
                              </span>
                            </AppCtaButton>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <FaqsAsFooter left faqs={faqs} />
      <CallToAction />
    </>
  );
}
