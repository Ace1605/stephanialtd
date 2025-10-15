import { hyphenateString } from '@/helpers/converters/hyphenateString';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import illustration from '/public/assets/products/thirdBannerImage.jpg';
import { AppleGoogleBtn } from '@/components/commons/AppleGoogleBtn';
import { Apple, GooglePlay } from '@/components/svgs/Socials';
import { Line } from '@/components/svgs/app/Line';

export const ProductGroup = ({ close }: { close: () => void }) => {
  const pathname = usePathname();

  return (
    <div className={'flex items-center justify-between gap-20 -mt-6'}>
      <div className={'flex gap-20'}>
        <div>
          <h6 className={'text-base text-neutral-500 font-semibold'}>
            Products
          </h6>
          <div className='w-full mt-5 gap-x-5'>
            {productGroupLinks?.links?.products?.map((link) => {
              const href = `/products/${hyphenateString(link)}`;

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
            {productGroupLinks?.links?.['company size']?.map((link, index) => {
              const href = `/products/${hyphenateString(link)}`;

              return (
                <Link
                  href={index < 1 ? href : '#'}
                  onClick={close}
                  className={clsx(
                    index > 0 && 'cursor-not-allowed',
                    'flex py-2 col-span-1 gap-2 group',
                  )}
                  key={link}
                >
                  <div
                    className={clsx(
                      index < 1 && 'group-hover:text-primary-main',
                      'text-black font-semibold text-base',
                      pathname === href && index < 1 && 'text-primary-main',
                    )}
                  >
                    {link}
                  </div>
                  <p
                    className={clsx(
                      index > 0
                        ? 'rounded-full bg-neutral-150 text-neutral-900 font-semibold  text-xs py-1 px-2 shadow-md border-2 border-neutral-300'
                        : 'hidden',
                    )}
                  >
                    Coming soon
                  </p>
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
              Join over 90,000+ businesses using Stephania to{' '}
              <span className='text-gradient'>simplify payments</span>
            </h6>
            <Link
              href='https://merchantapp.stephania.africa'
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
              alt='resource_image'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const productGroupLinks = {
  links: {
    products: [
      'P.O.S Terminal',
      'Storefronts',
      'Cashier',
      'Payment Checkout',
      'Tap and Pay',
    ],
    'company size': ['Developer APIs', 'Invoice', 'Savings', 'Loan'],
  },
};
