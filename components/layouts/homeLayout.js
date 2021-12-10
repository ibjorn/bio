import Image from 'next/image'
import homeCoverPic from '../../public/images/background/lounge.jpg'
import Footer from '../footer/footer'
import Header from '../header/header'
import {
  container,
  imgWrap,
  main,
  section,
  textOverlayContainer,
  wrapper
} from './homeLayout.module.scss'

const HomeLayout = ({ children }) => {
  return (
    <div className={wrapper}>
      <Header home overlay />
      <main className={main}>
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
      </main>
      <Footer home />
    </div>
  )
}

export default HomeLayout
