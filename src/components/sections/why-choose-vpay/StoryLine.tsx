'use client';

import Image from 'next/image';
import storylineLady from '/public/assets/why_vpay/storyline-lady.png';
import storylineMonitor from '/public/assets/why_vpay/storyline-monitor.png';
import { motion } from 'framer-motion';

export const StoryLine = () => {
  return (
    <section
      id={'pricing_hero'}
      className={'pt-10 overflow-hidden 640:pt-20 768:pt-32 pb-6 768:pb-8'}
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
            'text-black text-[30px] tracking-[-1.05px] 640:tracking-[-1.8px] 640:text-[48px] 1180:text-[59px] leading-[39px] 640:leading-[46px] 768:leading-[58px] font-bold 1180:leading-[75px] text-left'
          }
        >
          Pioneering the
          <span className='text-gradient'> Future </span>of Merchant Finance and
          Technology Solutions
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
          Since our inception, VPay Africa has witnessed a remarkable
          transformation in the world of commerce, and our journey mirrors this
          evolution. We understand that the conventional norms in finance and
          technology needed a fresh perspective. We recognized the challenges
          faced by merchants dealing with disjointed and outdated financial
          tools and solutions. This recognition led us to expand into the realm
          of software development, to solve merchant payment pain points.
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
          Our goal is clear: to empower sellers in Nigeria and beyond to thrive
          in the digital age. Our suite of solutions enables businesses to
          flourish online, efficiently manage inventory, business operations,
          engage with loyal customers, and seamlessly handle business finances.
          Moreover, we have seamlessly integrated financial services into our
          platform, ensuring that merchants can access business loans and manage
          their cash flow with ease, all in one place.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className='mt-10 768:mt-16 1180:mt-24 grid 768:grid-cols-2 gap-10 768:gap-8'
        >
          <Image
            className='object-contain rounded-[40px]'
            src={storylineMonitor}
            priority
            alt='vpay_pricing_hero_img'
          />
          <Image
            className='object-contain rounded-[40px]'
            src={storylineLady}
            priority
            alt='vpay_pricing_hero_img'
          />
        </motion.div>
      </div>
    </section>
  );
};
