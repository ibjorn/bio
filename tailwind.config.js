const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Jost', 'Montserrat', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1E293B',
      white: '#ffffff',
      gray: colors.trueGray,
      blue: colors.sky,
      cyan: colors.cyan,
      green: colors.green
    },
    extend: {
      colors: {
        primary: '#0891B2',
        secondary: '#0EA5E9',
        muted: '#737373',
        success: '#4ADE80'
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100'
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 1
          },
          '50%': {
            opacity: 0.8
          }
        }
      },
      animation: {
        pulse: 'pulse 1500ms ease-in-out 1 alternate'
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover']
    }
  },
  plugins: []
}
