'use client';

import { motion } from 'framer-motion';
import { PricingModuleDocument } from '@/types/prismic';
import { PrismicRichText } from '@prismicio/react';

interface Props {
  pricing: PricingModuleDocument<string>[];
}

export const PricingModule = ({ pricing }: Props) => {
  pricing.sort((dateA, dateB) => {
    return dateA.first_publication_date.localeCompare(
      dateB.first_publication_date,
    );
  });

  return (
    <section id={'pricing_module'} className={'overflow-hidden px-4 768:px-8'}>
      <div className='bg-neutral-150 rounded-3xl px-2 768:px-0 py-12 768:py-28'>
        <div className='app-container'>
          <motion.h4
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className={
              'text-left text-black text-[32px] 640:text-[48px] 1180:text-[60px] leading-[46px] 640:leading-[60px] font-bold 1180:leading-[80px]'
            }
          >
            Processing <span className='text-gradient'>fees</span>
          </motion.h4>
          <div className='grid 768:grid-cols-3 gap-12 768:gap-16 mt-8 768:mt-16'>
            {pricing?.map(({ data: { title, pricing }, uid }) => {
              return (
                <div key={uid}>
                  <motion.h6
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                    }}
                    className='pricing_head'
                  >
                    <PrismicRichText field={title} />
                  </motion.h6>
                  {pricing.map(({ subtitle, text }, index) => {
                    return (
                      <div key={index}>
                        <motion.p
                          initial={{ y: 10, opacity: 0 }}
                          viewport={{ once: true }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.2,
                          }}
                          className={
                            'mt-3 text-neutral-600 text-base 768:leading-[28px] 768:text-[20px] max-w-[500px] font-normal text-left 768:w-4/5 pr-1'
                          }
                        >
                          <span className='font-medium text-black'>
                            {subtitle}
                          </span>{' '}
                          {text}
                        </motion.p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
