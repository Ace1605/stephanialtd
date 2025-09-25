'use client';

import clsx from 'clsx';
import { SponsorSlider } from '@/components/modules/SponsorSlider';

export const ProductBrand = () => {
  return (
    <div
      className={
        'app-container relative pt-4 1024:pt-1 1180:pt-6 640:pb-16 pb-8'
      }
    >
      <div className='hidden-scrollbar mt-6 768:mt-10 px-8 768:px-0 768:app-container overflow-x-auto 768:overflow-x-hidden'>
        <div className={clsx('min-w-fit')}>
          <SponsorSlider />
        </div>
      </div>
    </div>
  );
};
