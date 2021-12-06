import Link from 'next/link'

const NavLink = ({ link }) => {
  return (
    <Link href={link.path}>
      <a>{link.label}</a>
    </Link>
  )
}

export default NavLink
