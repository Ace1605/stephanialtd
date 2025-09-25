import { CallToAction } from '@/components/core/Footer/CallToAction';
import { BlogModule } from '@/components/modules/blog/BlogModule';
import { createClient } from '@/prismicio';
import { Metadata } from 'next';
import { DownloadPrompt } from '@/components/sections/home/DownloadPrompt';
import { NewsLetterForm } from '@/components/forms/NewsLetterForm';

export const metadata: Metadata = {
  title: 'Press & Media',
};

export default async function PressAndMedia({ searchParams }: any) {
  const client = createClient();

  const posts = await client.getAllByType('blog_post', {
    graphQuery: `
    {
      blog_post {
        title
        banner
        category
        description
      }
    }
  `,
  });

  const categories = await client.getAllByType('blog_category');

  return (
    <main>
      <div className='bg-neutral-150 py-14 640:py-28'>
        <div className='app-container'>
          <h5
            className={'text-[48px] text-black 768:text-[70px] text-left pb-3'}
          >
            The VPay
            <span className='text-gradient'> Blog</span>
          </h5>
          <p className='font-semibold text-xl 768:text-[30px] text-black pt-3 pb-2'>
            Updates and announcements from VPay Team!
          </p>
          <NewsLetterForm />
        </div>
      </div>
      <BlogModule {...{ categories, searchParams }} posts={posts} />
      <DownloadPrompt />
      <CallToAction />
    </main>
  );
}
