// const round = num =>
//   num
//     .toFixed(7)
//     .replace(/(\.[0-9]+?)0+$/, '$1')
//     .replace(/\.0$/, '')
// const rem = px => `${round(px / 16)}rem`
// const em = (px, base) => `${round(px / base)}em`

module.exports = {
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: [
            {
              color: theme('colors.white'),
              h1: {
                fontWeight: '200',
                letterSpacing: '.04em',
                fontSize: '4.5rem',
                lineHeight: '1',
                marginBottom: '2rem'
              },
              h2: {
                fontWeight: '200',
                letterSpacing: '0.025em',
                fontSize: '3rem',
                lineHeight: '1',
                a: {
                  fontWeight: '200'
                }
              },
              h3: {
                fontWeight: '400',
                letterSpacing: '0.025em',
                fontSize: '2.25rem',
                lineHeight: '2.5rem'
              },
              h4: {
                fontWeight: '200',
                letterSpacing: '0.025em',
                fontSize: '1.875rem',
                lineHeight: '2.25rem'
              },
              h5: {
                fontWeight: '200',
                letterSpacing: '0.025em',
                fontSize: '1.5rem',
                lineHeight: '2rem'
              },
              h6: {
                fontWeight: '200',
                letterSpacing: '0.025em',
                fontSize: '1.25rem',
                lineHeight: '1.75rem'
              },
              small: {
                color: theme('colors.gray.500')
              },
              strong: {
                fontWeight: '700'
              }
            }
          ]
        }
      })
    }
  }
  // variants: {
  //   extend: {
  //     animation: ['hover', 'group-hover']
  //   }
  // },
  // plugins: [require('@tailwindcss/typography')]
}
