import { hyphenateString } from "@/helpers/converters/hyphenateString";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const IndustriesHeader = ({ close }: { close: () => void }) => {
  const pathname = usePathname();

  const industries = [
    "Oil & Gas",
    "Power",
    "Construction",
    "Telecommunications",
  ];

  return (
    <div className={"flex items-center justify-between gap-20"}>
      <div className={"flex gap-20 -mt-12"}>
        <div>
          <h6 className={"text-base text-neutral-500 font-semibold mb-4"}>
            Target Industries
          </h6>
          <div className="w-full grid grid-cols-2 gap-x-5">
            {industries.map((industry) => {
              const href = `/industries/${hyphenateString(industry)}`;

              return (
                <Link
                  href={href}
                  onClick={close}
                  className={"flex py-2 col-span-1 group"}
                  key={industry}
                >
                  <div
                    className={clsx(
                      "text-black font-semibold group-hover:text-primary-main text-sm",
                      pathname === href && "text-primary-main"
                    )}
                  >
                    {industry}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
