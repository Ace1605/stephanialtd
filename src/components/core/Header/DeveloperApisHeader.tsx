'use client';

import { AppCtaButton } from '@/components/buttons/AppCtaButton';
import { Logo } from '@/components/commons/Logo';
import { hyphenateString } from '@/helpers/converters/hyphenateString';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MobileMenu } from '@/components/core/MobileMenu';
import { DevMobileMenu } from '../DevMobileMenu';

export interface NavLink {
  title: string;
  hasChildren?: boolean;
  id?: string;
}

export const devNavigationLinks: NavLink[] = [
  {
    title: 'Home',
    id: '/',
  },
  {
    title: 'Docs & Tools',
    id: 'docs',
  },
];

export const DeveloperApisHeader = () => {
  const pathname = usePathname();

  const [activeGroup, setActiveGroup] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setActiveGroup('');
    setShowMobileMenu(false);
  }, [pathname]);

  function closeMenu() {
    setActiveGroup('');
    setShowMobileMenu(false);
  }

  return (
    <>
      <nav
        className={
          'w-full h-14 480:h-20 border-b border-neutral-310 sticky bg-white top-0 z-[1200] left-0'
        }
      >
        <div className='app-container py-0 x-between h-full'>
          <div className='relative h-full gap-1.5 flex'>
            <Logo className={'relative z-10'} onClick={closeMenu} />
            <p className='hidden mt-5 h-6 768:flex text-sm font-light items-center px-2 bg-neutral-150 rounded-lg border border-neutral-300 w-max'>
              Developer
            </p>
          </div>
          <ul className='hidden 1024:flex  h-full py-0 my-0'>
            {devNavigationLinks.map(({ title, id }) => {
              const url = `/${id ?? hyphenateString(title)}`;

              const parent = `/${pathname.split('/')[1]}`;

              return (
                <li key={title} className={'m-0 h-full'}>
                  <Link
                    href={
                      id === 'docs'
                        ? 'https://docs.vpay.africa/vpay-js-inline-dropin-integration-guide'
                        : url
                    }
                    target={id === 'docs' ? '_blank' : '_parent'}
                    onClick={closeMenu}
                    className={clsx(
                      'nav_item',
                      pathname === url && 'text-black',
                    )}
                  >
                    <span className={clsx('my-auto')}>{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className='hidden 1024:flex my-auto relative z-[1100] gap-2'>
            <AppCtaButton
              href='https://www.vpay.africa/login'
              type={'signin'}
              target='_blank'
              className={'y-center outline-button shadow-sm'}
            >
              Sign in
            </AppCtaButton>
          </div>
          <DevMobileMenu
            className={'block 1024:hidden'}
            {...{ setShowMobileMenu, showMobileMenu }}
          />
        </div>
      </nav>
    </>
  );
};
