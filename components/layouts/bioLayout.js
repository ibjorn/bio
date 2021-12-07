// import Image from 'next/image'
// import homeCoverPic from '../../public/images/background/lounge.jpg'
import {
  bioLayout,
  container,
  textOverlayContainer
} from './bioLayout.module.scss'

const HomeLayout = ({ children }) => {
  return (
    <section className={bioLayout}>
      <div className={container}>
        {/* <div className={imgWrap}>
          <Image
            src={homeCoverPic}
            alt='Do not forget to pay attention to the moments in-between.'
            priority
            layout='fill'
            objectFit='cover'
            quality={80}
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL='data:...' // automatically provided
            // blurDataURL='/images/placeholder.png'
            placeholder='blur' // Optional blur-up while loading
          />
        </div> */}
        <div className={textOverlayContainer}>{children}</div>
      </div>
    </section>
  )
}

export default HomeLayout
