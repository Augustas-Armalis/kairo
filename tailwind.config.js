/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'system-ui', 'sans-serif'],
      },
      colors: {
        black: '#0C0C0D',
        bg: '#19191A',
        hover: '#1E1E1F',
        darkalt: '#4B4B4E',
        alt: '#A2A2A6',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
