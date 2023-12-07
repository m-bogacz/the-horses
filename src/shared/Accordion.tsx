"use client";

import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

export const Accordion = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="rounded-md bg-nav text-white shadow-md border flex-1 py-2  text-sm font-semibold md:text-base  focus:outline-none focus:shadow-outline-blue transition-all duration-300 ml-0 mr-0 ">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-4">
        <Arrow direction={isOpen} />
      </button>
      <div
        className={clsx(
          "overflow-hidden bg-nav transition-all duration-300 ease-in-out text-center ",
          isOpen ? "max-h-screen" : "max-h-10"
        )}
      >
        {isOpen && children}
      </div>
    </div>
  );
};

const Arrow = ({ direction }: { direction: boolean }) => {
  if (direction) {
    return (
      <div className="flex w-full justify-center">
        <span>Collapse</span>
        <ChevronUp />
      </div>
    );
  } else {
    return (
      <div className="flex w-full justify-center">
        <span>Expand</span>
        <ChevronDown />
      </div>
    );
  }
};
