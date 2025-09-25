import { SetStateAction, Dispatch } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { hyphenateString } from '@/helpers/converters/hyphenateString';

export type TabOption = { title: string; value: string };

type Props = {
  tabs: TabOption[];
  className?: string;
  currentTab: TabOption;
  setCurrentTab?: Dispatch<SetStateAction<TabOption>>;
  action?: (tab: TabOption) => void;
  layoutId?: string; // To track the tab animation
  sliderClassname?: string;
  duration?: number;
  displayValueClassname?: string;
  tabClassname?: string;
  sticky?: boolean;
  isIndustries?: boolean;
  resetActive?: () => void;
};

export const Tabs = ({
  tabs,
  className,
  layoutId,
  duration = 0.1,
  displayValueClassname,
  currentTab,
  setCurrentTab,
  sliderClassname,
  tabClassname,
  action,
  resetActive,
  sticky,
  isIndustries,
}: Props) => {
  return (
    <div
      className={clsx(
        className ?? 'rounded-lg',
        'hidden-scrollbar w-full overflow-x-auto bg-neutral-150',
      )}
    >
      <div
        className={clsx(
          `my-auto gap-0 1024:gap-2.5 grid 1024:flex h-full w-full py-1 px-0 640:p-1 align-middle`,
        )}
      >
        {tabs?.map((tab, index) => {
          const displayValue = tab.title;

          const isActive = tab['value'] === (currentTab as any)?.['value'];

          return (
            <button
              onClick={() => {
                if (setCurrentTab) setCurrentTab(tab);

                if (action) action(tab);
                if (resetActive) resetActive();
              }}
              id={`tabs-${displayValue}`}
              key={displayValue}
              type='button'
              className={clsx(
                'relative h-12 1024:h-9 transition-none border rounded-full 1024:my-0 border-neutral-100',
                tabClassname ?? 'w-full',
                sticky && 'my-2',
              )}
            >
              <Link
                href={
                  isIndustries
                    ? `/businesses/${hyphenateString(displayValue)}`
                    : !isIndustries && index > 0
                      ? `/businesses/${hyphenateString(displayValue)}`
                      : '/#hero'
                }
                className={clsx(
                  `y-center smooth relative z-10 h-full flex-shrink-0 text-base 1024:text-sm font-medium px-6 1024:px-5 1180:px-8`,
                  isActive
                    ? 'text-white'
                    : displayValueClassname ?? 'text-neutral-main',
                )}
              >
                {displayValue}
              </Link>

              {isActive && (
                <motion.div
                  className='absolute inset-0 z-0 h-12 1024:h-9 w-full'
                  transition={{
                    duration,
                  }}
                  layoutId={layoutId}
                >
                  <div
                    className={clsx(
                      `h-full w-full shadow-sm`,
                      sliderClassname ?? 'rounded-md',
                    )}
                  ></div>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
