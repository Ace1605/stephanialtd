'use client';

import Image from 'next/image';
import lady from '/public/assets/products/amazing-lady.png';
import { motion } from 'framer-motion';
import { Sponsors } from '../Sponsors';

interface Props {
  hide?: boolean;
}

export const PowersGrowth = ({ hide }: Props) => {
  return (
    <section
      id={'developer_feature'}
      className={'pt-10 overflow-hidden 640:pt-20 768:pt-32 pb-6 768:pb-8'}
    >
      <h3 className='text-left text-black text-[32px] 640:text-[48px] 1180:text-[60px] leading-[37px] 640:leading-[66px] 1180:leading-[72px] tracking-[-0.6px] 640:tracking-[-1.8px] font-bold mb-4 768:w-2/3'>
        Stephania
        <span>
          <span className={'text-gradient'}> Powers</span>{' '}
          <span className='block 768:inline'>
            Growth For Amazing Businesses
          </span>
        </span>
      </h3>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className={
          'text-black mb-3 text-base leading-[24px] 768:leading-[30px] 768:text-[18px] tracking-[-0.32px] 640:tracking-[-0.4px] font-normal text-left pr-2'
        }
      >
        Stephania is a growth engine for a new generation of innovative,
        forward-looking organizations operating in Africa.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className='flex flex-col gap-4'
      >
        <Image
          className='object-cover rounded-3xl object-center 768:object-contain min-h-[280px] 768:h-none'
          src={lady}
          priority
          alt='stephania_product_feature_img'
        />
      </motion.div>
      {!hide && (
        <div className='grid 768:grid-cols-3 gap-7 768:gap-10 mt-8 768:mt-10 mb-8 768:mb-10'>
          <div className='bg-neutral-150 rounded-xl p-7 768:p-9 min-h-[290px]'>
            <p className='text-black text-xl font-semibold'>
              Take fast payments anywhere
            </p>
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
              Accept every major payment type, including Afterpay, in store, and
              online. Plus take payments with{' '}
              <span className='text-gradient'>Tap to Pay</span> on iPhone. All
              of your sales are automatically tracked in one place.
            </motion.p>
          </div>
          <div className='bg-neutral-150 rounded-xl p-7 768:p-9 min-h-[290px]'>
            <p className='text-black text-xl font-semibold'>
              Multiple payment channels
            </p>
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
              Most POS devices accept only card payments. Stephania Terminal provides
              several channels through which customers can pay.
            </motion.p>
          </div>
          <div className='bg-neutral-150 rounded-xl p-7 768:p-9 min-h-[290px]'>
            <p className='text-black text-xl font-semibold'>Manage your team</p>
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
              Create schedules, set permissions, and track time on a POS
              that&apos;s easy for employees to use.
            </motion.p>
          </div>
        </div>
      )}
      <Sponsors hide />
    </section>
  );
};
