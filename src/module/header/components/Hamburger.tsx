"use client";

import React, { useEffect } from "react";
import { PanelRightClose, PanelRightOpen, X as CloseIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { Overlay } from "@/shared/Overlay";

export const Hamburger = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const onClose = () => setIsOpen(false);

    document.body.addEventListener("click", onClose);

    return () => {
      document.body.removeEventListener("click", onClose);
    };
  }, []);

  return (
    <div className={clsx("md:hidden flex justify-end", isHome && "hidden")}>
      <Overlay isVisible={isOpen} />
      {!isOpen ? (
        <PanelRightOpen
          color="white"
          size={30}
          className="md:hidden cursor-pointer text-slate-950"
          onClick={toggleOpen}
        />
      ) : (
        <PanelRightClose size={30} color="white" onClick={toggleOpen} />
      )}
      <div
        className={`top-0 left-0 w-[30vw] min-w-[180px] bg-nav  text-white fixed h-full z-40  ease-in-out duration-300 ${
          isOpen ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <>
          <div className="flex justify-end w-full p-2 cursor-pointer">
            <CloseIcon />
          </div>
          {isOpen && children}
        </>
      </div>
    </div>
  );
};
