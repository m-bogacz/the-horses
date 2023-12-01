"use client";

import React from "react";
import Image from "next/image";

import { imageLoader } from "@/utils/imageLoader";

export const SidebarImage = ({ name, src }: { name: string; src: string }) => {
  return (
    <section className="flex justify-center items-center mb-5 gap-2">
      <Image
        loader={imageLoader}
        src={src}
        width={100}
        height={100}
        alt={name}
        className="w-10 h-10 rounded-full"
      />

      <span className="md:text-lg">{name}</span>
    </section>
  );
};
