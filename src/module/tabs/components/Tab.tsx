"use client";

import clsx from "clsx";
import { useParams } from "next/navigation";
import { type TabSlugProps } from "../common/types";
import { ActiveLink } from "@/shared/ActiveLink";

export const Tab = ({
  children,
  tabSlug,
}: {
  children: React.ReactNode;
  tabSlug: TabSlugProps;
}) => {
  const params = useParams<{ slug: string; tab: string }>();

  return (
    <ActiveLink
      href={{
        pathname: `/horse/${params.slug}/${tabSlug}`,
      }}
      className={clsx(
        "flex-1 py-2 px-4 text-sm font-semibold md:text-base rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ml-0 mr-0 ",
        params.tab === tabSlug && "bg-nav text-white"
      )}
    >
      {children}
    </ActiveLink>
  );
};
