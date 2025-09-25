import clsx from 'clsx';
import './styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/core/Header';
import Providers from './providers';
import { Footer } from '@/components/core/Footer';
import { createClient } from '@/prismicio';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s - VPay',
    default: 'VPay - Simplifying payment processes for African businesses',
  },
  description: 'Simplifying payment processes for African businesses',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const client = createClient();

  const posts = await client.getAllByType('blog_post', {
    graphQuery: `
    {
      blog_post {
        title
        description
        banner
      }
    }
  `,
    limit: 2,
  });

  return (
    <html lang='en'>
      <body className={clsx(inter.className, 'mobile-container')}>
        <Header posts={posts} />
        <Providers>{children}</Providers>
        <Footer />

        <div id='portal' />
      </body>
    </html>
  );
}
