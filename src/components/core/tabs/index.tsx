'use client';

import { useEffect, useState } from 'react';
import { TabOption, Tabs } from './Tabs';
import { HomeFilterOptions } from '@/contants/filters';
import { usePathname } from 'next/navigation';

interface TabSwitchProps {
  getActive: (activeTab: TabOption) => void;
  sticky?: boolean;
  resetActive?: () => void;
  isIndustries?: boolean;
}

export const TabSwitch = ({
  getActive,
  sticky,
  isIndustries,
  resetActive,
}: TabSwitchProps) => {
  const pathname = usePathname();

  const tabs = HomeFilterOptions?.slice(0, -2).map(({ title, value }) => ({
    title: String(title),
    value: value,
  }));

  const [filter, setFilter] = useState<{
    title: string;
    value: string;
  } | null>(null);
  useEffect(() => {
    for (const option of HomeFilterOptions) {
      if (pathname.includes(option.value)) {
        setFilter({ title: option.title, value: option.value });
        return;
      }
      if (pathname === '/') {
        setFilter(tabs[0]);
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (getActive && filter) {
      getActive(filter);
    }
  }, [getActive, filter]);

  return (
    <div className='w-full'>
      <Tabs
        className={'1024:rounded-full bg-transparent '}
        sliderClassname={'bg-black rounded-full'}
        tabClassname={'w-full 1024:w-fit capitalize'}
        layoutId={'library_tab'}
        displayValueClassname={
          'text-sm hover:text-primary-main text-neutral-main'
        }
        duration={0.3}
        tabs={
          sticky && !isIndustries
            ? HomeFilterOptions
            : sticky && isIndustries
              ? HomeFilterOptions.slice(1)
              : tabs
        }
        action={(tab) => {
          setFilter(tab);
          getActive(tab);
        }}
        currentTab={filter!}
        sticky={sticky}
        resetActive={resetActive}
        isIndustries={isIndustries}
      />
    </div>
  );
};
