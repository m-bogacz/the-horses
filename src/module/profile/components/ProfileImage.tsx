"use client";

import React from "react";
import Image from "next/image";
import { imageLoader } from "@/utils/imageLoader";

type ProfileImageProps = {
  url: string;
  horseName: string;
};

export const ProfileImage = ({ url, horseName }: ProfileImageProps) => {
  return (
    <div className="overflow-hidden rounded-full border bg-slate-50 hover:bg-slate-100 max-w-xs w-32 h-32 md:w-40 md:h-40">
      <Image
        loader={imageLoader}
        src={url}
        width={200}
        height={200}
        alt={horseName}
        className="h-full w-full rounded-full object-fill  p-1 transition-transform hover:scale-105"
      />
    </div>
  );
};
