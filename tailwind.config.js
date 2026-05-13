/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6868ea',
        secondary: '#76b0f9',
        accent: '#FFBE0B',
        dark: {
          bg: '#000000',
          fg: '#6868ea',
          alt: '#ffffff'
        },
        light: {
          bg: '#ffffff',
          fg: '#6868ea',
          alt: '#76b0f9'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive']
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        'custom-dark': 'rgba(255, 255, 255, 0.16) 0px 10px 36px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}