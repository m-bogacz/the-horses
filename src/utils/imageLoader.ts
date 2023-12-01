import { type ImageLoaderProps } from "next/image";
// import { loadEnvConfig } from "@next/env";

// loadEnvConfig(process.cwd());

export const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${process.env.APP_SERVER_URL}${src}?w=${width}&q=${quality || 75}`;
};
