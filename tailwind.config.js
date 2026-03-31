/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      colors: {
        stone: {
          50: '#faf9f7',
          100: '#f3f1ed',
          150: '#eae7e0',
          800: '#3d3a36',
          900: '#2a2825',
          950: '#1a1917',
        },
      },
    },
  },
  plugins: [],
};
