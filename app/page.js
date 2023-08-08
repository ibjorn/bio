import HomeLayout from '../components/layouts/homeLayout'
import HomePage from '../components/page/homePage'
import { openGraphImage, siteMeta } from '../config'

export const metadata = {
  title: siteMeta.siteName,
  description: siteMeta.siteDescription,
  keywords: siteMeta.siteKeywords,
  openGraph: {
    ...openGraphImage,
    title: siteMeta.siteName,
    description: siteMeta.siteDescription
  }
}

export default function Home() {
  return (
    <HomeLayout>
      <HomePage />
    </HomeLayout>
  )
}
