import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: "html",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        "brand-green": "var(--brand-green)",
        "dark-green": "var(--dark-green)",
        "medium-green": "var(--medium-green)",
        "text-color": "var(--text-color)",
        gray: "var(--gray)",
        "light-gray": "var(--light-gray)",
        "extra-light-gray": "var(--extra-light-gray)",
      },
    },
  },
  plugins: [],
};

export default config;
