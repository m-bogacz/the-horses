"use client";

import React from "react";
import { PanelRightClose, PanelRightOpen } from "lucide-react";
import { usePathname } from "next/navigation";

<PanelRightClose size={44} />;
import clsx from "clsx";

export const Hamburger = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div className={clsx("md:hidden flex justify-end", isHome && "hidden")}>
      {!isOpen ? (
        <PanelRightOpen
          color="white"
          size={30}
          className="md:hidden"
          onClick={toggleOpen}
        />
      ) : (
        <PanelRightClose size={30} color="white" onClick={toggleOpen} />
      )}
      {isOpen ? (
        <div className="fixed left-0 h-screen w-40 top-24 ">{children}</div>
      ) : null}
    </div>
  );
};
