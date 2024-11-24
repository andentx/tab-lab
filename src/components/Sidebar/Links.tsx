import {
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
  DocumentIcon,
  PrinterIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";

import classNames from "@/utils/classNames";

const navigation = [
  { name: "Page Preview", href: "/", icon: DocumentIcon },
  // { name: "Print", href: "/print", icon: PrinterIcon },
  {
    name: "About",
    href: "/about",
    icon: InformationCircleIcon,
  },
  { name: "Settings", href: "/settings", icon: Cog6ToothIcon },
  { name: "Account", href: "/account", icon: UserIcon },
  { name: "Help", href: "/help", icon: QuestionMarkCircleIcon },
];

const Links = () => {
  const pathname = usePathname();

  return (
    <>
      <ul role="list" className="-mx-2 mb-8 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            {pathname === item.href ? (
              <span
                className={classNames(
                  "bg-gray-700 text-white",
                  "flex cursor-default gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                )}
              >
                <item.icon
                  className="h-6 w-6 shrink-0 text-lime-300"
                  aria-hidden="true"
                />
                {item.name}
              </span>
            ) : (
              <Link
                href={item.href}
                className={classNames(
                  "text-gray-200 hover:bg-gray-700 hover:text-white",
                  "flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-200"
                )}
              >
                <item.icon
                  className="h-6 w-6 shrink-0 text-gray-200"
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Links;
