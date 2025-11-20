import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xl: "1400px",
      },
    },
    extend: {
      colors: {
        "gsm-blue": {
          DEFAULT: "#2f499d",
        },
        "gsm-blue-dark": {
          DEFAULT: "#0d2c8f",
        },
        "gsm-yellow": {
          DEFAULT: "#e8b221",
        },
        "gsm-black": {
          DEFAULT: "#262626",
        },
        swps: {
          DEFAULT: "#059669",
        },
      },
      borderRadius: {
        DEFAULT: "0.375rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        spacing: "padding",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;
