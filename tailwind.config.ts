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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'burnt-sienna': {
          DEFAULT: '#EB7547',
          "500": "#EB7547",
          "600": "#FF5E2B",
        },
        'prussian-blue': {
          DEFAULT: '#023047',
        },
        'link': {
          DEFAULT: '#0C5DFF',
        },
        success: "#499F68",
        warning: "#DD5147",
      },
      textColor: {
        'primary': '#040921',
        'secondary': "#04092160",
        'disabled': "#04092132",
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