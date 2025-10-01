'use client';

import Image from 'next/image';
import illustration from '/public/assets/pricing/pricing-hero-img.png';
import { motion } from 'framer-motion';

export const PricingHeroSection = () => {
  return (
    <section
      id={'pricing_hero'}
      className={'pt-16 overflow-hidden 640:pt-20 768:pt-32 pb-6 768:pb-8'}
    >
      <div className='app-container flex flex-col gap-4'>
        <motion.h4
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className={
            'max-w-[660px] text-black text-center mx-auto font-bold text-black text-[50px] 640:text-[54px] 1180:text-[82px] leading-[49px] 640:leading-[66px] 1180:leading-[80px] tracking-[-2.1px] 1180:tracking-[-4.4px]'
          }
        >
          Priced to help you grow and{' '}
          <span className='text-gradient'>thrive</span>.
        </motion.h4>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className={
            'mt-3 text-neutral-600 text-base 768:leading-[28px] 768:text-lg max-w-[500px] font-normal mx-auto text-center'
          }
        >
          No surprises, just fair and honest pricing. Compare plans with ease,
          and choose the one that works for you.
        </motion.p>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className='px-4 768:px-8 mt-10 768:mt-16 1180:mt-32'
      >
        <Image
          className='object-cover object-center 768:object-contain min-h-[280px] 768:h-none rounded-3xl'
          src={illustration}
          priority
          alt='stephania_pricing_hero_img'
        />
      </motion.div>
    </section>
  );
};
