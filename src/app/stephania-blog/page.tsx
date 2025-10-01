import { CallToAction } from '@/components/core/Footer/CallToAction';
import { Metadata } from 'next';
import { DownloadPrompt } from '@/components/sections/home/DownloadPrompt';
import { NewsLetterForm } from '@/components/forms/NewsLetterForm';

export const metadata: Metadata = {
  title: 'Press & Media',
};

export default function PressAndMedia({ searchParams }: any) {
  return (
    <main>
      <div className='bg-neutral-150 py-14 640:py-28'>
        <div className='app-container'>
          <h5
            className={'text-[48px] text-black 768:text-[70px] text-left pb-3'}
          >
            The Stephania
            <span className='text-gradient'> Blog</span>
          </h5>
          <p className='font-semibold text-xl 768:text-[30px] text-black pt-3 pb-2'>
            Updates and announcements from Stephania Team!
          </p>
          <NewsLetterForm />
        </div>
      </div>
      {/* <BlogModule {...{ categories, searchParams }} posts={posts} /> */}
      <DownloadPrompt />
      <CallToAction />
    </main>
  );
}
