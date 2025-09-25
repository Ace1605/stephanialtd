import { ArrowRight } from '@/components/svgs/Arrows';
import clsx from 'clsx';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const AppCtaButton = ({
  type = 'signup',
  className,
  children,
  withArrow,
  href,
  target,
  onClick,
}: PropsWithChildren<{
  type?: 'signin' | 'signup';
  className?: string;
  onClick?: () => void;
  withArrow?: boolean;
  href: string;
  target?: string;
}>) => {
  return (
    <Link href={href} target={target} scroll={false} className={className}>
      {children}

      {withArrow && (
        <span
          className={
            'group-hover:translate-x-1 transition-transform duration-300 my-auto'
          }
        >
          <ArrowRight />
        </span>
      )}
    </Link>
  );
};
