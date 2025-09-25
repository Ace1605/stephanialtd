'use client';

import { TabSwitch } from '../tabs';
import { useState } from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from '@/components/svgs/ChevronDown';
import { Logo } from '@/components/commons/Logo';
import { usePathname } from 'next/navigation';

export const IndustriesHeader = () => {
  const [activeTab, setActiveTab] = useState<{
    title: string;
    value: string;
  } | null>(null);
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  const getActive = (param: any) => {
    setActiveTab(param);
  };
  const resetActive = () => {
    setActive(!active);
  };

  return (
    <>
      <nav
        className={
          'w-full h-14 480:h-20 border-b border-neutral-310 sticky bg-white top-0 z-[1200] left-0'
        }
      >
        <div className='app-container py-5'>
          <div className='block ease-in-out duration-300 1024:flex 1024:justify-between items-center w-full'>
            <div className='hidden 1024:flex gap-7 items-center'>
              <Logo className={'relative z-10'} />
              <TabSwitch isIndustries sticky={true} getActive={getActive} />
            </div>
          </div>
          <div className='1024:hidden flex items-center justify-between'>
            <Logo className={'relative z-10'} />
            <div
              onClick={() => setActive(!active)}
              className={clsx(
                'w-full 1024:w-none flex items-center justify-end h-5 480:h-[40px]',
              )}
            >
              <p className='hidden'>{activeTab?.title ?? null}</p>
              <span
                className={clsx(
                  'my-auto ml-1 duration-300 transition-transform',
                  active === true && 'rotate-180',
                )}
              >
                <ChevronDown />
              </span>
            </div>
          </div>
        </div>
      </nav>
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
                  <TabSwitch
                    resetActive={resetActive}
                    sticky={true}
                    isIndustries
                    getActive={getActive}
                  />
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
              `no-highlight block 1024:hidden fixed z-[800] inset-0 h-screen w-full bg-black bg-opacity-30`,
            )}
          />
        )}
      </AnimatePresence>
    </>
  );
};
