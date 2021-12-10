import BioLayout from '../components/layouts/bioLayout'
import Meta from '../components/meta'
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
  return (
    <article>
      <h1>{pageData?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData?.contentHtml }} />
    </article>
  )
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
