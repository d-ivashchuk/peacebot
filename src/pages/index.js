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
      'data.site.siteMetadata.siteDescription'
    )
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
            // { name: 'og:image', content: 'summary_large_image' },
            // { name: 'twitter:card', content: 'summary_large_image' },
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
    site {
      siteMetadata {
        title
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
