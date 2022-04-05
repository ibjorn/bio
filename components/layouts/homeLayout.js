import Image from 'next/image'
import homeCoverPic from '../../public/images/background/lounge.jpg'
import {
  container,
  imgWrap,
  section,
  textOverlayContainer
} from './homeLayout.module.scss'
import Layout from './layout'

const HomeLayout = ({ children }) => {
  return (
    <Layout>
      <section className={section}>
        <div className={container}>
          <div className={imgWrap}>
            <Image
              src={homeCoverPic}
              alt='In-between moments'
              priority
              layout='fill'
              objectFit='cover'
              quality={80}
              // width={500} automatically provided
              // height={500} automatically provided
              // blurDataURL='data:...' // automatically provided
              // blurDataURL='/images/placeholder.png'
              // placeholder='blur' // Optional blur-up while loading
            />
          </div>
          <div className={textOverlayContainer}>{children}</div>
        </div>
      </section>
    </Layout>
  )
}

export default HomeLayout
