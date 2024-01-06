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
        charcoal: {
          900: "var(--color-charcoal-900)",
          700: "var(--color-charcoal-700)",
        },
        indigo: "var(--color-indigo)",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      fontSize: {
        "2.5xl": ["1.75rem", { lineHeight: "1.2" }],
        "3.5xl": ["2rem", { lineHeight: "1.2" }],
        "4.5xl": ["2.5rem", { lineHeight: "1.2" }],
        "5.5xl": ["3.5rem", { lineHeight: "1.2" }],
        "7.5xl": ["5rem", { lineHeight: "1.2" }],
        "10xl": "9rem",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
