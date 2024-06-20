import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const colors = {
  magente: "#FF3333",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Satoshi"],
        head: ["Integral CF"],
      },
      backgroundColor: {
        transparent: "transparent",
        grey: "#F0F0F0",
        "grey-1": "#F2F0F1",
        "grey-2": "#F0EEED",
      },
      borderColor: {
        "pay-gray": "#D6DCE5",
      },
      borderRadius: {
        sm: "5.38px",
        "2.5xl": "1.25rem",
        "4xl": "2.5rem",
      },
      padding: {
        "3.5": "0.875rem",
        "17.5": "4.375rem",
        "19": "4.75rem",
        "35": "8.75rem",
        "26": "6.5rem",
        "29": "7.25rem",
      },
      margin: {
        "6.5": "1.625rem",
      },
      gridTemplateColumns: {
        browse: "37fr, 63fr",
        browse2: "63fr, 37fr",
      },
      backgroundSize: {
        "58%": "58%",
        "70%": "70%",
        "full-banner": "450px,100%",
      },
      colors: {
        ...colors,
      },
    },

    fontSize: {
      xs: ["12px", "22px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "1.5xl": "25.2px",
      "2xl": ["32px", "38px"],
      "3xl": ["36px", "38px"],
      "4xl": ["40px", "54px"],
      "5xl": "48px",
      "6xl": ["64px", { lineHeight: "64px", fontWeight: "bold" }],
    },
  },
  plugins: [],
};
export default config;
