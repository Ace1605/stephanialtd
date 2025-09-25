import { CallToAction } from '@/components/core/Footer/CallToAction';
import { ArrowLeft, Author, Published } from '@/components/svgs/blog/Post';
import { formatDate } from '@/helpers/formatters/formatDate';
import { createClient } from '@/prismicio';
import { PrismicRichText } from '@prismicio/react';
import clsx from 'clsx';
import { Metadata } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import Link from 'next/link';
import * as prismic from '@prismicio/client';
import { notFound } from 'next/navigation';
import { BlogSuggestionCards } from '@/components/modules/blog/BlogSuggestionCards';

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const post = await client
    ?.getByUID('blog_post', params.slug)
    .catch(() => notFound());

  return {
    title: prismic.asText(post.data.title),
    description: post.data.description,
  };
}

export default async function BlogPost({ params }: any) {
  const { slug } = params;

  const client = createClient();

  const post = await client?.getByUID('blog_post', slug, {
    graphQuery: `
    {
      blog_post {
        title
        banner
        author {
          ...on author {
            name
          }
        }
        slices
      }
    }
  `,
  });

  const recent_posts = await client?.getAllByType('blog_post', {
    graphQuery: `
    {
      blog_post {
        title
        banner
        description
      }
    }
  `,
    limit: 3,
    filters: [prismic.filter.not('my.blog_post.uid', post?.uid)],
  });

  const {
    data: { title, author, banner, slices },
    first_publication_date,
  } = post;

  return (
    <main>
      <div className='py-10 640:py-20'>
        <div className='app-container'>
          <Link href={'/vpay-blog'} className={'flex gap-2 text-primary-main'}>
            <span className={'my-auto'}>
              <ArrowLeft />
            </span>

            <span className={'text-neutral-main mt-0.5 font-medium text-sm'}>
              Back to Blog
            </span>
          </Link>

          <h2
            className={
              'mt-8 text-3xl 640:text-[42px] prismic_title tracking-tighter 640:leading-[46px] font-semibold'
            }
          >
            <PrismicRichText field={title} />
          </h2>

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

          <div className='relative my-8 h-[187px] 640:h-[420px] 880:h-[526px] rounded-xl 640:rounded-2xl overflow-hidden bg-neutral-200'>
            <Image
              src={banner?.url ?? ''}
              alt={''}
              fill
              className={'object-cover object-top'}
            />
          </div>
        </div>

        <div className='app-container max-w-[848px]'>
          {slices?.map(({ id, slice_type, primary, items }) => {
            if (slice_type === 'content_block')
              return (
                <div className={'rich-text tall-list'} key={id}>
                  {primary && (
                    <PrismicRichText field={primary.content} key={id} />
                  )}
                  {items.map(({ content }) => {
                    return <PrismicRichText field={content} key={id} />;
                  })}
                </div>
              );

            if (slice_type === 'picture_group')
              return (
                <div key={id} className={'my-14 gap-5'}>
                  {items.map(({ image: { alt, url } }) => {
                    if (!url) return <></>;

                    return (
                      <div
                        key={url}
                        className={clsx(
                          !!alt ? 'col-span-12' : 'col-span-12 768:col-span-6',
                        )}
                      >
                        <div
                          className={clsx(
                            'relative bg-neutral-200 rounded-2xl h-[320px] 640:h-[650px]',
                          )}
                        >
                          <Image
                            src={url}
                            alt={alt ?? ''}
                            className={'object-cover rounded-xl'}
                            sizes={alt ? '100%' : '50%'}
                            fill
                          />
                        </div>

                        {alt && (
                          <p
                            className={
                              'text-center mt-2 text-sm text-neutral-440'
                            }
                          >
                            {alt}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              );

            return <></>;
          })}
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
            {recent_posts?.map((post) => {
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
  const client = createClient();
  const posts = await client?.getAllByType('blog_post');

  return posts.map((post) => ({
    slug: post.uid,
  }));
}
