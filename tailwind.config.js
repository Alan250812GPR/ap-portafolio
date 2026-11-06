/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          'bg': '#13284A',
          'card': '#203A65',
          'border': '#38578A',
          'text-primary': '#F4F7FB',
          'text-secondary': '#A8C8EA',
        },
        accent: {
          'primary': '#FFC61A',
          'hover': '#E6AC00',
          'foreground': '#13284A',
        }
      }
    },
  },
  plugins: [],
}
