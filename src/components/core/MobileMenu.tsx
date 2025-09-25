import { AppCtaButton } from '@/components/buttons/AppCtaButton';
import { navigationLinks } from '@/components/core/Header';
import { productGroupLinks } from '@/components/core/Header/navigation/ProductGroup';
import { MobileMenuWrapper } from '@/components/modal/ModalWrapper';
import { ChevronDown } from '@/components/svgs/ChevronDown';
import { Cancel, Hamburger } from '@/components/svgs/Navigation';
import { hyphenateString } from '@/helpers/converters/hyphenateString';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { businessesLinks } from '@/components/core/Header/navigation/BusinessesGroup';

interface Props {
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
  showMobileMenu: boolean;
  className: string;
}

export const MobileMenu = ({
  showMobileMenu,
  setShowMobileMenu,
  className,
}: Props) => {
  const pathname = usePathname();

  const [activeGroup, setActiveGroup] = useState('');

  const subNavItems =
    activeGroup === 'Products'
      ? [
          ...productGroupLinks.links?.products.map((title) => ({
            label: title,
            url: `/products/${hyphenateString(title)}`,
          })),
          ...productGroupLinks.links?.['company size']
            .slice(0, 1)
            .map((title) => ({
              label: title,
              url: `/products/${hyphenateString(title)}`,
            })),
        ]
      : activeGroup === 'Businesses'
        ? [
            ...businessesLinks.links?.['company size'].map((title) => ({
              label: title,
              url: `/businesses/${hyphenateString(title)}`,
            })),
            ...businessesLinks.links?.businesses.map((title) => ({
              label: title,
              url: `/businesses/${hyphenateString(title)}`,
            })),
          ]
        : [];

  function close() {
    setShowMobileMenu(false);
  }

  return (
    <div className={clsx('y-center', className)}>
      <button
        onClick={() => setShowMobileMenu((prev) => !prev)}
        className='my-auto h-10 -mr-2 w-10 rounded-lg'
      >
        <div className='text-white x-center'>
          {showMobileMenu ? <Cancel /> : <Hamburger />}
        </div>
      </button>

      <MobileMenuWrapper
        show={showMobileMenu}
        close={close}
        className='w-full pb-5 bg-white'
      >
        <ul>
          {navigationLinks.map(({ title, id, hasChildren }) => {
            const url = `/${id ?? hyphenateString(title)}`;

            const parent = `/${pathname.split('/')[1]}`;

            const isActive = activeGroup === title;

            if (hasChildren)
              return (
                <li
                  key={title}
                  className={clsx(
                    isActive && 'bg-neutral-70',
                    'border-b border-neutral-310 my-0',
                  )}
                >
                  <button
                    onClick={() => {
                      setActiveGroup(isActive ? '' : title);
                    }}
                    type={'button'}
                    className={clsx(
                      'w-full mobile_menu_item h-[55px]',
                      isActive || parent === url
                        ? 'text-primary-main'
                        : 'text-neutral-main',
                    )}
                  >
                    <span className='my-auto'>{title}</span>

                    <span
                      className={clsx(
                        'transition-transform my-auto',
                        isActive && 'rotate-180',
                      )}
                    >
                      <ChevronDown />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial='collapsed'
                        animate='open'
                        exit='collapsed'
                        variants={{
                          open: {
                            height: 'auto',
                          },
                          collapsed: {
                            height: 0,
                            overflow: 'hidden',
                          },
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <div
                          className={
                            'h-full px-8 py-1 border-t border-neutral-310 bg-neutral-70 '
                          }
                        >
                          {subNavItems.map(({ label, url }) => {
                            return (
                              <Link
                                key={label}
                                onClick={close}
                                className={clsx(
                                  'block y-center text-neutral-740 font-normal text-sm h-12 my-auto',
                                  pathname === url && 'text-primary-main',
                                )}
                                href={url}
                              >
                                <span className='my-auto'>{label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );

            return (
              <li
                key={title}
                className='border-b border-neutral-310 flex items-center'
              >
                <Link
                  href={url}
                  onClick={close}
                  className={clsx(
                    'mobile_menu_item h-[55px]',
                    pathname === url && 'text-primary-main',
                  )}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className='absolute x-center w-full border-t border-neutral-310 pt-5 bottom-4 gap-4 px-8'>
          <AppCtaButton
            href='https://www.vpay.africa/login'
            target='_blank'
            type={'signin'}
            className={
              'y-center text-primary-main items-center outline-button h-12 768:h-14 w-full shadow-sm'
            }
          >
            Login
          </AppCtaButton>

          <AppCtaButton
            href='https://www.vpay.africa/signup'
            target='_blank'
            className={
              'primary-button h-12 items-center 768:h-14 w-full y-center'
            }
          >
            Sign up
          </AppCtaButton>
        </div>
      </MobileMenuWrapper>
    </div>
  );
};
