"use client";

import { AppCtaButton } from "@/components/buttons/AppCtaButton";
import { ArrowRight } from "@/components/svgs/Arrows";
import { usePathname } from "next/navigation";
import { Link } from "react-scroll";

export const CallToAction = () => {
  const pathname = usePathname();

  return (
    <section
      className={
        "pt-16 relative z-5 640:pt-24 pb-3 bg-black border-t border-neutral-900"
      }
    >
      <div className="app-container flex flex-col gap-4">
        <h4 className={"max-w-[660px] text-white text-center mx-auto"}>
          Get pro <span className="text-gradient">support</span>.
        </h4>

        <p
          className={
            "768:mt-5 text-neutral-300 text-base leading-[24px] 768:leading-[28px] 768:text-[18px] max-w-[640px] tracking-[-0.32px] 768:tracking-[-0.36px] font-medium mx-auto text-center px-4 768:px-0"
          }
        >
          We’re here to help. If you need assistance switching from your current
          solution, have any questions about why VPay is right for your
          business, or want support getting started, please talk to a member of
          our team.
        </p>

        <div className={"x-center 960:mt-5 1024:mt-7"}>
          {pathname !== "/contact-sales" ? (
            <AppCtaButton
              href="/contact-sales"
              className={"primary-button gap-2 h-12 768:h-14 group x-center"}
              withArrow
            >
              <span className="h-full y-center">Contact Us</span>
            </AppCtaButton>
          ) : (
            <Link
              key={pathname}
              to="contact_sales"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button
                className={"primary-button gap-2 h-12 768:h-14 group x-center"}
              >
                <span className="h-full y-center">Contact Us</span>
                <span
                  className={
                    "group-hover:translate-x-1 transition-transform duration-300 my-auto"
                  }
                >
                  <ArrowRight />
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
