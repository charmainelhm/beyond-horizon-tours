import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "var(--color-charcoal)",
        indigo: "var(--color-indigo)",
        neutral: {
          100: "white",
          800: "var(--color-charcoal)",
        },
        accent: "var(--color-indigo)",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
