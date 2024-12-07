import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#f29f67",
        secondary: "#1e1e2c",
        supporting1: "#3b8ff3",
        supporting2: "#34b1aa",
        supporting3: "#e0b50f",
      },
    },
  },
  plugins: [],
} satisfies Config;
