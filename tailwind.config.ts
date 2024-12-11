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
      },
      fontFamily: {
        bebas: ["'Bebas Neue'", "cursive"],
        kanit: ["'Kanit'", "sans-serif"],
        kumbh: ["'Kumbh Sans'", "sans-serif"],
        nunito: ["'Nunito'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
        sans: ["Roboto", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
} satisfies Config;
