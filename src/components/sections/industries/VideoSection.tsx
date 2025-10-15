'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  videoSrc: string;
  id: string;
  lastWord: string;
  hClassName?: string;
}

export const VideoSection = ({
  title,
  videoSrc,
  lastWord,
  id,
  hClassName,
}: Props) => {
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
          <video
            className='object-cover w-full min-h-[280px] 768:min-h-[400px] rounded-2xl'
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
      </div>
    </section>
  );
};