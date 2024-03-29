export const server =
  process.env.NODE_ENV !== 'development' ? '' : 'https://bjorn.africa'

export const siteMeta = {
  siteName: 'Björn Potgieter, Web Developer',
  siteDescription:
    'Bio and testing ground for an obsessive, compulsive web developer.',
  siteKeywords:
    'web development, web programming, progressive web apps, javascript, php, laravel, reactjs, next.js, gatsbyjs, wordpress',
  siteUrl: server,
  siteFavicon: '/favicon-32x32-cyan.png',
  siteImage: server + '/images/bio-og-image.jpg',
  social: {
    twitter: 'https://twitter.com/blackalsatian',
    githubUrl: 'https://github.com/ibjorn',
    facebook: 'https://www.facebook.com/blackalsatian',
    instagram: 'https://instagram.com/theblackalsatian',
    linkedIn: 'https://www.linkedin.com/in/bjornpotgieter',
    spotify: 'https://open.spotify.com/user/du5ck7de83lgn7c0712f05xgs',
    twitterSite: '@bjornafrique',
    twitterAuthor: '@bjornafrique'
  }
}

export const siteConfig = {
  placeHolderImage: '/images/placeholder.png'
}

export const openGraphImage = { images: [`${server}/images/bio-og-image.jpg`] }

export const FALLBACK = 'blocking'
