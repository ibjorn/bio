const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    // Use *.tsx if using TypeScript
    './components/alert/**/*.js',
    './components/backHomeLink/**/*.js',
    './components/footer/**/*.js',
    './components/header/**/*.js',
    './components/icons/**/*.js',
    './components/layouts/**/*.js',
    './components/nav/**/*.js',
    './components/offCanvas/**/*.js',
    './components/pageTitle/**/*.js',
    './components/social/**/*.js',
    './components/**/*.js',
    './pages/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
      fontFamily: {
        sans: ['PT Sans', 'Montserrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#0891B2',
        secondary: '#0EA5E9',
        muted: '#737373',
        success: '#4ADE80'
      },
      letterSpacing: {
        widerthan: '0.175em',
        tightest: '-.04em'
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
  plugins: [require('@tailwindcss/typography')]
}
