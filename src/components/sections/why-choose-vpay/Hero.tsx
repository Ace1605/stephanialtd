'use client';

import { HeroCtaPair } from '@/components/commons/hero/HeroCtaPair';
import coat_lady from '/public/assets/why_vpay/about-hero-img.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section
      id={'about_hero'}
      className={'pt-16 overflow-hidden 640:pt-20 768:pt-32 pb-6 768:pb-8'}
    >
      <div className={'app-container 640:mb-32'}>
        <div className='960:flex gap-10 1280:gap-20'>
          <div className={'mx-auto'}>
            <div className=''>
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                }}
                className={
                  'max-w-[760px] text-black text-center mx-auto font-bold text-black text-[50px] 640:text-[54px] 1180:text-[82px] leading-[49px] 640:leading-[66px] 1180:leading-[80px] tracking-[-2.5px] 1180:tracking-[-5.28px]'
                }
              >
                Helping every size of business{' '}
                <span className='text-gradient'>succeed</span>.
              </motion.h4>
            </div>
            <HeroCtaPair withArrow target='_parent' />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className='px-4 768:px-8 mt-10 768:mt-16 1180:mt-32'
      >
        <Image
          src={coat_lady}
          alt='about_hero'
          priority
          className='object-cover object-center 768:object-contain min-h-[280px] 768:h-none rounded-3xl'
        />
      </motion.div>
    </section>
  );
};
