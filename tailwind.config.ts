import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/module/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#2D3434",
        nav: "#0F8388",
        "nav-200": "#0f8388",
        "gray-light": "#CCCCCC",
        logo: "#47E5EB",
        primary: "#EDF2F7",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
// eslint-disable-next-line import/no-default-export
export default config;
