import Link from 'next/link'
import { spanCase } from './title.module.scss'

const Title = ({ isHome }) => {
  const title = isHome ? (
    <h1>
      Bj<span className={spanCase}>ö</span>rn Potgieter
    </h1>
  ) : (
    <h2>
      Bj<span className={spanCase}>ö</span>rn Potgieter
    </h2>
  )
  const tagline = 'Web Developer | Code Tinkerer | Bonsai Master'
  return (
    <Link href='/'>
      <a>
        {title}
        <p>{tagline}</p>
      </a>
    </Link>
  )
}
export default Title
