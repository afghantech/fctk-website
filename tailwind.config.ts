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
          blueSoft: "var(--color-omsu-blue-soft)",
          white: "var(--color-omsu-white)",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 48, 135, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;