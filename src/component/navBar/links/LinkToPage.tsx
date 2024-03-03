"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type linkType = {
  links: { label: string; href: string };
};

function LinkToPage({ links }: linkType) {
  const pathName = usePathname();

  return (
    <Link
      href={links.href}
      className={`transition-all  hover:bg-white hover:rounded-sm relative hover:text-black p-2 hover:font-bold  afterLink text-center h-10 ${
        pathName === links.href
          ? "bg-white   text-black afterLinkStay font-bold bgForNavButton"
          : " "
      }`}
    >
      {links.label}
    </Link>
  );
}

export default LinkToPage;
