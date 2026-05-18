/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
      },
      colors: {
        green: {
          50: '#f3faf4',
          100: '#e7f5e9',
          200: '#cce8d0',
          300: '#a3d1a8',
          400: '#75aa7b',
          500: '#467c4d',
          600: '#1a401f',
          700: '#153319',
          800: '#102613',
          900: '#0a1a0d',
        },
      },
    },
  },
  plugins: [],
}

