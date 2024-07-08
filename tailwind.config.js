/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        small: "6px",
        medium: "10px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#DB4444",
        secondaryWhite: "#FAFAFA",
        secondaryGreen: "#00FF66",
        footerCol: "#000000",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
