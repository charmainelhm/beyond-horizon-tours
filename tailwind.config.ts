import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        charcoal: "var(--color-charcoal)",
        indigo: "var(--color-indigo)",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      fontSize: {
        "10xl": "9rem",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
