import React from "react";
import clsx from "clsx";

export const Overlay = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 bg-black bg-opacity-50 z-40",
        !isVisible && "hidden"
      )}
    />
  );
};
