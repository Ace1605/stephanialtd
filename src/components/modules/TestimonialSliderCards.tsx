import Image from 'next/image';
import testimonialImage from '/public/assets/home/testimonialImg.png';
import secondImage from '/public/assets/home/secondtestimonial.png';
import extraImage from '/public/assets/home/dark-man.png';
import lastImage from '/public/assets/home/two-people.png';
import clsx from 'clsx';
import { PlayVideo } from '../svgs/industries/IndustriesIcons';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const TestimonialSliderCards = () => {
  const [playStates, setPlayStates] = useState<boolean[]>(
    Array(reviews.length).fill(false),
  );

  const handlePlayClick = (index: number) => {
    const newPlayStates = [...playStates];
    newPlayStates[index] = true;
    setPlayStates(newPlayStates);
  };
  return (
    <div className='relative'>
      <div className='flex items-center gap-8'>
        {reviews.map((review, index) => {
          return (
            <div
              key={index}
              className='relative h-[310px] 640:h-[504px] min-w-[350px] 640:min-w-[750px]'
            >
              {!playStates[index] && (
                <Image
                  className={clsx(
                    'object-cover min-h-[310px] rounded-[30px] 640:h-[504px]',
                  )}
                  src={review.src ?? testimonialImage}
                  priority
                  alt='testimonial_image'
                  style={{
                    transition: 'opacity 0.6s ease-in-out',
                    opacity: playStates[index] ? 0 : 1,
                  }}
                />
              )}
              <span
                onClick={() => handlePlayClick(index)}
                className={clsx(
                  playStates[index] && 'hidden',
                  'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer',
                )}
              >
                <PlayVideo className='w-[4rem] 768:w-none' />
              </span>
              {playStates[index] && (
                <iframe
                  className='min-h-[310px] rounded-[30px] 640:h-[504px] min-w-[350px] 640:min-w-[750px]'
                  src={`https://www.youtube.com/embed/${review?.embedId}?autoplay=1`}
                  title='vpay-testimonial'
                  allowFullScreen
                  allow='accelerometer; autoplay; encrypted-media;'
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const reviews = [
  {
    src: testimonialImage,
    embedId: 'VrkjZ65Ed-U',
  },
  {
    src: secondImage,
    embedId: 'ArPpwq8189M',
  },
  {
    src: extraImage,
    embedId: 'hf2bXhBXX2Y',
  },
  {
    src: lastImage,
    embedId: 'QMGXKoCv5Ow',
  },
];
