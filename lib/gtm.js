export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export const pageview = url => {
  if (process.env.NODE_ENV == 'development') {
    console.log('Development')
    console.log('GTag fired!')
    console.log('GTM ID is: ', GTM_ID)
  } else {
    if (typeof window !== 'undefined') {
      window.dataLayer.push({
        event: 'pageview',
        page: url
      })
    }
  }
}
