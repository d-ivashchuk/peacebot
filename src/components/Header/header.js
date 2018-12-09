import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Logo from '../Logo/logo'

const StyledHeader = styled.nav`
  max-width: 1500px;
  margin: auto;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <Logo />
    </Link>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
