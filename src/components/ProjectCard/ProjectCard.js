import React from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'

const StyledCard = styled.div`
  max-width: 310px;
  display: flex;
  flex-direction: column;
  margin: 12px;
  border: 1.5px solid #d5d6da;
  border-radius: 6px;
`
const StyledImage = styled(Img)`
  height: 200px;
  width: 300px;
  border-radius: 6px 6px 0 0;
  border-bottom: 1.5px solid #d5d6da;
`

const StyledTitle = styled.h1`
  font-size: 20px;
  padding-left: 10px;
  margin: 18px 0 0 0;
  color: #2d3047;
  text-transform: uppercase;
`
const StyledInfo = styled.div`
  padding: 0 10px 0 10px;
  display: flex;
  justify-content: space-between;
`
const StyledTag = styled.p`
  color: #15cc79;
`
const StyledDescription = styled.p`
  color: #d5d6da;
`

const StyledLink = styled.a`
  text-decoration: none;
  background: none;
`

const ProjectCard = props => {
  const project = props.project.node
  const picture = project.picture.sizes
  return (
    <StyledLink href={project.url} target="_blank">
      <StyledCard>
        <StyledImage sizes={picture} />
        <StyledTitle>{project.title}</StyledTitle>
        <StyledInfo>
          <StyledTag>{project.tag}</StyledTag>
          <StyledDescription>{project.description}</StyledDescription>
        </StyledInfo>
      </StyledCard>
    </StyledLink>
  )
}

export default ProjectCard
