import type { Config } from "tailwindcss"

const config = {
  mode: "jit",
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'burnt-sienna': {
          DEFAULT: '#EB7547',
        },
        'prussian-blue': {
          DEFAULT: '#023047',
        },
        'link': {
          DEFAULT: '#0C5DFF',
        },
      },
      container: {
        center: true,
      },
      spacing: {
        18: "4.5rem",
        30: "7.5rem",
      },
      lineHeight: {
        12: "3rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config