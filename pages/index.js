import HomeLayout from '../components/layouts/homeLayout'
import Layout from '../components/layouts/layout'
import Meta from '../components/meta'

export default function Home() {
  return (
    <>
      <h3>Currently playing:</h3>
      <p>Next.js, Headless WordPress, Laravel</p>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <Meta url='/' />
      <Layout home>
        <HomeLayout>{page}</HomeLayout>
      </Layout>
    </>
  )
}
