'use client';

import { motion } from 'framer-motion';
import marketImage from '/public/assets/home/bank-transfer-img.png';
import posImage from '/public/assets/home/bar-img.png';
import monitorImage from '/public/assets/home/cross_arm.png';
import Image from 'next/image';

export const WhyChooseStephania = () => {
  return (
    <section id='why_choose_stephania' className='pt-5 pb-12 640:pb-0 640:pt-24'>
      <div className={'relative app-container'}>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className={
            'text-left text-black font-bold text-[35px] 640:text-[52px] 1180:text-[70px] leading-[41px] 640:leading-[60px] 1180:leading-[80px] w-full 768:w-2/3'
          }
        >
          Why Choose Stephania
          <span className={'inline'}>
            <span className={'text-gradient'}> Solutions</span>?
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className='grid 768:grid-cols-3 gap-10 768:gap-7 mt-10 768:mt-12'
        >
          <div>
            <Image
              className='object-cover w-full rounded-2xl '
              src={marketImage}
              priority
              alt='market_image'
            />
            <p className='text-black font-medium mt-5 768:mt-7 text-base 768:text-[18px]'>
              Operate like the pro you are with integrated tools that help you
              get paid quickly and deliver better client experience.
            </p>
          </div>
          <div>
            <Image
              className='object-cover w-full rounded-2xl'
              src={posImage}
              priority
              alt='hero_image'
            />
            <p className='text-black font-medium mt-5 768:mt-7 text-base 768:text-[18px]'>
              All the tools you need for selling online and physically with our
              smart Point-Of-Sale software, manage your inventory and more.
            </p>
          </div>
          <div>
            <Image
              className='object-cover w-full rounded-2xl'
              src={monitorImage}
              priority
              alt='hero_image'
            />
            <p className='text-black font-medium mt-5 768:mt-7 text-base 768:text-[18px]'>
              Stay ahead of your competitors and build custom solutions using
              our API and drive your business growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
