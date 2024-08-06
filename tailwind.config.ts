import type { Config } from "tailwindcss";

const config = {
  mode: "jit",

  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "390px",
      md: "770px",
      lg: "1140px",
    },
    extend: {
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

      // shadcn-ui
      colors: {
        // custom
        "prussian-blue": {
          DEFAULT: "#023047",
        },
        'saffron': {
          DEFAULT: '#E9C46A'
        },
        'sandy-brown': {
          DEFAULT: '#F4A261'
        },
        'sea-green': {
          DEFAULT: '#40916C'
        },
        link: '#0C5DFF',
        success: '#499F68',
        warning: '#DD5147',
        text: {
          primary: '#040921',
          secondary: '#04092160',
          disabled: '#04092132',
          placeholder: '#B3B3B3',
        },
        border: '#04092132',
        primary: {
          DEFAULT: "#EB7547",
          foreground: "#FFFFFF",
        },

        // shadcn-ui
        background: "#F9F2E0",
        foreground: "#000000",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        disabled: "hsl(var(--disabled))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
} satisfies Config;

export default config;
