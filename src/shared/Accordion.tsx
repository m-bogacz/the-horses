"use client";

import clsx from "clsx";
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
        {isOpen ? "Collapse" : "Expand"}
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
