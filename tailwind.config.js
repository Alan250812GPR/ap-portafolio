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
          'bg': '#111827',
          'card': '#1F2937',
          'border': '#374151',
          'text-primary': '#F9FAFB',
          'text-secondary': '#9CA3AF',
        },
        accent: {
          'primary': '#3B82F6',
          'hover': '#2563EB',
        }
      }
    },
  },
  plugins: [],
}
