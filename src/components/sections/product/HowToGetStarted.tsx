'use client';

import { AppCtaButton } from '@/components/buttons/AppCtaButton';
import { AppleGoogleBtn } from '@/components/commons/AppleGoogleBtn';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  subtitle: string;
  action: string;
  title: string;
  lastWord: string;
  firstBoxTitle: string;
  firstBoxText: string;
  secondBoxTitle: string;
  secondBoxText: string;
  ThirdBoxTitle: string;
  thirdBoxText: string;
}

export const HowToGetStarted = ({
  subtitle,
  title,
  lastWord,
  action,
  firstBoxTitle,
  firstBoxText,
  secondBoxTitle,
  secondBoxText,
  ThirdBoxTitle,
  thirdBoxText,
}: Props) => {
  return (
    <section
      id={'product_feature'}
      className={'app-container overflow-hidden pb-20 768:pb-8'}
    >
      <h3 className='text-left text-black text-[38px] 640:text-48px] 1180:text-[60px] leading-[48px] 640:leading-[64px] 1180:leading-[72px] tracking-[-1.8px] font-bold'>
        {title}
        <span className={'640:inline block'}>
          <span className={'text-gradient'}>{lastWord}</span>
        </span>
      </h3>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className={
          'mt-2 768:mt-4 text-black text-base 768:leading-[28px] 768:text-[18px] font-normal text-left pr-2'
        }
      >
        {subtitle}{' '}
        <Link href='/contact-sales' className='underline text-primary-400'>
          {action}
        </Link>
      </motion.p>
      <div className='grid 768:grid-cols-3 gap-6 768:gap-10 mt-10 768:mt-12 768:mt-16 768:mb-32'>
        <div className='bg-neutral-150 rounded-xl p-9'>
          <p className='text-black text-xl font-semibold 768:w-4/5'>
            {firstBoxTitle}
          </p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className={
              'mt-3 text-black text-base 768:leading-[28px] 768:text-[18px] font-light text-left pr-2'
            }
          >
            {firstBoxText}
          </motion.p>
          {/* <div className='mt-7'>
            <AppleGoogleBtn />
          </div> */}
        </div>
        <div className='bg-neutral-150 rounded-xl p-9'>
          <p className='text-black text-xl font-semibold 768:w-4/5'>
            {secondBoxTitle}
          </p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className={
              'mt-3 text-black text-base 768:leading-[28px] 768:text-[18px] font-light text-left pr-2'
            }
          >
            {secondBoxText}
          </motion.p>
        </div>
        <div className='bg-neutral-150 rounded-xl p-9'>
          <p className='text-black text-xl font-semibold 768:w-4/5'>
            {ThirdBoxTitle}
          </p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className={
              'mt-3 text-black text-base 768:leading-[28px] 768:text-[18px] font-light text-left pr-2'
            }
          >
            {thirdBoxText}
          </motion.p>
          <div className='flex justify-start mt-7'>
            <AppCtaButton
              href='https://www.vpay.africa/signup'
              target='_blank'
              className={'primary-button gap-2 group x-center px-5'}
              withArrow
            >
              <span className='h-full y-center'>Get Started</span>
            </AppCtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};
