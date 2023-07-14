/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fIU 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fI 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fIU: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },
        fI: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },
      },
    },
  },
  plugins: [],
}
