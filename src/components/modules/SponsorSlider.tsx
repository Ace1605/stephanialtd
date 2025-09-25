import Image from 'next/image';
import clsx from 'clsx';
import { sponsors } from '../sections/product/constants';
import { useEffect, useRef, useState } from 'react';
import { mobileWidth } from '../sections/home/TestimonialSlide';

interface Props {
  hide?: boolean;
}

export const SponsorSlider = ({ hide }: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const sponsorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileWidth);
    };

    handleResize(); // Check initial window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      const carouselInner = sponsorRef.current;

      // Duplicate items for infinite looping
      if (carouselInner) {
        carouselInner.innerHTML += carouselInner.innerHTML;
      }
    }
  }, []);

  return (
    <div
      ref={sponsorRef}
      className={clsx(
        hide && '!hidden 768:flex',
        'flex items-center justify-between gap-12 768:gap-8 overflow-hidden',
      )}
      style={{ animation: isMobile ? 'slide 80s linear infinite' : 'none' }}
    >
      {sponsors.map((sponsor, index) => {
        return (
          <div
            key={index}
            className='min-w-[90px] max-h-[60px] 768:max-h-[40px] 768:min-w-[100px] flex justify-end'
          >
            <Image
              className='object-contain'
              src={sponsor.src}
              priority
              alt='testimonial_image'
            />
          </div>
        );
      })}
    </div>
  );
};
