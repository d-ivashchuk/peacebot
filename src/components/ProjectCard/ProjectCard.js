import React from 'react'
import styled from 'styled-components'


import Img from 'gatsby-image'

const StyledCard = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin:12px;
`
const StyledImage = styled(Img)``

const StyledTitle = styled.h1`
margin:18px 0 0 0;
color:#2d3047;
text-transform:uppercase;
`

const StyledExcerpt = styled.p`
color:#afafb3
`

const ProjectCard = (props) => {
  const image = props.project.node.childImageSharp.fluid

  console.log(props.project.node)
  return (
    <StyledCard>
      <StyledImage fluid={image} />
      <StyledTitle>Stimpo</StyledTitle>
      <StyledExcerpt>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        laboriosam.
      </StyledExcerpt>
    </StyledCard>
  )
}

export default ProjectCard


