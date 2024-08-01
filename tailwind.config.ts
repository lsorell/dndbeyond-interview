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
      colors: {
        "talent-bg": "#0b1116",
        "talent-border": "#13161a",
        "talent-bright": "#313134",
        "talent-mid": "#181919",
        "talent-dark": "#060809",
        "talent-blue": "#4a6786",
        "talent-blue-bright": "#70ace9",
      },
    },
  },
  plugins: [],
};
export default config;
