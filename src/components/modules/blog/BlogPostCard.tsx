import { formatDate } from '@/helpers/formatters/formatDate';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPostDocument } from '@/types/prismic';

export const BlogPostCard = ({ post }: { post: BlogPostDocument<string> }) => {
  const {
    uid,
    first_publication_date,
    data: { title, banner, description },
  } = post;

  return (
    <Link
      href={`/vpay-blog/${uid}`}
      className={'col-span-12 480:col-span-6 group 880:col-span-4'}
    >
      <div className='relative h-[341px] overflow-hidden rounded-xl bg-neutral-200'>
        <Image
          src={banner.url ?? ''}
          alt={''}
          fill
          className={'object-cover !relative'}
        />
      </div>

      <p className={'mt-7 mb-4 text-neutral-440 text-sm'}>
        {formatDate(first_publication_date, 'short')}
      </p>
      <h6
        className={
          'mt-1 prismic_title group-hover:underline text-xl line-clamp-2'
        }
      >
        <PrismicRichText field={title} />
      </h6>
      <p
        className={
          'mt-3 prismic_description group-hover:underline text-base 768:text-lg text-neutral-440 line-clamp-2'
        }
      >
        {description}
      </p>
    </Link>
  );
};
