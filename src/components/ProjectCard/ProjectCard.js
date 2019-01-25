import React from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'

const StyledCard = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 12px;
`
const StyledImage = styled(Img)`
  max-height: 200px;
`

const StyledTitle = styled.h1`
  font-size: 28px;
  margin: 18px 0 0 0;
  color: #2d3047;
  text-transform: uppercase;
`

const StyledExcerpt = styled.p`
  color: #afafb3;
  font-size: 18px;
  font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.37;
    letter-spacing: normal;
`

const ProjectCard = props => {
  const project = props.project.node
  const picture = project.picture.sizes
  return (
    <StyledCard>
      <StyledImage sizes={picture} />
      <StyledTitle>{project.title}</StyledTitle>
      <StyledExcerpt>{project.description}</StyledExcerpt>
    </StyledCard>
  )
}

export default ProjectCard
