"use client";

import React from "react";
import Link, { type LinkProps } from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";
import { type UrlObjectWithNextRoute } from "./types";
import { getExtractPathname } from "@/utils/getExtractPathname";

interface ActiveLinkProps<T extends string> extends LinkProps<T> {
  href: Route<T> | UrlObjectWithNextRoute<T>;
  children: React.ReactNode;
  exact?: boolean;
  className?: string;
  activeClassName?: string;
}

export const ActiveLink = <T extends string>({
  href,
  children,
  className = "text-sm w-min text-white  hover:text-gray-700 hover:border-b-3 border-slate-300 ",
  activeClassName = "text-black border-b-2 border-slate-600",
  exact = false,
}: ActiveLinkProps<T>) => {
  const currentPathname = usePathname();
  const pathname = getExtractPathname(href);

  const slicePathname = currentPathname.slice(0, pathname.length);
  const isActive = exact
    ? slicePathname === pathname
    : currentPathname === pathname;

  return (
    <Link href={href} className={clsx(className, isActive && activeClassName)}>
      {children}
    </Link>
  );
};
