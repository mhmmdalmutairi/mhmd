import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        gold: {
          50:  "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
        brand: {
          gold:   "#C9A227",
          dark:   "#0A0A0B",
          darker: "#050506",
          card:   "#111113",
          border: "#1f1f23",
          muted:  "#3a3a3f",
          text:   "#e4e4e7",
          subtle: "#71717a",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow":       "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(201,162,39,0.15), transparent)",
        "section-glow":    "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(201,162,39,0.08), transparent)",
      },
      animation: {
        "fade-up":        "fadeUp 0.6s ease-out forwards",
        "fade-in":        "fadeIn 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "float":          "float 6s ease-in-out infinite",
        "pulse-slow":     "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow":      "spin 20s linear infinite",
        "shimmer":        "shimmer 2s linear infinite",
        "border-spin":    "borderSpin 4s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%":   { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        borderSpin: {
          "0%":   { "--border-angle": "0deg" },
          "100%": { "--border-angle": "360deg" },
        },
      },
      boxShadow: {
        "gold-sm":  "0 0 15px rgba(201,162,39,0.15)",
        "gold-md":  "0 0 30px rgba(201,162,39,0.2)",
        "gold-lg":  "0 0 60px rgba(201,162,39,0.25)",
        "card":     "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
