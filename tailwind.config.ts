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
        lightText: " rgb(120 53 15)",
        darkText: "rgb(226 232 240)",
        darkColumn: "rgb(30 64 175)",
        lightColumn: "rgb(191 219 254)",
        buttonColor: "rgb(20 83 45)",
        darkBackground: "rgb(17 24 39)",
        lightBackground: "rgb(226 232 240)",
      },
    },
  },
  plugins: [],
};
export default config;
