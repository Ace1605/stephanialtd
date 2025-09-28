import clsx from 'clsx';
import './styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/core/Header';
import Providers from './providers';
import { Footer } from '@/components/core/Footer';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s - VPay',
    default: 'VPay - Simplifying payment processes for African businesses',
  },
  description: 'Simplifying payment processes for African businesses',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsx(inter.className, 'mobile-container')}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />

        <div id='portal' />
      </body>
    </html>
  );
}
