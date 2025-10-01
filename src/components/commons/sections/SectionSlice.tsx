'use client';

import { AppCtaButton } from '@/components/buttons/AppCtaButton';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { PropsWithChildren, ReactNode } from 'react';
import { AppleGoogleBtn } from '../AppleGoogleBtn';

interface Props {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  id?: string;
  image?: StaticImageData;
  floatingImage?: StaticImageData;
  floatingImageClassName?: string;
  imageComponent?: ReactNode;
  imagePosition?: 'right' | 'left';
  className?: string;
  label?: string;
  hClassName?: string;
  textBlockClassname?: string;
  actionLink?: string;
  withArrow?: boolean;
  outline?: boolean;
  hasDownload?: boolean;
  target?: string;
}

export const SectionSlice = ({
  title,
  description,
  action,
  children,
  className = '',
  id,
  imagePosition = 'right',
  image,
  textBlockClassname = '',
  imageComponent,
  actionLink,
  hClassName,
  withArrow,
  outline,
  hasDownload,
  target,
}: PropsWithChildren<Props>) => {
  return (
    <section id={id} className={'relative app-container z-5 mb-14 640:mb-28'}>
      <div className={clsx('gap-6 768:gap-20 grid 960:grid-cols-2', className)}>
        <div
          className={clsx(
            'max-[545px] 960:w-[545px] h-full my-auto relative flex-shrink-0 flex-col align-middle justify-center',
            imagePosition === 'right' ? 'hidden' : '960:flex hidden',
          )}
        >
          {image ? (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
              }}
              className=''
            >
              <Image
                src={image}
                priority
                alt='illustration'
                className='object-cover'
              />
            </motion.div>
          ) : (
            imageComponent
          )}
        </div>

        <div
          className={clsx(
            'y-center gap-4 960:gap-3',
            imagePosition === 'right' ? '960:mr-10 1180:mr-20' : '',
            textBlockClassname,
          )}
        >
          <motion.h5
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className={clsx(
              'text-left text-[38px] 640:text-[46px] 1300:text-[60px] leading-[42px] 640:leading-[60px] 1180:leading-[65px] tracking-[-2.4px] text-black font-bold 768:w-4/5',
              hClassName,
            )}
          >
            {title}
          </motion.h5>

          {description && (
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className={'640:mt-3 text-left subtitle text-black'}
            >
              {description}
            </motion.p>
          )}

          {children}

          {action && actionLink && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              className={'flex gap-4 items-center mt-2 768:mt-4'}
            >
              {outline ? (
                <AppCtaButton
                  href={actionLink!}
                  className={
                    'outline-button text-primary-main gap-2 h-12 768:h-14 group x-center'
                  }
                  withArrow={withArrow}
                  target={target ?? '_parent'}
                >
                  <span className='h-full y-center'>{action}</span>
                </AppCtaButton>
              ) : (
                <AppCtaButton
                  href={actionLink!}
                  className={
                    'primary-button gap-2 h-12 768:h-14 group x-center'
                  }
                  withArrow={withArrow}
                  target={target ?? '_parent'}
                >
                  <span className='h-full y-center'>{action}</span>
                </AppCtaButton>
              )}
              {hasDownload && (
                <AppleGoogleBtn href='https://cashierapp.stephania.africa' />
              )}
            </motion.div>
          )}
        </div>

        <div
          className={clsx(
            '960:my-auto mt-3 768:mt-10 w-full',
            imagePosition === 'right' ? '' : '960:hidden',
          )}
        >
          <div className='relative'>
            {image ? (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                }}
                className='h-full '
              >
                <Image
                  src={image}
                  priority
                  alt='illustration'
                  className='object-cover'
                />
              </motion.div>
            ) : (
              imageComponent
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
