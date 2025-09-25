'use client';

import { PlayVideo } from '@/components/svgs/industries/IndustriesIcons';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface Props {
  title: string;
  image: StaticImageData;
  id: string;
  lastWord: string;
  embedded?: boolean;
  embedId?: string;
  hClassName?: string;
}

export const VideoSection = ({
  title,
  image,
  lastWord,
  id,
  embedded,
  embedId,
  hClassName,
}: Props) => {
  const [play, setPlay] = useState<boolean>(false);
  return (
    <section id={id} className='block pt-20 pb-12 768:pb-24 768:pt-24'>
      <div className={'relative app-container'}>
        <div className='block'>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className={clsx(
              'text-left text-black font-bold text-[35px] 640:text-[52px] 1180:text-[70px] leading-[41px] 640:leading-[60px] 1180:leading-[80px] w-full 768:w-3/5',
              hClassName,
            )}
          >
            {title}
            <span>
              <span className={'text-gradient'}>{lastWord}</span>
            </span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className='relative mt-10 768:mt-12'
        >
          {!play && (
            <Image
              className='object-cover 768:object-contain min-h-[280px] 768:h-none rounded-2xl'
              src={image}
              priority
              alt='market_image'
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
                  className='min-h-[280px] 768:h-none rounded-2xl 640:h-[504px] w-full'
                  src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
                  title='vpay-testimonial'
                  allowFullScreen
                  allow='accelerometer; autoplay; encrypted-media;'
                />
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};
