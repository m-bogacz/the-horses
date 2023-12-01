"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { type TabSlugProps } from "../common/types";

export const Tab = ({
  children,
  slug,
}: {
  children: React.ReactNode;
  slug: TabSlugProps;
}) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("tab") ?? "";
  return (
    <Link
      href={{
        query: { tab: slug },
      }}
      className={clsx(
        "flex-1 py-2 px-4 text-sm font-semibold md:text-base rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ml-0 mr-0 ",
        search === slug && "bg-nav text-white"
      )}
    >
      {children}
    </Link>
  );
};
