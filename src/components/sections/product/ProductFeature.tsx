'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { PlayVideo } from '@/components/svgs/industries/IndustriesIcons';

interface Props {
  featureTitle?: ReactNode;
  lastWord?: string;
  continuation?: string;
  subtitle: string;
  image: StaticImageData;
  firstBoxTitle: string;
  firstBoxText: string;
  secondBoxTitle: string;
  secondBoxText: string;
  ThirdBoxTitle: string;
  thirdBoxText: string;
  link?: string;
  linkText?: string;
  hClassName?: string;
  pClassName?: string;
  embedded?: boolean;
  embedId?: string;
}

export const ProductFeature = ({
  featureTitle,
  lastWord,
  continuation,
  subtitle,
  image,
  firstBoxTitle,
  firstBoxText,
  secondBoxTitle,
  secondBoxText,
  ThirdBoxTitle,
  thirdBoxText,
  linkText,
  link,
  hClassName,
  embedded,
  embedId,
  pClassName,
}: Props) => {
  const [play, setPlay] = useState<boolean>(false);
  return (
    <section
      id={'product_feature'}
      className={
        'app-container pt-10 overflow-hidden 640:pt-20 768:pt-32 pb-6 768:pb-8'
      }
    >
      <h3
        className={clsx(
          'text-left text-black text-[38px] 640:text-48px] 1180:text-[60px] leading-[48px] 650:leading-[54px] 1180:leading-[64px] 1180:leading-[72px] tracking-[-1.6px] 768:tracking-[-1.8px] 768:w-4/5 font-bold',
          hClassName,
        )}
      >
        {featureTitle}
        <span>
          <span className={'text-gradient'}>{lastWord}</span>
        </span>
        {continuation}
      </h3>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className={clsx(
          'mt-2 mb-2 text-black text-base 768:leading-[28px] 768:text-[18px] font-normal text-left 768:w-3/5 pr-2',
          pClassName,
        )}
      >
        {subtitle}
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className='relative flex flex-col gap-4'
      >
        {!play && (
          <Image
            className='mt-7 768:mt-10 object-cover rounded-3xl object-center 768:object-contain min-h-[280px] 768:h-none'
            src={image}
            priority
            alt='vpay_product_feature_img'
          />
        )}
        {embedded && (
          <>
            <span
              onClick={() => setPlay(true)}
              className={clsx(
                play && 'hidden',
                'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer',
              )}
            >
              <PlayVideo className='w-[4rem] 768:w-none' />
            </span>
            {play && (
              <motion.iframe
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                }}
                className='min-h-[280px] 768:h-none rounded-[20px] 640:h-[504px] w-full'
                src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
                title='vpay-testimonial'
                allowFullScreen
                allow='accelerometer; autoplay; encrypted-media;'
              />
            )}
          </>
        )}
      </motion.div>
      <div className='grid 768:grid-cols-3 gap-7 768:gap-10 mt-8 768:mt-10 mb-16 768:mb-36'>
        <div className='bg-neutral-150 rounded-xl p-6 768:p-9'>
          <p className='text-black text-xl font-semibold'>{firstBoxTitle}</p>
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
        </div>
        <div className='bg-neutral-150 rounded-xl p-9'>
          <p className='text-black text-xl font-semibold'>{secondBoxTitle}</p>
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
            {secondBoxText}{' '}
            {link && (
              <Link className='text-primary-main' target='_blank' href={link}>
                {linkText}
              </Link>
            )}
          </motion.p>
        </div>
        <div className='bg-neutral-150 rounded-xl p-9'>
          <p className='text-black text-xl font-semibold'>{ThirdBoxTitle}</p>
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
        </div>
      </div>
    </section>
  );
};
