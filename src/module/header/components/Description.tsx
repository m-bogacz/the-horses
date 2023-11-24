"use client";
import { useParams } from "next/navigation";
import React from "react";

export const Description = () => {
  const horseName = useParams();
  return (
    <h2 className="text-4xl font-medium  hidden md:block">
      {horseName ? horseName.horseName : "Dashboard"}
    </h2>
  );
};
