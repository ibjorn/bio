import Link from 'next/link'
import {
  darkColors,
  heading,
  lightColors,
  paragraph,
  spanCase
} from './title.module.scss'

const Title = ({ isHome, dark }) => {
  const title = isHome ? (
    <h1 className={`${heading} ${dark ? darkColors : lightColors}`}>
      Bj<span className={spanCase}>ö</span>rn Potgieter
    </h1>
  ) : (
    <h2 className={`${heading} ${dark ? darkColors : lightColors}`}>
      Bj<span className={spanCase}>ö</span>rn Potgieter
    </h2>
  )
  const tagline = 'Web Developer | Code Tinkerer | Bonsai Master'
  return (
    (<Link href='/'>

      {title}
      <p className={`${paragraph} ${dark ? darkColors : lightColors}`}>
        {tagline}
      </p>

    </Link>)
  );
}
export default Title
