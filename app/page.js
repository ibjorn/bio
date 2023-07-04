import HomeLayout from '../components/layouts/homeLayout'
import HomePage from '../components/page/homePage'

export const metadata = {
  slug: '/'
}

export default function Home() {
  return (
    <>
      <HomeLayout>
        <HomePage />
      </HomeLayout>
    </>
  )
}
