import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightText: "rgb(120 53 15)",
        darkText: "rgb(226 232 240)",
        darkColumnBg: "rgb(30 64 175)",
        darkTitleBg: "#141E46",
        lightColumnBg: "#D2E0FB",
        lightTitleBg: "#8EACCD",
        buttonColor: "rgb(20 83 45)",
        darkBackground: "rgb(17 24 38)",
        lightBackground: "rgb(226 232 240)",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(lightText|darkText|darkColumn|lightColumn|buttonColor|darkBackground|lightBackground)/,
    },
  ],
};
export default config;
