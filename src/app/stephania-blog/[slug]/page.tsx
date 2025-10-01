import { CallToAction } from '@/components/core/Footer/CallToAction';
import { ArrowLeft, Author, Published } from '@/components/svgs/blog/Post';
import { formatDate } from '@/helpers/formatters/formatDate';
import clsx from 'clsx';
import { Metadata } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlogSuggestionCards } from '@/components/modules/blog/BlogSuggestionCards';

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  return {
    title: 'Blog Post',
    description: 'Blog post description',
  };
}

export default function BlogPost({ params }: any) {
  const { slug } = params;

  // Mock data - replace with your actual data source
  const mockPost = {
    title: 'Sample Blog Post',
    author: { name: 'Author Name' },
    banner: { url: '/placeholder-banner.jpg' },
    slices: [],
    first_publication_date: new Date().toISOString(),
  };

  const mockRecentPosts: any[] = [];

  return (
    <main>
      <div className='py-10 640:py-20'>
        <div className='app-container'>
          <Link href={'/stephania-blog'} className={'flex gap-2 text-primary-main'}>
            <span className={'my-auto'}>
              <ArrowLeft />
            </span>

            <span className={'text-neutral-main mt-0.5 font-medium text-sm'}>
              Back to Blog
            </span>
          </Link>

          <h2
            className={
              'mt-8 text-3xl 640:text-[42px] tracking-tighter 640:leading-[46px] font-semibold'
            }
          >
            {mockPost.title}
          </h2>

          <div className='flex mt-3 640:mt-5 gap-4'>
            <div className='flex gap-1'>
              <span className={'my-auto'}>
                <Author />
              </span>

              <p className={'mt-0.5 text-neutral-440 text-sm 640:text-base'}>
                {mockPost.author?.name}
              </p>
            </div>

            <div className='flex gap-1'>
              <span className={'my-auto'}>
                <Published />
              </span>

              <p className={'mt-0.5 text-neutral-440 text-sm 640:text-base'}>
                {formatDate(mockPost.first_publication_date, 'short')}
              </p>
            </div>
          </div>

          <div className='relative my-8 h-[187px] 640:h-[420px] 880:h-[526px] rounded-xl 640:rounded-2xl overflow-hidden bg-neutral-200'>
            <Image
              src={mockPost.banner?.url ?? ''}
              alt={''}
              fill
              className={'object-cover object-top'}
            />
          </div>
        </div>

        <div className='app-container max-w-[848px]'>
          <div className={'rich-text tall-list'}>
            <p>Blog content will be displayed here once connected to your content management system.</p>
          </div>
        </div>
      </div>
      <div className='bg-neutral-150'>
        <div className='app-container py-14 640:py-28'>
          <h4
            className={
              'text-black text-[20px] 640:text-[28px] mb-4 768:mb-7 leading-[28px] tracking-tight font-semibold'
            }
          >
            You might also like...
          </h4>

          <div className='grid mt-6 grid-cols-12 640:gap-y-5 gap-y-10 gap-x-5'>
            {mockRecentPosts?.map((post) => {
              return <BlogSuggestionCards post={post} key={post.id} />;
            })}
          </div>
        </div>
      </div>

      <CallToAction />
    </main>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  // Return empty array or mock slugs for now
  return [];
}
