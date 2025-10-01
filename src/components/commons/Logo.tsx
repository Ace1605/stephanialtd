import logo from "/public/logos/stephania_logo.png";
import white_logo from "/public/logos/stephania_logo.png";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onClick?: () => void;
  className?: string;
  white?: boolean;
}

export const Logo = ({ onClick, className, white }: Props) => {
  return (
    <Link
      onClick={onClick}
      href="/"
      className={clsx("my-auto flex gap-2", className)}
    >
      <Image
        src={white ? white_logo : logo}
        priority
        alt="stephania-logo"
        className="cursor-pointer w-[62px] 640:w-[80px] object-contain"
      />
    </Link>
  );
};
