/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables the dark mode toggle
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Your custom brand colors
        primary: "#006633",
        "primary-dark": "#004D2A",
        accent: "#2563EB",
        navy: "#0D1B3E",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "marquee-infinite": "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Moves half way (for duplicated lists)
        },
      },
    },
  },
  plugins: [],
};
