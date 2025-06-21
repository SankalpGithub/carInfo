import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
      },

      screen: {
        xs: "480px",
        sm: "640px", // keep Tailwind defaults if you like
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        xsm: "430px",
      },
    },
  },
  plugins: [],
} satisfies Config;
