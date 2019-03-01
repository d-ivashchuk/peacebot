import React from 'react'

import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import SubmissionForm from '../components/SubmissionForm/SubmissionForm'
import Backdrop from '../components/Backdrop/Backdrop'

class IndexPage extends React.Component {
  state = { isFormOpen: false }

  toggleForm = () => {
    window.scrollTo(0, 0)
    this.setState({ isFormOpen: !this.state.isFormOpen })
  }
  render() {
    const contentfulData = this.props.data.allContentfulProject.edges
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = get(
      this.props,
      'data.site.siteMetadata.description'
    )
    const cardPic = this.props.data.cardPic.childImageSharp.resize.src
    const siteUrl = `https://www.peacebot.pro`

    return (
      <>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            {
              name: 'google-site-verification',
              content: 'G8mlRoi3rF4Ld76FipN7GYOsKmP3Lhfv8TfOb_zUuIY',
            },
            { property: 'og:title', content: siteTitle },
            { property: 'og:description', content: siteDescription },
            { property: 'og:url', content: 'https://peacebot.pro' },
            { property: 'og:image', content: siteUrl + cardPic },
            { property: 'og:image:type', content: 'image/png' },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { name: 'twitter:card', content: 'summary_large_image' },
            {
              name: 'twitter:image',
              content: siteUrl + cardPic,
            },
            { name: 'twitter:site', content: '@peacebot_t' },
            { name: 'twitter:title', content: siteTitle },
          ]}
          title={`${siteTitle} `}
        />
        <Backdrop show={this.state.isFormOpen} />
        <SubmissionForm
          toggleForm={this.toggleForm}
          show={this.state.isFormOpen}
        />
        <Hero toggleForm={this.toggleForm} />
        <Projects projects={contentfulData} />
      </>
    )
  }
}

export default IndexPage

export const query = graphql`
  query {
    cardPic: file(absolutePath: { regex: "/preview.png/" }) {
      childImageSharp {
        resize(width: 1800) {
          src
          width
          height
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulProject {
      edges {
        node {
          title
          id
          dateOfPublish
          tag
          description
          url
          picture {
            sizes(maxWidth: 1280) {
              ...GatsbyContentfulSizes
            }
            id
          }
        }
      }
    }
  }
`
