import React from 'react'

import { graphql } from 'gatsby'

import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'

const IndexPage = (props) => {

  return (
    <>
      <Hero />
      <Projects projects={props.data.allFile.edges} />
    </>
  )

}

export default IndexPage

export const query = graphql`
query{
  allFile(filter: {sourceInstanceName: {eq: "project-photos"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
        }
      }
    }
  }
}

`
