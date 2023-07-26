import Head from 'next/head'
import { siteMeta } from '../config'

function Meta({
  title = siteMeta.siteName,
  description = siteMeta.siteDescription,
  keywords = siteMeta.siteKeywords,
  image,
  slug,
  blogPost = false,
  indexPage = false
}) {
  const canonicalUrl = `${siteMeta.siteUrl}/${
    slug && slug !== '/' ? slug + '/' : ''
  }`
  const pagetitle =
    title === siteMeta.siteName
      ? siteMeta.siteName
      : title + ' | ' + siteMeta.siteName
  const pageType = blogPost ? 'article' : indexPage ? 'blog' : 'website'
  const ogImage = image
    ? siteMeta.siteUrl + image
    : siteMeta.siteUrl + siteMeta.siteImage
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <title>{pagetitle}</title>

      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      <link rel='icon' href={siteMeta.siteFavicon || ''} />

      <link rel='canonical' href={canonicalUrl} />

      <meta property='og:type' content={pageType} />
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:locale' content='en_ZA' />
      <meta property='og:site_name' content={siteMeta.siteName} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={siteMeta.social.twitterSite} />
      <meta name='twitter:creator' content={siteMeta.social.twitterAuthor} />
    </Head>
  )
}

export default Meta
