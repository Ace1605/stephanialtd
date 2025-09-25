'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface Props {
  title: string;
  firstImage: StaticImageData;
  secondImage: StaticImageData;
  id: string;
  subtitle: string;
  description: string;
}

export const IndustriesHero = ({
  title,
  firstImage,
  secondImage,
  id,
  subtitle,
  description,
}: Props) => {
  return (
    <section id={id} className='pt-16 pb-12 768:pb-32 768:pt-24'>
      <div className={'relative app-container'}>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className={
            'text-left text-black font-bold text-[37px] 640:text-[52px] 1180:text-[70px] leading-[41px] 640:leading-[60px] 1180:leading-[80px] w-full 768:w-1/2'
          }
        >
          <span className={'text-gradient'}>{title}</span>
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className='subtitle text-neutral-1000 mx-auto 768:mx-0 max-w-[470px] text-left mt-2.5'
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className='grid 768:grid-cols-3 gap-8 mt-7 768:mt-12'
        >
          <div className='col-span-2'>
            <Image
              className='object-cover object-top rounded-2xl min-h-[300px] 768:min-h-[395px] 768:max-h-[395px]'
              src={firstImage}
              priority
              alt='market_image'
            />
          </div>
          <div className='hidden 768:block 768:col-span-1'>
            <Image
              className='object-cover object-top rounded-2xl min-h-[395px] 768:max-h-[395px]'
              src={secondImage}
              priority
              alt='hero_image'
            />
          </div>
        </motion.div>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className='subtitle text-neutral-1000 text-left mt-5'
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};
