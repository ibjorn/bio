import Image from 'next/image'
import homeCoverPic from '../../public/images/background/lounge.jpg'
// import {
//   container,
//   imgWrap,
//   section,
//   textOverlayContainer
// } from './layout.module.scss'

const HomeLayout = ({ children }) => {
  return (
    <section className='section'>
      <div className='imgWrap'>
        <Image
          src={homeCoverPic}
          alt='In-between moments'
          priority
          quality={90}
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className='textOverlayContainer'>{children}</div>
    </section>
  )
}

export default HomeLayout
