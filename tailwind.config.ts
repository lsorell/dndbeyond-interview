import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "talent-calc": "url('/talent-calc-bg.png')",
      },
      boxShadow: {
        glow: "0px 0px 8px 2px rgba(255,255,255,0.25)",
      },
      colors: {
        "talent-bg": "#0b1116",
        "talent-border": "#13161a",
        "talent-bright": "#414143",
        "talent-mid": "#181919",
        "talent-dark": "#060809",
        "talent-blue": "#4a6786",
        "talent-blue-bright": "#70ace9",
        "talent-path-font": "#c4c5c5",
        "talent-path-border": "#202122",
        "talent-path-light": "#313234",
        "talent-point-border": "#101214",
      },
    },
  },
  plugins: [],
};
export default config;
