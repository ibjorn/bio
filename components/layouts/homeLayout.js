import Image from "next/image"
import homeCoverPic from '../../public/images/background/lounge.jpg'
import Layout from './layout'
import {
  container,
  imgWrap,
  section,
  textOverlayContainer
} from './layout.module.scss'

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
              quality={80}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          </div>
          <div className={textOverlayContainer}>{children}</div>
        </div>
      </section>
    </Layout>
  );
}

export default HomeLayout
