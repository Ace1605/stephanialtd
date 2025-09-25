import { FaqList } from '@/components/modules/FaqList';
import { FaqDocument } from '@/types/prismic';
import clsx from 'clsx';

export const FaqsAsFooter = ({
  faqs,
  className,
  maxWidth = 900,
  left,
}: {
  className?: string;
  maxWidth?: number;
  left?: boolean;
  faqs: FaqDocument<string>[];
}) => {
  return (
    <div className={clsx('py-14 768:py-28', className ?? 'bg-neutral-120')}>
      <div className='app-container'>
        <div
          className='mx-auto'
          style={{
            maxWidth,
          }}
        >
          <h5
            className={clsx(
              left && '!text-left',
              'text-[38px] text-black 768:text-[42px] mb-6 640:mb-8 text-center',
            )}
          >
            FAQs
          </h5>

          <FaqList faqs={faqs} />
        </div>
      </div>
    </div>
  );
};
