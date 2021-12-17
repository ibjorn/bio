module.exports = {
  presets: [
    require('./theme/preset-colors.js'),
    require('./theme/preset-typography')
  ],
  content: [
    // Use *.tsx if using TypeScript
    './components/**/*.js',
    './pages/**/*.js',
    './theme/**/*.js'
  ],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      heading: ['Oswald', 'sans-serif']
    },
    extend: {
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       h1: {
      //         fontFamily: 'font-heading',
      //         fontWeight: 'font-extralight',
      //         letterSpacing: 'tracking-tightest',
      //         fontSize: 'text-6xl',
      //         marginBottom: '2rem',
      //         '@screen sm': {
      //           fontSize: '4.5rem'
      //         }
      //       }
      // h2 {
      //   @apply font-heading font-extralight tracking-tight text-4xl sm:text-5xl;
      // }
      // h3 {
      //   @apply font-heading font-extralight tracking-tight text-4xl;
      // }
      // h4 {
      //   @apply font-heading font-extralight tracking-tight text-3xl;
      // }
      // h5 {
      //   @apply font-heading font-extralight tracking-tight text-2xl;
      // }
      // h6 {
      //   @apply font-heading font-extralight tracking-tight text-xl;
      // }
      // small {
      //   @apply text-gray-500;
      // }
      //     }
      //   }
      // },
      letterSpacing: {
        widerthan: '0.175em',
        widely: '0.077em',
        tightest: '-.04em',
        tightly: '-0.039em'
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
  }
  // plugins: [require('@tailwindcss/typography')]
  // variants: {
  //   extend: {
  //     animation: ['hover', 'group-hover']
  //   }
  // },
}
