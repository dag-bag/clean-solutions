/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          1: "#95D074",
        },
        blue: {
          1: "#518ca4",
        },
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('https://cleansolutions.tech/wp-content/uploads/2022/09/2nd-section-1.png')",
      },
    },
  },
  plugins: [],
};
