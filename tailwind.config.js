/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nc-navy-950": "#050a30",
        "nc-navy-800": "#1b315b",
        "nc-slate-700": "#324149",
        "nc-gray-500": "#737373",
        "nc-gold-500": "#b08a4e",
        "nc-gold-300": "#d8bd8b",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Montserrat"', "Arial", "Helvetica", "sans-serif"],
        script: ['"Tangerine"', "cursive"],
      },
    },
  },
  plugins: [],
};
