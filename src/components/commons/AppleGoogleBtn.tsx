import Link from 'next/link';
import { Apple, GooglePlay } from '../svgs/Socials';
import { Line } from '../svgs/app/Line';
interface Props {
  href?: string;
}

export const AppleGoogleBtn = ({ href }: Props) => {
  return (
    <Link
      href={href ? href : 'https://merchantapp.stephania.africa'}
      target='_blank'
      className='cursor-pointer flex w-max items-center px-4 h-12 768:h-14 py-2 gap-4 bg-white border rounded-lg border-neutral-100'
    >
      <Apple />
      <Line />
      <GooglePlay />
      <p className='font-semibold text-black text-sm'>Download App</p>
    </Link>
  );
};
