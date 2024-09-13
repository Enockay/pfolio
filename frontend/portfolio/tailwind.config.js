/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',          // Include index.html
    './src/**/*.{js,ts,jsx,tsx}',  // Include all files in src folder
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
        slideIn: 'slideIn 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
