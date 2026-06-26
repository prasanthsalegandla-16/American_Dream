import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--color-black)",
        charcoal: "var(--color-charcoal)",
        gold: "var(--color-gold)",
        "gold-light": "var(--color-gold-light)",
        white: "var(--color-white)",
        accent: "var(--color-accent)"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"]
      },
      boxShadow: {
        gold: "0 24px 80px rgba(201, 168, 76, 0.18)",
        deck: "0 28px 90px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "gold-grain":
          "radial-gradient(circle at 50% 20%, rgba(201,168,76,0.16), transparent 34%), linear-gradient(140deg, #111214 0%, #080808 62%, #1A1A2E 100%)"
      }
    }
  },
  plugins: []
};

export default config;
