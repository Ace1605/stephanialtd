import { formatDate } from '@/helpers/formatters/formatDate';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  uid: string;
  first_publication_date: string;
  data: {
    title: string;
    banner: { url: string };
    description: string;
  };
}

export const BlogPostCard = ({ post }: { post: BlogPost }) => {
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
          'mt-1 group-hover:underline text-xl line-clamp-2'
        }
      >
        {title}
      </h6>
      <p
        className={
          'mt-3 group-hover:underline text-base 768:text-lg text-neutral-440 line-clamp-2'
        }
      >
        {description}
      </p>
    </Link>
  );
};
