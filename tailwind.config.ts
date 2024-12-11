import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-white": "#FFFFFF",
        "primary-black": "#080808",
        "card-light": "#F0F0F0"
      },
      fontFamily: {
        "heading-font": ["Poppins", "sans-serif"],
        "subHeading-font": ["Nunito", "sans-serif"],
        "content-font": ["Merriweather Sans", "serif"],
      }
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
