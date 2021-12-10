import Link from 'next/link'
import { externalLink } from './navLink.module.scss'

const NavLink = ({ link }) => {
  return (
    <>
      {link.isInternal ? (
        <Link href={link.path}>
          <a>{link.label}</a>
        </Link>
      ) : (
        <a
          href={link.path}
          title={link.altTitle}
          target='_blank'
          rel='noopener noreferrer'
          className={externalLink}
        >
          {link.label}
        </a>
      )}
    </>
  )
}

export default NavLink
