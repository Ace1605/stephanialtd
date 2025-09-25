import { hyphenateString } from '@/helpers/converters/hyphenateString';
import illustration from '/public/assets/megamenu/phone.png';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPostDocument } from '@/types/prismic';
import { usePathname } from 'next/navigation';
import { Apple, GooglePlay } from '@/components/svgs/Socials';
import { Line } from '@/components/svgs/app/Line';

export const BusinessesGroup = ({
  posts,
  close,
}: {
  close: () => void;
  posts: BlogPostDocument<string>[];
}) => {
  const pathname = usePathname();

  return (
    <div className={'flex items-center justify-between gap-20'}>
      <div className={'flex gap-20 -mt-24'}>
        <div>
          <h6 className={'text-base text-neutral-500 font-semibold'}>
            Industries
          </h6>

          <div className='w-full mt-5 gap-x-5'>
            {businessesLinks?.links?.businesses?.map((link) => {
              const href = `/businesses/${hyphenateString(link)}`;

              return (
                <Link
                  href={href}
                  onClick={close}
                  className={'flex py-2 col-span-1 group'}
                  key={link}
                >
                  <div
                    className={clsx(
                      'text-black font-semibold group-hover:text-primary-main text-base',
                      pathname === href && 'text-primary-main',
                    )}
                  >
                    {link}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <div className='w-full mt-11 gap-x-5'>
            {businessesLinks?.links?.['company size']?.map((link) => {
              const href = `/businesses/${hyphenateString(link)}`;

              return (
                <Link
                  href={href}
                  onClick={close}
                  className={'flex py-2 col-span-1 group'}
                  key={link}
                >
                  <div
                    className={clsx(
                      'text-black font-semibold group-hover:text-primary-main text-base',
                      pathname === href && 'text-primary-main',
                    )}
                  >
                    {link}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className='w-1/2 mt-4'>
        <h6 className={'text-base text-neutral-500 font-semibold'}>
          Resources
        </h6>

        <div className='relative mt-7 flex justify-between bg-neutral-150 rounded-2xl py-10 px-12'>
          <div>
            <h6 className='w-3/4 text-xl tracking-normal font-semibold text-black pr-2'>
              Join over 90,000+ businesses using VPay to{' '}
              <span className='text-gradient'>simplify payments</span>
            </h6>
            <Link
              href='https://merchantapp.vpay.africa'
              target='_blank'
              className='flex w-max px-4 mt-4 py-2 gap-4 bg-white rounded-lg border border-neutral-100'
            >
              <Apple />
              <Line />
              <GooglePlay />
              <p className='font-semibold text-black'>Download App</p>
            </Link>
          </div>
          <div className='relative w-1/2'>
            <Image
              className='absolute -top-7 w-[138px]'
              src={illustration}
              priority
              alt='vpay_research'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const businessesLinks = {
  links: {
    businesses: ['Retail Stores', 'Transportation', 'Education'],
    'company size': ['Hospitality', 'Online Store', 'Fashion'],
  },
};
