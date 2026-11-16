import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080d18",
        panel: "#101827",
        line: "#233047",
        mint: "#6ee7c2",
        sky: "#80b8ff"
      },
      boxShadow: {
        glow: "0 0 70px rgba(110,231,194,.10)"
      }
    }
  },
  plugins: []
};
export default config;
