import Meta from '../../components/meta'
import BioPage from '../../components/page/bioPage'
import { getPageData } from '../../lib/pages'

export default async function Bio() {
  const pageData = await getPageData('bio')
  return (
    <>
      <Meta
        title={pageData?.title}
        description={pageData?.description}
        keywords={pageData?.keywords}
        slug={pageData?.slug}
      />
      <BioPage title={pageData?.title} body={pageData?.contentHtml} />
    </>
  )
}
