'use client';

import { DeveloperApisGetInTouchForm } from '@/components/forms/DeveloperApiGetInTouchForm';
import { GetInTouchForm } from '@/components/forms/GetInTouchForm';
import { GetInTouchMeans } from './GetInTouchMeans';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Element } from 'react-scroll';

interface Props {
  isSales?: boolean;
}

// Get the card element

export const GetInTouch = ({ isSales }: Props) => {
  return (
    <Element name='contact_sales'>
      <section id={'get_in_touch'} className={'py-10 880:py-20 app-container'}>
        <div className='max-w-[700px] mx-auto'>
          <motion.h5
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className={
              'text-left 768:text-center 768:text-[70px] text-[44px] leading-[48px] 768:leading-[80px] text-gradient'
            }
          >
            Start Your Project
          </motion.h5>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className={'mt-3 text-left 768:text-center subtitle'}
          >
            {`Ready to bring your engineering vision to life? Contact our expert team to discuss your project requirements. We'll provide a comprehensive consultation and tailored solutions for your specific needs.`}
          </motion.p>
        </div>
        {isSales && <GetInTouchMeans />}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className='gap-10 mt-8 768:mt-16 mx-auto grid-cols-12'
        >
          {isSales ? <GetInTouchForm /> : <DeveloperApisGetInTouchForm />}
        </motion.div>
      </section>
    </Element>
  );
};
