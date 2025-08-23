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
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      colors: {
        'black': '#0C0C0D',
        'bg': '#19191A',
        'hover': '#1E1E1F',
        'darkalt': '#4B4B4E',
        'alt': '#A2A2A6',
        'white': '#FFFFFF',
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^font-\[(\d+)\]$/,
      variants: ['hover', 'focus', 'active'],
    }
  ],
}
