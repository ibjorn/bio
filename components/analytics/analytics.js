'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { Suspense, useEffect } from 'react'
import { GTM_ID, pageview } from '../../lib/gtm'

export default function AnalyticsWrapper() {
  return (
    <Suspense fallback={<div>Loading Analytics...</div>}>
      <Analytics />
    </Suspense>
  )
}

function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      pageview(pathname)
    }
  }, [pathname, searchParams])

  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      <Script
        id='gtm-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
          `
        }}
      />
    </>
  )
}
