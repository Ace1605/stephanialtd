"use client";

import { CallToAction } from "@/components/core/Footer/CallToAction";
import { PseudoNavigation } from "@/components/core/Header/PseudoNavigation";
import { TabOption } from "@/components/core/tabs/Tabs";
import { DownloadPrompt } from "@/components/sections/home/DownloadPrompt";
import { ExploreOptions } from "@/components/sections/home/ExploreOptions";
import { Hero } from "@/components/sections/home/Hero";
import { TestimonialSlide } from "@/components/sections/home/TestimonialSlide";
import { WhyChooseVpay } from "@/components/sections/home/WhyChooseVPay";
import { HomeFilterOptions } from "@/contants/filters";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { hyphenateString } from "@/helpers/converters/hyphenateString";

export default function Home() {
  const stickyTabRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [active, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState<{
    title: string;
    value: string;
  } | null>(null);
  const [width, setWidth] = useState<number>(0);
  const stickyHeight = 70;
  const { push } = useRouter();
  const updateBtn = () => {
    if (stickyTabRef.current) {
      const divYPosition = stickyTabRef.current.getBoundingClientRect().top;
      if (divYPosition <= stickyHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateBtn);

    return () => {
      window.removeEventListener("scroll", updateBtn);
    };
  }, []);

  useEffect(() => {
    if (!isSticky) {
      setActive(false);
    }
  }, [isSticky]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.body.clientWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getActive = (param: TabOption) => {
    setActiveTab(param);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tab = tabs.find(({ value }) => e.target.value === value);

    if (!tab) return;

    setFilter(tab);

    push(`/businesses/${hyphenateString(tab.value)}`);
  };

  const tabs = HomeFilterOptions.map(({ title, value }) => ({
    name: String(title),
    value: value,
  }));

  const [filter, setFilter] = useState<{
    name: string;
    value: string;
  } | null>(tabs[0]);

  return (
    <main>
      <Hero />
      <section id={"why-choose-vpay"} className="flex flex-col">
        <div
          id="stickyTab"
          ref={stickyTabRef}
          className={clsx(
            isSticky &&
              "sticky bg-white top-0 z-[1300] left-0 shadow-md 1024:shadow-none h-14 480:h-[88px]",
            "border-b border-neutral-170 mb-8 bg-white py-5"
          )}
        >
          <PseudoNavigation
            isSticky={isSticky}
            width={width}
            tabs={tabs}
            active={active}
            activeTab={activeTab}
            setActive={setActive}
            getActive={getActive}
            handleChange={handleChange}
          />
        </div>
        {/* <WhyChooseVpay /> */}
        <TestimonialSlide />
        {/* <DownloadPrompt />
        <ExploreOptions /> */}
        <CallToAction />
      </section>
    </main>
  );
}
