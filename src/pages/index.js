import React from 'react'

import { graphql } from 'gatsby'

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
    return (
      <>
        <Backdrop show={this.state.isFormOpen} />
        <SubmissionForm toggleForm={this.toggleForm} show={this.state.isFormOpen} />
        <Hero toggleForm={this.toggleForm} />
        <Projects projects={contentfulData} />
      </>
    )
  }

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
