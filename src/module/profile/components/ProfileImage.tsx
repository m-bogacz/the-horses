import React from "react";
import Image from "next/image";

type ProfileImageProps = {
  url: string;
  horseName: string;
};

export const ProfileImage = ({ url, horseName }: ProfileImageProps) => {
  return (
    <div className="overflow-hidden rounded-full border bg-slate-50 hover:bg-slate-100 max-w-xs w-40 h-40">
      <Image
        src={url}
        width={100}
        height={100}
        alt={horseName}
        className="h-full w-full rounded-full object-cover object-center p-1 transition-transform hover:scale-105"
      />
    </div>
  );
};
