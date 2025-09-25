import { Author, Published } from '@/components/svgs/blog/Post';
import { formatDate } from '@/helpers/formatters/formatDate';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPostDocument, PrimaryBlogPostDocument } from '@/types/prismic';

export const PrimaryBlogPost = ({
  primaryPost,
}: {
  primaryPost: PrimaryBlogPostDocument<string>;
}) => {
  if (!primaryPost) return null;

  const {
    data: { label, post },
  } = primaryPost;

  const {
    data: { title, author, banner },
    uid,
    first_publication_date,
  } = post as unknown as BlogPostDocument<string>;

  return (
    <div>
      <Link
        href={`/vpay-blog/${uid}`}
        className={
          'col-span-12 480:col-span-6 mt-5 640:mt-8 block group 880:col-span-4'
        }
      >
        <div className='flex mt-3 640:mt-5 gap-4'>
          <div className='flex gap-1'>
            <span className={'my-auto'}>
              <Author />
            </span>

            <p className={'mt-0.5 text-neutral-440 text-sm 640:text-base'}>
              {(author as any)?.data?.name}
            </p>
          </div>

          <div className='flex gap-1'>
            <span className={'my-auto'}>
              <Published />
            </span>

            <p className={'mt-0.5 text-neutral-440 text-sm 640:text-base'}>
              {formatDate(first_publication_date, 'short')}
            </p>
          </div>
        </div>

        <h6
          className={
            'mt-2 prismic_title 640:mt-4 font-semibold text-2xl 640:text-5xl 768:max-w-[740px] text-left mb-8'
          }
        >
          <PrismicRichText field={title} />
        </h6>
        <div className='relative overflow-hidden h-[240px] 640:h-[420px] 880:h-[526px] rounded-2xl bg-neutral-200'>
          <Image
            src={banner?.url ?? ''}
            alt={''}
            fill
            className={'object-cover'}
          />
        </div>
      </Link>
    </div>
  );
};
