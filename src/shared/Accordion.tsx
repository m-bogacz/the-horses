"use client";

import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

export const Accordion = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-primary p-3">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full">
        <Arrow direction={isOpen} />
      </button>
      <div
        className={clsx(
          "overflow-hidden bg-primary transition-all duration-300 ease-in-out text-center",
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
