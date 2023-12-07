import { type ImageLoaderProps } from "next/image";

export const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://res.cloudinary.com/dthfyrdve/image/upload/v1701893238/${src}?w=${width}&q=${
    quality || 75
  }`;
};
