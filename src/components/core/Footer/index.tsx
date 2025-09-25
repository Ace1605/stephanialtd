"use client";

import { hyphenateString } from "@/helpers/converters/hyphenateString";
import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";
import { Socials } from "./Socials";
import { businessesLinks } from "../Header/navigation/BusinessesGroup";
import { productGroupLinks } from "../Header/navigation/ProductGroup";
import { Link as PageScroll } from "react-scroll";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={"relative z-10  bg-black pb-4 -mt-2"}>
      <div className="app-container">
        <div className="grid py-14 768:py-32 grid-cols-12 gap-4">
          {footerGroups.map(
            (
              {
                title,
                nestedPages,
                headerHiddenOnMobile,
                modifier,
                nestedSections,
                header,
                links,
              },
              i
            ) => {
              const isLast = i === footerGroups.length - 1;
              const parentHref = hyphenateString(title);

              return (
                <div
                  className={
                    "text-center 768:text-left col-span-12 768:col-span-6 960:mt-0 mt-1 960:col-span-4"
                  }
                  key={title}
                >
                  {isLast && (
                    <>
                      <div className="mb-3 768:mb-4">
                        <p className={clsx("footer_links_header")}>Contact</p>
                        <p className={clsx("footer_link_item pb-0")}>
                          <Link href="tel:+2342016335260">+234 2016335260</Link>
                          ,
                        </p>
                        <p className={clsx("footer_link_item pb-0 pt-1")}>
                          <Link href="tel:+2342016339125">+234 2016339125</Link>
                        </p>
                      </div>

                      <div
                        className={clsx(
                          i !== footerGroups.length - 1 && "h-6 425:h-7"
                        )}
                      >
                        <p className={clsx("footer_links_header")}>Whatsapp</p>
                      </div>

                      <Link
                        href="https://wa.me/2348028108892"
                        className={clsx("footer_link_item")}
                        target="_blank"
                      >
                        +234 802 810 8892
                      </Link>
                    </>
                  )}
                  <div
                    className={clsx(
                      i !== footerGroups.length - 1 && "h-6 425:h-7",
                      headerHiddenOnMobile && "425:block hidden"
                    )}
                  >
                    {header ? (
                      <span>{header}</span>
                    ) : (
                      <p className={clsx("footer_links_header")}>{title}</p>
                    )}
                  </div>

                  {links.map((link) => {
                    const href = `/${
                      nestedPages || nestedSections ? parentHref : ""
                    }${
                      nestedSections ? "#" : nestedPages ? "/" : ""
                    }${hyphenateString(modifier ? modifier(link) : link)}`;
                    if (link === "Testimonials" && pathname === "/") {
                      return (
                        <PageScroll
                          key={link}
                          to="home_testimonial"
                          spy={true}
                          smooth={true}
                          duration={500}
                          className={clsx("footer_link_item cursor-pointer")}
                        >
                          {link}
                        </PageScroll>
                      );
                    }
                    return (
                      <Link
                        href={
                          link === "Terms of Service"
                            ? "/legal/terms-of-use"
                            : link === "Privacy Policy"
                              ? "/legal/privacy-policy"
                              : link === "Support"
                                ? "/contact-sales"
                                : link === "support@vpay.africa"
                                  ? "mailto: support@vpay.africa"
                                  : href
                        }
                        key={link}
                        className={clsx("footer_link_item")}
                      >
                        {link}
                      </Link>
                    );
                  })}
                  {isLast && (
                    <div className="mt-3">
                      <Socials />
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
        <div className="py-8 border-t text-center 768:text-left border-neutral-900 grid 768:flex gap-4 items-center justify-center 768:justify-between">
          <div>
            <p className="text-neutral-500 text-base mb-4 768:pr-12">
              VPay, powered by VFD Microfinance Bank and Minerva Technologies,
              provides financial services through its different web and mobile
              platforms. VPay and VFD are legal trademarks in Nigeria. All
              rights reserved.
            </p>
            <p className="text-neutral-500 text-base">
              ©{new Date().getFullYear()} VPay. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerGroups: {
  title: string;
  prefix?: string;
  header?: ReactNode;
  links: string[];
  nestedPages?: boolean;
  nestedSections?: boolean;
  headerHiddenOnMobile?: boolean;
  modifier?: (link: string) => string;
}[] = [
  // {
  //   title: 'Products',
  //   nestedPages: true,
  //   links: [
  //     ...productGroupLinks.links?.products,
  //     ...productGroupLinks.links?.['company size']?.slice(0, 1),
  //   ],
  // },
  {
    title: "Businesses",
    nestedPages: true,
    links: [
      ...businessesLinks.links?.businesses,
      ...businessesLinks.links?.["company size"],
    ],
  },
  {
    title: "Resources",
    links: [
      "About",
      "Pricing",
      "Support",
      "VPay Blog",
      "Terms of Service",
      "Privacy Policy",
    ],
  },
  {
    title: "Email",
    links: ["support@vpay.africa"],
  },
];
