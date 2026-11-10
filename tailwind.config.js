/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        marca: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          600: '#0d9488',
          700: '#0f766e',
          900: '#134e4a'
        }
      }
    }
  },
  plugins: []
};
