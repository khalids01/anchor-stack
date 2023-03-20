/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#377DFF',
        light: '#f0f5fa',
        border: '#edeff1',
        muted: '#b0b7c3',
        success: '#38cb89',
        danger: '#ff5630',
        secondary: '#8a94a6',
        dark: '#4e5d78',
        lightest: '#fafbfc',
        darkest: '#333333'
      },
    },

    fontFamily: "Inter, sans-serif"

  },
  plugins: [],
}