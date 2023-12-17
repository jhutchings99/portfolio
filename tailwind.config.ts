import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-bg": "#0F1931",
        accent: "#FD774B",
        link: "#97A0BF",
        header: "#CCD6F6",
        sub: "#8892B0",
        text: "#5F6E87",
        hover: "#172648",
      },
    },
  },
  plugins: [],
};
export default config;
