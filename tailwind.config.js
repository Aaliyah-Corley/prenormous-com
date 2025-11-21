/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdfbf7',
          100: '#fbf7ef',
          200: '#f6eddb',
          300: '#efe0c1',
          400: '#e5cd9f',
          500: '#dbb47d',
          600: '#cf9b5f',
          700: '#ad7d4b',
          800: '#8c6542',
          900: '#715339',
          950: '#3d2b1d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
