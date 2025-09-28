import {
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
  Youtube,
} from "@/components/svgs/Socials";
import clsx from "clsx";

interface Props {
  isDark?: boolean;
  className?: string;
}

export const Socials = ({ className, isDark }: Props) => {
  return (
    <div
      className={clsx(
        className,
        "flex gap-2 items-center justify-center 768:justify-start"
      )}
    >
      {socials.map(({ icon, url }) => {
        return (
          <a
            href={url}
            key={url}
            className="y-center smooth w-8 h-8 rounded-full hover:bg-primary-800 text-white transition-colors"
            target="_blank"
            rel="noopenner noreferrer"
          >
            <div
              className={clsx(
                isDark && "!text-black text-4xl",
                "mx-auto h-4.5 w-4.5 p-[0.5px] text-white"
              )}
            >
              {icon}
            </div>
          </a>
        );
      })}
    </div>
  );
};

const socials: { icon: JSX.Element; url: string }[] = [
  {
    icon: <Twitter />,
    url: "#",
  },
  { icon: <Instagram />, url: "#" },
  {
    icon: <Facebook />,
    url: "#",
  },
  {
    icon: <LinkedIn />,
    url: "#",
  },
];
