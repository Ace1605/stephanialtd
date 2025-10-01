import Image from 'next/image';
import appStore from '/public/assets/home/appstore.svg';
import { GooglePlay } from '@/components/svgs/Socials';
import Link from 'next/link';

export const ImageDownloadTrigger = () => {
  return (
    <Link
      href='https://merchantapp.stephania.africa'
      target='_blank'
      className='absolute bottom-0 right-2.5 425:bottom-2 425:right-3 560:right-5 560:bottom-4 640:right-6 640:bottom-6 768:bottom-1 1400:bottom-4 1400:right-4 1400:px-8 768:right-1 px-2 425:px-3 560:px-5 640:px-8 768:px-3'
    >
      <h3 className='text-black font-medium text-[8px] 425:text-xs 768:text-[10px] leading-[20px] 768:leading-[14px] 960:text-xs 960:leading-[20px] text-center '>
        AVAILABLE ON
      </h3>
      <div className='mt-0 425:mt-1 1400:mt-2 flex gap-2 items-center justify-center'>
        <GooglePlay />
        <Image src={appStore} className='w-[20px]' alt='app_store' />
      </div>
    </Link>
  );
};
