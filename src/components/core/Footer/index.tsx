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
                    "text-center 768:text-left col-span-12 768:col-span-6 960:mt-0 mt-1 960:col-span-3"
                  }
                  key={title}
                >
                  {isLast && (
                    <>
                      <div className="mb-3 768:mb-4">
                        <p className={clsx("footer_links_header")}>USA</p>
                        <p
                          className={clsx(
                            "footer_link_item pb-0 text-xs 768:text-sm"
                          )}
                        >
                          5900 Balcones Drive, STE 100 Austin, Texas 78731. USA
                        </p>
                        <p className={clsx("footer_link_item pb-0 pt-1")}>
                          <Link href="tel:+19282656523">+1 928 265 6523</Link>
                        </p>
                      </div>

                      <div className="mb-3 768:mb-4">
                        <p className={clsx("footer_links_header")}>
                          United Kingdom
                        </p>
                        <p
                          className={clsx(
                            "footer_link_item pb-0 text-xs 768:text-sm"
                          )}
                        >
                          C/o 151-177 Foleshill Road, Storage King Office
                          Complex. Coventry. CV1 4LF
                        </p>
                        <p className={clsx("footer_link_item pb-0 pt-1")}>
                          <Link href="tel:+447452230428">+44 7452 230428</Link>
                        </p>
                      </div>

                      <div className="mb-3 768:mb-4">
                        <p className={clsx("footer_links_header")}>Nigeria</p>
                        <p
                          className={clsx(
                            "footer_link_item pb-0 text-xs 768:text-sm"
                          )}
                        >
                          162 Peter Odili Road, Port Harcourt Nigeria
                        </p>
                        <p className={clsx("footer_link_item pb-0 pt-1")}>
                          <Link href="tel:+2348134646487">
                            +234 813 464 6487
                          </Link>
                        </p>
                        <p className={clsx("footer_link_item pb-0")}>
                          <Link href="tel:+2349133033349">
                            +234 913 303 3349
                          </Link>
                        </p>
                      </div>
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
                              : link === "Partners"
                                ? "/partnerships"
                                : link === "Contact Us"
                                  ? "/contact-sales"
                                  : link === "support@stephania.africa"
                                    ? "mailto: support@stephania.africa"
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
            <p className="text-neutral-500 text-base">
              ©{new Date().getFullYear()} All rights reserved. Stephania
              Support Services Limited
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
  {
    title: "Services",
    nestedPages: true,
    links: [
      "Engineering Services",
      "Procurement",
      "Construction",
      "Vessel Management",
      "Onshore Solutions",
      "Offshore Solutions",
      "Midstream Solutions",
    ],
  },
  {
    title: "Industries",
    nestedPages: true,
    links: ["Construction", "Oil & Gas", "Power", "Telecommunications"],
  },
  {
    title: "Company",
    links: [
      "About",
      "Partners",
      "Contact Us",
      "Terms of Service",
      "Privacy Policy",
    ],
  },
  {
    title: "Email",
    links: ["info@stephanialtd.com"],
  },
];
