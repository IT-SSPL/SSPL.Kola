import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#252525",
        darkprimary: "#F7F5FA",
        card: "#fcfcfc",
        darkcard: "#5C5B5B",
      },
      boxShadow: {
        "center-md":
          "0 0 6px -1px rgba(0, 0, 0, 0.1), 0 0 4px -2px rgba(0, 0, 0, 0.1)",
        "center-lg":
          "0 0 15px -3px rgba(0, 0, 0, 0.1), 0 0 6px -4px rgba(0, 0, 0, 0.1)",
        "center-xl":
          "0 0 25px -5px rgba(0, 0, 0, 0.1), 0 0 8px -6px rgba(0, 0, 0, 0.1)",
        "center-2xl":
          "0 0 50px -12px rgba(0, 0, 0, 0.15), 0 0 10px -12px rgba(0, 0, 0, 0.15)",
        "center-3xl": "0 0 50px -12px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "3xl": { raw: "(min-width: 1680px)" },
      },
    },
  },
  plugins: [],
};
export default config;
