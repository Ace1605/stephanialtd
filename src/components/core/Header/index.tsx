"use client";

import { AppCtaButton } from "@/components/buttons/AppCtaButton";
import { Logo } from "@/components/commons/Logo";
import { ChevronDown } from "@/components/svgs/ChevronDown";
import { hyphenateString } from "@/helpers/converters/hyphenateString";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileMenu } from "@/components/core/MobileMenu";
import { ProductGroup } from "@/components/core/Header/navigation/ProductGroup";
import { BusinessesGroup } from "@/components/core/Header/navigation/BusinessesGroup";
import { IndustriesHeader } from "./IndustriesHeader";
import { DeveloperApisHeader } from "./DeveloperApisHeader";

export interface NavLink {
  title: string;
  hasChildren?: boolean;
  id?: string;
}

export const navigationLinks: NavLink[] = [
  { title: "About", id: "about" },
  {
    title: "Services",
    hasChildren: true,
  },
  { title: "Industries", hasChildren: true },
  { title: "Partners", id: "partnerships" },
  { title: "Contact", id: "contact-sales" },
];

export const Header = () => {
  const pathname = usePathname();

  const [activeGroup, setActiveGroup] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setActiveGroup("");
    setShowMobileMenu(false);
  }, [pathname]);

  function closeMenu() {
    setActiveGroup("");
    setShowMobileMenu(false);
  }

  return (
    <>
      {
        <nav
          className={
            "w-full h-14 480:h-[88px] border-b border-neutral-310 sticky bg-white top-0 z-[1200] left-0"
          }
        >
          <div className="app-container py-0 x-between h-full">
            <div className="h-full gap-8 flex">
              <Logo className={"relative z-10"} onClick={closeMenu} />

              <ul className="hidden 1024:flex h-full py-0 my-0">
                {navigationLinks.map(({ title, id, hasChildren }) => {
                  const url = `/${id ?? hyphenateString(title)}`;

                  const parent = `/${pathname.split("/")[1]}`;

                  if (hasChildren)
                    return (
                      <li
                        onMouseEnter={() => setActiveGroup(title)}
                        onMouseLeave={() => setActiveGroup("")}
                        key={title}
                        className={"m-0"}
                      >
                        <div
                          className={clsx(
                            "nav_item",
                            parent === url && "text-primary-main"
                          )}
                        >
                          <span className={clsx("my-auto")}>{title}</span>

                          <span
                            className={clsx(
                              "my-auto ml-1 duration-300 transition-transform",
                              activeGroup === title && "rotate-180"
                            )}
                          >
                            <ChevronDown />
                          </span>
                        </div>
                      </li>
                    );

                  return (
                    <li key={title} className={"m-0 h-full"}>
                      <Link
                        href={url}
                        onClick={closeMenu}
                        className={clsx(
                          "nav_item",
                          pathname === url && "text-black"
                        )}
                      >
                        <span className={clsx("my-auto")}>{title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="hidden 1024:flex my-auto relative z-[1100] gap-2">
              <AppCtaButton href="#" className={"primary-button y-center ml-2"}>
                Get started
              </AppCtaButton>
            </div>
            <MobileMenu
              className={"block 1024:hidden"}
              {...{ setShowMobileMenu, showMobileMenu }}
            />
          </div>

          <AnimatePresence initial={false}>
            {activeGroup === "Services" || activeGroup === "Industries" ? (
              <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: {
                    height: "auto",
                    transition: {
                      duration: 0.5,
                    },
                  },
                  collapsed: {
                    height: 0,
                    overflow: "hidden",
                    transition: {
                      duration: 0.2,
                    },
                  },
                }}
                onMouseEnter={() => setActiveGroup(() => activeGroup)}
                onMouseLeave={closeMenu}
                className="sticky z-[1000] 1024:block hidden left-0 bg-white mt-0 w-full rounded-b-[20px] border-t"
              >
                <div className={clsx("h-[250px] app-container pb-20 pt-20")}>
                  {activeGroup === "Services" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <BusinessesGroup close={closeMenu} />
                    </motion.div>
                  )}
                  {activeGroup === "Industries" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <IndustriesHeader close={closeMenu} />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav>
      }
      <AnimatePresence>
        {activeGroup && (
          <motion.div
            initial="hide"
            animate="show"
            exit="hide"
            variants={{
              show: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                },
              },
              hide: {
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              },
            }}
            className={clsx(
              `no-highlight 1024:block hidden fixed z-[800] inset-0 h-screen w-full bg-black bg-opacity-30`
            )}
          />
        )}
      </AnimatePresence>
    </>
  );
};
