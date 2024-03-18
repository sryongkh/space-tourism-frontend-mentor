import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#0B0D17",
      },
      backgroundImage: {
        "gradient-default": "url('../public/bg.png')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "576.98px",
        md: "768.98px",
      },
      colors: {
        primary: "#0B0D17",
        purple: "#D0D6F9",
      },
      fontFamily: {
        barlow: "Barlow Condensed",
        bellefair: "Bellefair",
      },
      fontSize: {
        "h1": "150px",
        "h1-mobile": "80px",
        "h2": "100px",
        "h3": "56px",
        "h4": "32px",
        "h5": "28px",
        "h5-tablet": "20px",
        "subh1": "28px",
        "subh2": "14px",
        "navtxt": "16px",
        "bodytxt": "18px",
      },
      letterSpacing: {
        "h5": "4.72px",
        "h5-tablet": "3.38px",
        "subheading": "2.36px",
        "navtxt": "2.7px",
      },
      lineHeight: {
        "normal": "normal"
      },
      boxShadow: {
        "star": "0 8px 72px rgba(96, 96, 96, 0.1)"
      }
    },
  },
  plugins: [],
};
export default config;
