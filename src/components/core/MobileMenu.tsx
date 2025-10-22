import { AppCtaButton } from "@/components/buttons/AppCtaButton";
import { navigationLinks } from "@/components/core/Header";
import { productGroupLinks } from "@/components/core/Header/navigation/ProductGroup";
import { MobileMenuWrapper } from "@/components/modal/ModalWrapper";
import { ChevronDown } from "@/components/svgs/ChevronDown";
import { Cancel, Hamburger } from "@/components/svgs/Navigation";
import { hyphenateString } from "@/helpers/converters/hyphenateString";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { businessesLinks } from "@/components/core/Header/navigation/BusinessesGroup";
import { industries } from "./Header/IndustriesHeader";
import { url } from "inspector";

interface Props {
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
  showMobileMenu: boolean;
  className: string;
}

export const MobileMenu = ({
  showMobileMenu,
  setShowMobileMenu,
  className,
}: Props) => {
  const pathname = usePathname();

  const [activeGroup, setActiveGroup] = useState("");

  const subNavItems =
    activeGroup === "Services"
      ? [
          ...businessesLinks.links?.["core services"].map((title) => ({
            label: title,
            url: `/services/${hyphenateString(title)}`,
          })),
          ...businessesLinks.links?.["specialized solutions"].map((title) => ({
            label: title,
            url: `/services/${hyphenateString(title)}`,
          })),
        ]
      : [
          ...industries.map((x) => ({
            label: x,
            url: `/industries/${hyphenateString(x)}`,
          })),
        ];

  function close() {
    setShowMobileMenu(false);
  }

  return (
    <div className={clsx("y-center", className)}>
      {/* Modern Hamburger Button */}
      <motion.button
        onClick={() => setShowMobileMenu((prev) => !prev)}
        className="relative h-10 w-10 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-white x-center">
          <motion.div
            animate={showMobileMenu ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {showMobileMenu ? <Cancel /> : <Hamburger />}
          </motion.div>
        </div>
      </motion.button>

      <MobileMenuWrapper
        show={showMobileMenu}
        close={close}
        className="w-full bg-gradient-to-br from-white via-gray-50 to-white flex flex-col h-full"
      >
        {/* Navigation Items */}
        <div className="px-4 py-4 space-y-2 flex-1 overflow-y-auto">
          {navigationLinks.map(({ title, id, hasChildren }, index) => {
            const url = `/${id ?? hyphenateString(title)}`;
            const parent = `/${pathname.split("/")[1]}`;
            const isActive = activeGroup === title;

            if (hasChildren) {
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="overflow-hidden"
                >
                  <motion.button
                    onClick={() => setActiveGroup(isActive ? "" : title)}
                    className={clsx(
                      "w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group",
                      isActive || parent === url
                        ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-primary-main shadow-sm"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    )}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-semibold text-left">{title}</span>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400 group-hover:text-gray-600"
                    >
                      <ChevronDown />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pr-2 pb-2 space-y-1">
                          {subNavItems.map(({ label, url }, subIndex) => (
                            <motion.div
                              key={label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                            >
                              <Link
                                href={url}
                                onClick={close}
                                className={clsx(
                                  "block px-4 py-3 text-sm rounded-xl transition-all duration-200",
                                  pathname === url
                                    ? "bg-primary-main text-white font-medium shadow-md"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                )}
                              >
                                <span className="flex items-center">
                                  <div className="w-1.5 h-1.5 rounded-full bg-current opacity-50 mr-3"></div>
                                  {label}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={url}
                  onClick={close}
                  className={clsx(
                    "flex items-center p-4 rounded-2xl transition-all duration-300 group",
                    pathname === url
                      ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-primary-main shadow-sm"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <span className="font-semibold">{title}</span>
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    →
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer CTA - Fixed to bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="px-6 py-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white"
        >
          <AppCtaButton
            href="/contact-sales"
            type={"signin"}
            className="w-full flex items-center justify-center bg-gradient-to-r from-primary-main to-cyan-600 hover:from-primary-main hover:to-cyan-700 text-white font-semibold h-11 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </AppCtaButton>
        </motion.div>
      </MobileMenuWrapper>
    </div>
  );
};
