import HomeLayout from '../components/layouts/homeLayout'
import Meta from '../components/meta'
import HomePage from '../components/page/homePage'

export default function Home() {
  return (
    <>
      <Meta slug='/' />
      <HomeLayout>
        <HomePage />
      </HomeLayout>
    </>
  )
}
