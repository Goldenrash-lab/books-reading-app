import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      mobile: "320px",
      tablet: "768px",
      desktop: "1280px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      deepBlue: "#242a37",
      overlayColor: "#091E3F",
    },
  },
  plugins: [],
};
