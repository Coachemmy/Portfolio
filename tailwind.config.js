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
        hotpink: '#ec4899',
        violet: '#8b5cf6',
        mint: '#10b981',
        skyblue: '#0ea5e9',
        peach: '#fb923c',
        dark: {
          bg: '#0b0b1f',
          fg: '#6868ea',
          alt: '#ffffff'
        },
        light: {
          bg: '#fafbff',
          fg: '#6868ea',
          alt: '#76b0f9'
        },
        ink: {
          50: '#f7f8ff',
          100: '#eef0ff',
          200: '#dce0ff',
          300: '#bcc4ff',
          400: '#97a0ff',
          500: '#6868ea',
          600: '#534fc9',
          700: '#3f3ca3',
          800: '#2c2a76',
          900: '#1a1945',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        'custom-dark': 'rgba(255, 255, 255, 0.16) 0px 10px 36px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px',
        'juicy': '0 20px 60px -20px rgba(104, 104, 234, 0.35), 0 10px 25px -15px rgba(236, 72, 153, 0.25), 0 8px 10px -6px rgba(118, 176, 249, 0.2)',
        'card-hover': '0 30px 80px -25px rgba(104, 104, 234, 0.55), 0 15px 35px -20px rgba(236, 72, 153, 0.35)',
        'soft': '0 10px 30px -12px rgba(104, 104, 234, 0.25)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.6), 0 0 40px rgba(104,104,234,0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionTimingFunction: {
        'juicy': 'cubic-bezier(.22,.74,.28,.99)',
        'bouncy': 'cubic-bezier(.34,1.56,.64,1)',
      },
      animation: {
        'gradient-mesh': 'gradientMesh 18s ease infinite',
        'blob': 'blob 16s ease-in-out infinite',
        'aurora': 'aurora 14s ease-in-out infinite alternate',
        'glow-ring': 'glowRing 2.8s ease-out infinite',
        'neon': 'neonFlicker 5s infinite',
        'tilt-float': 'tiltFloat 7s ease-in-out infinite',
        'wiggle': 'wiggle 1.2s ease-in-out infinite',
        'spin-slow': 'spinSlow 22s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'pop-in': 'popIn 0.7s cubic-bezier(.34,1.56,.64,1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(.22,.74,.28,.99) both',
        'blur-in': 'blurIn 0.9s ease-out both',
      },
      backgroundImage: {
        'grid-dots': "radial-gradient(rgba(104,104,234,0.16) 1px, transparent 1px)",
        'brand-gradient': "linear-gradient(135deg, #6868ea 0%, #76b0f9 50%, #FFBE0B 100%)",
      },
      letterSpacing: {
        'tighter-2': '-0.04em',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
