import clsx from 'clsx';

interface Props {
  withoutParent?: boolean;
}

export const VPayNumbers = ({ withoutParent }: Props) => {
  return (
    <div className='bg-black'>
      <div
        className={clsx(
          withoutParent && 'app-container',
          'grid 960:grid-cols-2 items-start gap-12 960:gap-20 py-14 960:pt-14 960:pb-48',
        )}
      >
        <div>
          <div>
            <h4 className='main-gradient text-left text-white text-[38px] 640:text-[52px] 1180:text-[70px] leading-[46px] 640:leading-[60px] 1180:leading-[80px] w-full pr-8'>
              VPay by the numbers
            </h4>
            <p className='mt-4 960:mt-6 text-white'>
              Why VPay is perfect for you. Find financial tools that connect
              every side of your business
            </p>
          </div>
        </div>
        <div className='1180:ml-16'>
          <div className='pb-6 960:pb-10 border-b border-neutral-900'>
            <h4 className='text-white text-left text-white text-[38px] 640:text-[52px] 1180:text-[70px] leading-[46px] 640:leading-[60px] 1180:leading-[80px] w-full pr-8'>
              90,000+
            </h4>
            <p className='mt-6 text-white'>Trusted businesses across Africa</p>
          </div>
          <div className='pt-6 960:pt-10'>
            <h4 className='text-white text-left text-white text-[38px] 640:text-[52px] 1180:text-[70px] leading-[46px] 640:leading-[60px] 1180:leading-[80px] w-full pr-8'>
              ₦100b+
            </h4>
            <p className='mt-6 text-white'>
              Individual sales transactions processed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
