import { AppCtaButton } from '@/components/buttons/AppCtaButton';
import { MobileMenuWrapper } from '@/components/modal/ModalWrapper';
import { Cancel, Hamburger } from '@/components/svgs/Navigation';
import { hyphenateString } from '@/helpers/converters/hyphenateString';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { devNavigationLinks } from './Header/DeveloperApisHeader';

interface Props {
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
  showMobileMenu: boolean;
  className: string;
}

export const DevMobileMenu = ({
  showMobileMenu,
  setShowMobileMenu,
  className,
}: Props) => {
  const pathname = usePathname();

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
          {devNavigationLinks.map(({ title, id }) => {
            const url = `/${id ?? hyphenateString(title)}`;

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

        <div className='absolute bottom-4 x-center w-full border-t border-neutral-310 pt-5 mt-4 my-auto'>
          <AppCtaButton
            href='https://www.stephania.africa/login'
            target='_blank'
            type={'signin'}
            className={'y-center outline-button h-12 768:h-14 px-6 shadow-sm'}
          >
            Sign in
          </AppCtaButton>
        </div>
      </MobileMenuWrapper>
    </div>
  );
};
