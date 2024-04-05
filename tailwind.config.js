/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blurry-white': '#F2F2F7',
        'separator': '#EBEDF3'
      }
    },
  },
  plugins: [],
};
