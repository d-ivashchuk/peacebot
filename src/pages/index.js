import React from 'react'

import { graphql } from 'gatsby'

// import x from '../assets/x.jpg'
// import y from '../assets/y.jpg'
// import z from '../assets/z.jpg'

import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'

const IndexPage = (props) => {
  const contentfulData = props.data.allContentfulProject.edges
  return (
    <>
      <Hero />
      <Projects projects={contentfulData} />
    </>
  )

}

export default IndexPage

export const query = graphql`
query{
  allContentfulProject {
    edges {
      node {
        title
        description
        id
        dateOfPublish
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
