/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('./src/images/loginBGoverlay.jpg')",
      },
    },
    colors: {
      deepBlue: "#242a37",
      overlayColor: "#091E3F",
    },
  },
  plugins: [],
};
