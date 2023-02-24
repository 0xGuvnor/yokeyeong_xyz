/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#5e50f4",
          secondary: "#b082d8",
          accent: "#fcc5bd",
          neutral: "#2C2338",
          "base-100": "#F7F7F7",
          info: "#79BDE2",
          success: "#5AE2B2",
          warning: "#F8C43F",
          error: "#E23C63",
        },
      },
      {
        dark: {
          primary: "#fcc8ae",
          secondary: "#f26d90",
          accent: "#bde861",
          neutral: "#14171F",
          "base-100": "#34425B",
          info: "#2486F0",
          success: "#6FEBD1",
          warning: "#ECB636",
          error: "#F84474",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
