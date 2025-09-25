'use client';

import { AppCtaButton } from '@/components/buttons/AppCtaButton';
import illustration from '/public/assets/megamenu/phone.png';
import { Apple, GooglePlay } from '@/components/svgs/Socials';
import { Line } from '@/components/svgs/app/Line';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AppleGoogleBtn } from '@/components/commons/AppleGoogleBtn';

export const DownloadPrompt = () => {
  return (
    <section
      id={'download_prompt'}
      className={
        'overflow-hidden mt-7 768:mt-1 p-9 640:py-14 640:px-14 960:py-36 gradient-bg mx-7 768:mx-8 mb-8 rounded-3xl'
      }
    >
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        className='grid 1024:app-container 1024:flex gap-8 1024:gap-1 relative'
      >
        <div>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.7,
            }}
            className='text-center 1024:text-left text-white font-medium text-sm 768:text-base 560:text-lg'
          >
            Download The VPay App
          </motion.p>
          <motion.h4
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            className={
              'text-center tracking-[-1.25px] 1024:tracking-[-3.3px] font-bold mt-1 768:mt-2 1024:text-left text-white text-[25px] 640:text-[48px] 1180:text-[58px] 1300:text-[66px] leading-[31px] 640:leading-[60px] 1180:leading-[75px] w-full 1024:w-7/12 1180:w-2/3 1024:pr-20'
            }
          >
            Join over 90,000+ businesses using VPay to simplify payments
          </motion.h4>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 1.2,
            }}
            className='grid 560:flex items-center justify-center 1024:justify-start gap-4 1180:gap-6 pt-6 560:pt-8 1024:pt-12'
          >
            <AppleGoogleBtn />
            <AppCtaButton
              href='https://www.vpay.africa/signup'
              target='_blank'
              className={
                'hidden outline-button bg-transparent h-12 768:h-14 text-white hover:border-white gap-2 group 1024:x-center px-4 1180:px-6'
              }
              withArrow
            >
              <span className='h-full y-center'>Sign Up for free</span>
            </AppCtaButton>
          </motion.div>
        </div>
        <div className='relative 1024:hidden block h-[350px] 768:h-[400px]'>
          <Image
            className='absolute left-1/2 425:-bottom-[9rem] 480:-bottom-40 768:-bottom-36  transform -translate-x-1/2 w-[350px] 1024:w-[400px]'
            src={illustration}
            priority
            alt='vpay_prompt'
          />
        </div>
        <Image
          className='absolute 1024:block hidden 1024:-top-20 1300:-top-24 right-0 1300:right-6 w-[370px] 1024:w-[400px]'
          src={illustration}
          priority
          alt='vpay_prompt'
        />
      </motion.div>
    </section>
  );
};
