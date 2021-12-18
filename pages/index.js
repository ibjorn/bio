import HomeLayout from '../components/layouts/homeLayout'
import Meta from '../components/meta'
import HomePage from '../components/page/homePage'

export default function Home() {
  return <HomePage />
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <Meta slug='/' />
      <HomeLayout>{page}</HomeLayout>
    </>
  )
}
