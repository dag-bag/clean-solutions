/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./quiz/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#95D074",

          secondary: "#518ca4",

          accent: "#8B5801",

          neutral: "#FFFFFF",

          "base-100": "#FFFFFF",

          info: "#26C9ED",

          success: "#1CE397",

          warning: "#CB8B15",

          error: "#F3535B",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        green: {
          DEFAULT: "#81d267",
        },
        gray: {
          600: "#606060",
        },
        red: "#ed6463",
      },
      spacing: {
        13: "3.25rem",
      },
      boxShadow: {
        primary: "0px 9.9px 21.6px rgba(136, 202, 41, 0.41)",
      },
      // colors: {
      //   smoke: 'whitesmoke',
      //   green: {
      //     1: "#95D074",
      //   },
      //   blue: {
      //     1: "#518ca4",
      //   },
      // },
      // backgroundImage: {
      //   "hero-pattern":
      //     "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('https://cleansolutions.tech/wp-content/uploads/2022/09/2nd-section-1.png')",
      // },
      // fontFamily: {
      //   sans: ['Jost', ...fontFamily.sans],
      //   head: ['Libre Baskerville', ...fontFamily.sans]
      // }
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      // strategy: 'class', // only generate classes
    }),
    require("@tailwindcss/typography"),
  ],
};
