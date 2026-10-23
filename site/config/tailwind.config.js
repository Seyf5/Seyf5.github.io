/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        brand: "#5865f2",
        "brand-dim": "rgba(88,101,242,0.14)",
      },
      keyframes: {
        shimmer: {
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
