import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Logo from './Logo/logo'

const Header = ({ siteTitle }) => (
  <div>
    <Link
      to="/"
    >
      <Logo />
    </Link>



  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
