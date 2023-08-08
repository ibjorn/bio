import BioPage from '../../components/page/bioPage'
import { openGraphImage } from '../../config'
import { getPageData } from '../../lib/pages'

export async function generateMetadata() {
  const pageData = await getPageData('bio')

  return {
    title: pageData?.title,
    description: pageData?.description,
    keywords: pageData?.keywords,
    openGraph: {
      ...openGraphImage,
      title: pageData?.title,
      description: pageData?.description
    }
  }
}

export default async function Bio() {
  const pageData = await getPageData('bio')
  return <BioPage title={pageData?.title} body={pageData?.contentHtml} />
}
