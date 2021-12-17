import BioLayout from '../components/layouts/bioLayout'
import Meta from '../components/meta'
import BioPage from '../components/page/bioPage'
import { getPageData } from '../lib/pages'

export async function getStaticProps() {
  const pageData = await getPageData('bio')
  return {
    props: {
      pageData
    }
  }
}

export default function Bio({ pageData }) {
  return <BioPage title={pageData?.title} body={pageData?.contentHtml} />
}

Bio.getLayout = function getLayout(page) {
  return (
    <>
      <Meta
        title={page?.props?.pageData?.title}
        description={page?.props?.pageData?.description}
        keywords={page?.props?.pageData?.keywords}
        slug={page?.props?.pageData?.slug}
      />
      <BioLayout>{page}</BioLayout>
    </>
  )
}
