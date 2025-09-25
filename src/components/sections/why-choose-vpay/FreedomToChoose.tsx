'use client';

import { motion } from 'framer-motion';

export const FreedomToChoose = () => {
  return (
    <section
      id={'pricing_hero'}
      className={'py-16 overflow-hidden 640:py-20 768:py-32'}
    >
      <div className='app-container flex flex-col gap-4 768:px-36'>
        <motion.h4
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className={
            'text-black text-[38px] 640:text-[52px] 1180:text-[70px] leading-[46px] 640:leading-[60px] 1180:leading-[80px] text-left'
          }
        >
          Have the <span className='text-gradient'>freedom</span> to choose.
        </motion.h4>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className={
            'mt-3 text-neutral-600 text-base 768:leading-[28px] 768:text-lg font-normal'
          }
        >
          Today, VPay Africa stands as a trusted partner to a diverse range of
          businesses, catering to the needs of both large enterprises with
          complex commerce operations and budding entrepreneurs embarking on
          their business journey. We have been there from the beginning,
          supporting those who started with us and have grown alongside us. As
          our merchants expand their horizons, so do our innovative solutions.
          Together, we grow, adapt, and thrive
        </motion.p>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className={
            'mt-3 text-neutral-600 text-base 768:leading-[28px] 768:text-lg font-normal'
          }
        >
          The opportunity before us is immense, and we are steadfast in our
          mission to build a business that is not only substantial but also
          meaningful and enduring. Just as we have empowered sellers locally, we
          are committed to assisting businesses worldwide in achieving their
          aspirations. With VPay Africa, the future of commerce is limitless.
        </motion.p>
      </div>
    </section>
  );
};
