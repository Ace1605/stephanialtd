import Image from 'next/image';

import clsx from 'clsx';
import { sponsors } from './constants';

interface Props {
  hide?: boolean;
}

export const Sponsors = ({ hide }: Props) => {
  return (
    <div
      className={clsx(
        hide && '!hidden 768:flex',
        'flex items-center justify-between gap-3 768:gap-6',
      )}
    >
      {sponsors.map((sponsor, index) => {
        return (
          <div key={index}>
            <Image
              className='object-fit 768:object-contain'
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
