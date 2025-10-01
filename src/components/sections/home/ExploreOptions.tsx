'use client';

import { motion } from 'framer-motion';
import hardWare from '/public/assets/home/powering-img.png';
import integrations from '/public/assets/home/all-in-one.png';
import Image from 'next/image';
import { AppCtaButton } from '@/components/buttons/AppCtaButton';
import clsx from 'clsx';
import { StephaniaNumbers } from '@/components/modules/StephaniaNumbers';

export const ExploreOptions = () => {
  const options = [
    {
      title: (
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className={
            'text-left text-white text-[38px] 640:text-[52px] 1300:text-[70px] leading-[46px] 640:leading-[60px] 1180:leading-[80px] w-full 768:w-3/4'
          }
        >
          Powering all the ways you do
          <span className={'640:inline block'}>
            <span className={'text-gradient'}> business</span>.
          </span>
        </motion.h1>
      ),
      subtitle:
        'Work smarter, automate for efficiency, and open up new revenue streams on the software and hardware platform millions of businesses trust.',
      buttonText: 'Explore hardware options',
      src: hardWare,
      link: '/products/p.o.s-terminal',
    },
    {
      title: (
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className={
            'text-left text-white text-[38px] 640:text-[52px] 1300:text-[70px] leading-[46px] 640:leading-[60px] 1180:leading-[80px] w-full 768:w-4/5'
          }
        >
          <span className={'640:inline block'}>
            <span className={'text-gradient'}>All-in-one </span>
          </span>
          platform for your business
        </motion.h1>
      ),
      subtitle:
        'Built for ambitious businesses and creatives. Stephania powers your entire business, streamline operations, and supports diversity in revenue streams.',
      buttonText: 'Create Free Account',
      src: integrations,
      link: 'https://www.stephania.africa/signup',
    },
  ];
  return (
    <section
      className={
        'pt-8 relative z-5 640:pt-12 pb-3 bg-black border-t border-neutral-900'
      }
    >
      <div className='app-container items-center justify-between'>
        {options.map((option, index) => (
          <div
            key={index}
            className='grid 960:grid-cols-2 items-center gap-8 960:gap-24 my-[70px] 960:my-32'
          >
            <div
              className={clsx(
                index === 1 && '960:!order-2 flex 960:justify-end',
                'flex justify-center order-2 960:order-none 960:justify-start',
              )}
            >
              <Image
                className={clsx(
                  'object-contain rounded-2xl bg-neutral-1000 480:max-w-[400px] 1180:max-w-[540px]',
                )}
                src={option.src}
                priority
                alt='market_image'
              />
            </div>
            <div>
              <>{option.title}</>
              <p className='mt-4 960:mt-6 text-white'>{option.subtitle}</p>
              <AppCtaButton
                href={option.link}
                className={
                  'text-link mt-4 960:mt-12 text-primary-main flex gap-2 hover:text-primary-dark gap-2 group text-[14px] 960:text-base'
                }
                withArrow
                target={option.link.includes('http') ? '_blank' : '_parent'}
              >
                <span className=''>{option.buttonText}</span>
              </AppCtaButton>
            </div>
          </div>
        ))}
        <StephaniaNumbers />
      </div>
    </section>
  );
};
