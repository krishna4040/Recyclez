/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      tiltNeon: ["Tilt Neon", "sans-serif"],
      pacifico: ['Pacifico', "cursive"],
    },
    extend: {},
  },
  plugins: [require("@sira-ui/tailwind")],
};
