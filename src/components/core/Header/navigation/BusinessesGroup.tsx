import { hyphenateString } from "@/helpers/converters/hyphenateString";
// import illustration from "/public/assets/megamenu/phone.png";
import clsx from "clsx";
// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { Apple, GooglePlay } from "@/components/svgs/Socials";
// import { Line } from "@/components/svgs/app/Line";

export const BusinessesGroup = ({ close }: { close: () => void }) => {
  const pathname = usePathname();

  return (
    <div className={"flex items-center justify-between gap-20"}>
      <div className={"flex gap-20 -mt-12"}>
        <div>
          <h6 className={"text-base text-neutral-500 font-semibold mb-4"}>
            Our Services
          </h6>
          <div className="w-full">
            {businessesLinks?.links?.["core services"]?.map((link) => {
              const href = `/services/${hyphenateString(link)}`;

              return (
                <Link
                  href={href}
                  onClick={close}
                  className={"flex py-2 col-span-1 group"}
                  key={link}
                >
                  <div
                    className={clsx(
                      "text-black font-semibold group-hover:text-primary-main text-sm",
                      pathname === href && "text-primary-main"
                    )}
                  >
                    {link}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <div className="w-full mt-10">
            {businessesLinks?.links?.["specialized solutions"]?.map((link) => {
              const href = `/services/${hyphenateString(link)}`;

              return (
                <Link
                  href={href}
                  onClick={close}
                  className={"flex py-2 col-span-1 group"}
                  key={link}
                >
                  <div
                    className={clsx(
                      "text-black font-semibold group-hover:text-primary-main text-sm",
                      pathname === href && "text-primary-main"
                    )}
                  >
                    {link}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div className='w-1/2 mt-4'>
        <h6 className={'text-base text-neutral-500 font-semibold'}>
          Resources
        </h6>

        <div className='relative mt-7 flex justify-between bg-neutral-150 rounded-2xl py-10 px-12'>
          <div>
            <h6 className='w-3/4 text-xl tracking-normal font-semibold text-black pr-2'>
              Join over 90,000+ businesses using Stephania to{' '}
              <span className='text-gradient'>simplify payments</span>
            </h6>
            <Link
              href='https://merchantapp.stephania.africa'
              target='_blank'
              className='flex w-max px-4 mt-4 py-2 gap-4 bg-white rounded-lg border border-neutral-100'
            >
              <Apple />
              <Line />
              <GooglePlay />
              <p className='font-semibold text-black'>Download App</p>
            </Link>
          </div>
          <div className='relative w-1/2'>
            <Image
              className='absolute -top-7 w-[138px]'
              src={illustration}
              priority
              alt='stephania_research'
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export const businessesLinks = {
  links: {
    "core services": [
      "Engineering Services",
      "Construction",
      "Procurement",
      "Midstream Solutions",
    ],
    "specialized solutions": [
      "Vessel Management",
      "Offshore Solutions",
      "Onshore Solutions",
    ],
  },
};
