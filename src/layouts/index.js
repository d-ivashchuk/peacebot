import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './index.css'
import GlobalStyle from '../styles/global'

import styled from 'styled-components'

import Header from '../components/Header/header'
import Footer from '../components/Footer/Footer'

import pattern from '../assets/pattern.svg'

const Bg = styled(pattern)`
  position: fixed !important;
  opacity: 0.6;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -10;
`

const Body = styled.div`
  height: 100%;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Peacebot | Designs with minimalist approach ',
            },
            { name: 'keywords', content: 'design' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Bg />

        <Header siteTitle={data.site.siteMetadata.title} />
        <Body>{children}</Body>
        <Footer />
        <GlobalStyle />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
