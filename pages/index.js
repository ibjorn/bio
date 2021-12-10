import HomeLayout from '../components/layouts/homeLayout'
import Meta from '../components/meta'

export default function Home() {
 
  return (
    <>
      <h2>Web Developer Playground</h2>
      <p>
        Messing about with JavaScript and PHP frameworks, both frontend and
        backend.
      </p>
      <h3>Current Playing with:</h3>
      <p>Next.js, Laravel &amp; Headless WordPress</p>
    </>
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
