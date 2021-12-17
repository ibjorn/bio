import HomeLayout from '../components/layouts/homeLayout'
import Meta from '../components/meta'
import HomePage from '../components/page/homePage'

export default function Home() {
  return (
    <HomePage>
      <h2>Web Developer Playground</h2>
      <p>
        Messing about with JavaScript and PHP frameworks, both frontend and
        backend.
      </p>
      <h3>Current Playing with:</h3>
      <p>Next.js, Laravel &amp; Headless WordPress</p>
    </HomePage>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <Meta slug='/' />
      <HomeLayout>{page}</HomeLayout>
    </>
  )
}
