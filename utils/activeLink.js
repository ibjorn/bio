import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PropTypes from 'prop-types'
import React, { Children } from 'react'

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const pathname = usePathname()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    pathname === props.href || pathname === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link {...props} legacyBehavior>
      {React.cloneElement(child, {
        className: className || null
      })}
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired
}

export default ActiveLink
