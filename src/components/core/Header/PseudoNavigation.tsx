import { ChevronDown } from '@/components/svgs/ChevronDown';
import React from 'react';
import { TabSwitch } from '../tabs';
import { TabOption } from '../tabs/Tabs';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

interface Tab {
  name: string;
  value: string;
}

interface Props {
  isSticky: boolean;
  width: number;
  tabs: Tab[];
  activeTab: TabOption | null;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  getActive: (param: TabOption) => void;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const PseudoNavigation = ({
  isSticky,
  width,
  tabs,
  activeTab,
  active,
  setActive,
  getActive,
  handleChange,
}: Props) => {
  const shouldRenderTabs =
    (!isSticky && width <= 1024) ||
    (isSticky && width >= 1024) ||
    (!isSticky && width >= 1024);

  const renderTabs = (): JSX.Element | null => {
    if (!shouldRenderTabs) return null;

    return (
      <div className='block ease-in-out duration-300 1024:flex 1024:justify-between items-center w-full'>
        <div className='hidden 1024:flex gap-7 items-center'>
          <p className='text-left text-neutral-500'>Industries</p>
          {/* You may need to adjust the types for TabSwitch and getActive */}
          <TabSwitch sticky={isSticky} getActive={getActive} />
        </div>
        <div className={'1024:hidden flex'}>
          <select
            onChange={handleChange}
            className={'w-full bg-white capitalize '}
            style={{
              border: 'none',
              boxShadow: 'none',
            }}
          >
            {tabs.map(({ name, value }) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };

  const renderStickyTabs = (): JSX.Element | null => {
    if (!isSticky || width > 1024) return null;

    return (
      <div
        onClick={() => setActive(!active)}
        className={
          'block 1024:hidden flex items-center justify-between h-5 480:h-[40px]'
        }
      >
        <p>{activeTab?.title ?? null}</p>
        <span
          className={
            'my-auto ml-1 duration-300 transition-transform ' +
            (active === true ? 'rotate-180' : '')
          }
        >
          <ChevronDown />
        </span>
      </div>
    );
  };

  return (
    <>
      <div className='app-container'>
        {renderTabs()}
        {renderStickyTabs()}
      </div>

      <AnimatePresence initial={false}>
        {active ? (
          <motion.div
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: {
                height: 'auto',
                transition: {
                  duration: 0.5,
                },
              },
              collapsed: {
                height: 0,
                overflow: 'hidden',
                transition: {
                  duration: 0.2,
                },
              },
            }}
            className='block 1024:hidden fixed z-[1000] top-0 left-0 bg-white mt-14 480:mt-[80px] w-full py-4 px-4 768:px-8'
          >
            <div className={clsx('h-screen')}>
              {active && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className='h-screen relative'
                >
                  <p className='text-center my-2 text-neutral-500'>
                    Industries
                  </p>
                  <TabSwitch sticky={isSticky} getActive={getActive} />
                </motion.div>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <motion.div
            initial='hide'
            animate='show'
            exit='hide'
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
              `no-highlight block 1024:hidden fixed z-[800] inset-0 mt-14 h-screen w-full bg-black bg-opacity-30`,
            )}
          />
        )}
      </AnimatePresence>
    </>
  );
};
