/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        display1: [
          "130px",
          { lineHeight: "150px", fontWeight: 600, letterSpacing: "-7.5px" },
        ],
        heading1: [
          "85px",
          { lineHeight: "90px", fontWeight: "600", letterSpacing: "-1px" },
        ],
        heading2: [
          "55px",
          { lineHeight: "60px", fontWeight: "600", letterSpacing: "-0.1px" },
        ],
        heading4: [
          "42px",
          { lineHeight: "46px", fontWeight: "600", letterSpacing: "-2px" },
        ],
        heading5: [
          "34px",
          { lineHeight: "40px", fontWeight: 400, letterSpacing: "-1px" },
        ],
        heading6: [
          "24px",
          { lineHeight: "34px", fontWeight: 400, letterSpacing: "-0.6px" },
        ],
        heading7: [
          "20px",
          { lineHeight: "28px", fontWeight: 400, letterSpacing: "-0.6px" },
        ],
      },
      maxWidth: {
        "8xl": "1440px",
      },
      colors: {
        brown: "#282828",
        brand: "#FFF0E3",
        orange: "#FEA75F",
        blueBlack: "#5F6980",
        cardBg: "#F9FAFB",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "FFF0E3",
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
          DEFAULT: "#FFF0E3",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
}
