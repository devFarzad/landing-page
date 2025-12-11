/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          light: '#A0522D',
          DEFAULT: '#8B4513',
          dark: '#654321',
        },
        green: {
          light: '#2E7D32',
          DEFAULT: '#228B22',
          dark: '#1B5E20',
        },
        beige: {
          DEFAULT: '#D2AE72',
        },
      },
    },
  },
  plugins: [],
}

