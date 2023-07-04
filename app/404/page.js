import BlogLayout from '../../components/layouts/blogLayout'
import Meta from '../../components/meta'
import FourOhFour from '../../components/page/fourOhFour'

export default function Custom404() {
  return (
    <BlogLayout>
      <Meta title='404 - Not found' />
      <FourOhFour />
    </BlogLayout>
  )
}
