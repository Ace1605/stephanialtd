'use client';

import Image from 'next/image';
import dev from '/public/assets/products/developer.png';
import { motion } from 'framer-motion';
import { Sponsors } from '../Sponsors';

interface Props {
  hide?: boolean;
}

export const TrustedDevelopers = ({ hide }: Props) => {
  return (
    <section
      id={'developer_feature'}
      className={'pt-10 overflow-hidden 640:pt-20 768:pt-32 pb-6 768:pb-8'}
    >
      <h3 className='text-left text-black text-[32px] 640:text-[48px] 1180:text-[60px] leading-[37px] 640:leading-[66px] 1180:leading-[72px] tracking-[-0.6px] 640:tracking-[-1.8px] font-bold 768:w-2/3'>
        Built For
        <span>
          <span className={'text-gradient'}> Developers</span>,{' '}
          <span className='block'> Trusted By Businesses</span>
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
          'text-black mt-4 mb-6 text-base leading-[24px] 768:leading-[30px] 768:text-[18px] tracking-[-0.32px] 640:tracking-[-0.4px] font-normal text-left 768:max-w-[750px]'
        }
      >
        VPay Developer API was made for creators like you. We build our APIs to
        be simple to use, powerful in production, and endlessly scalable. Little
        wonder we are trusted by many
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
          src={dev}
          priority
          alt='vpay_product_feature_img'
        />
      </motion.div>
      {!hide && (
        <div className='grid 768:grid-cols-3 gap-7 768:gap-10 mt-8 768:mt-10 mb-8 768:mb-10'>
          <div className='bg-neutral-150 rounded-xl p-7 768:p-9 min-h-[290px]'>
            <p className='text-black text-xl font-semibold'>
              Easy Reconciliation
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
              With our innovative payment methods, VPay makes it simple for you
              to balance your books because we handle all the difficult tasks in
              real time, letting you know who paid for what and when it was paid
            </motion.p>
          </div>
          <div className='bg-neutral-150 rounded-xl p-7 768:p-9 min-h-[290px]'>
            <p className='text-black text-xl font-semibold'>
              Account Number Options
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
              VPay provides a variety of options for consumers to pay you via
              bank transfers. You can have a distinct or dynamic account number
              mapped to each of your clients, or for every transaction.
            </motion.p>
          </div>
          <div className='bg-neutral-150 rounded-xl p-7 768:p-9 min-h-[290px]'>
            <p className='text-black text-xl font-semibold'>
              Fully Featured Sandbox
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
              With a fully functional testing environment, VPay provides a
              hassle-free onboarding experience.
            </motion.p>
          </div>
        </div>
      )}
    </section>
  );
};
