module.exports = {
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            h1: {
              fontFamily: theme('fontFamily.heading'),
              fontWeight: theme('fontWeight.extralight'),
              letterSpacing: theme('letterSpacing.tightest'),
              fontSize: theme('fontSize.6xl'),
              marginBottom: theme('spacing.8'),
              '@screen sm': {
                fontSize: theme('fontSize.7xl')
              }
            },
            h2: {
              fontFamily: theme('fontFamily.heading'),
              fontWeight: theme('fontWeight.normal'),
              letterSpacing: theme('letterSpacing.tight'),
              fontSize: theme('fontSize.4xl'),
              '@screen sm': {
                fontSize: theme('fontSize.5xl')
              }
            },
            h3: {
              fontFamily: theme('fontFamily.heading'),
              fontWeight: theme('fontWeight.normal'),
              letterSpacing: theme('letterSpacing.tight'),
              fontSize: theme('fontSize.4xl')
            },
            h4: {
              fontFamily: theme('fontFamily.heading'),
              fontWeight: theme('fontWeight.extralight'),
              letterSpacing: theme('letterSpacing.tight'),
              fontSize: theme('fontSize.3xl')
            },
            h5: {
              fontFamily: theme('fontFamily.heading'),
              fontWeight: theme('fontWeight.extralight'),
              letterSpacing: theme('letterSpacing.tight'),
              fontSize: theme('fontSize.2xl')
            },
            h6: {
              fontFamily: theme('fontFamily.heading'),
              fontWeight: theme('fontWeight.extralight'),
              letterSpacing: theme('letterSpacing.tight'),
              fontSize: theme('fontSize.xl')
            },
            small: {
              color: theme('colors.gray.500')
            }
          }
        }
      })
    }
  },
  // variants: {
  //   extend: {
  //     animation: ['hover', 'group-hover']
  //   }
  // },
  plugins: [require('@tailwindcss/typography')]
}
