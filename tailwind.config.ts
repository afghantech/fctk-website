import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        omsu: {
          blue: "var(--color-omsu-blue)",
          blueDark: "var(--color-omsu-blue-dark)",
          black: "var(--color-omsu-black)",
          gray: "var(--color-omsu-gray)",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(184, 24, 23, 0.14)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;