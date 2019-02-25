import React from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'

const StyledCard = styled.div`
  max-width: 330px;
  display: flex;
  flex-direction: column;
  border: 1.5px solid #d5d6da;
  border-radius: 6px;
  @media (max-width: 1015px) {
    margin: 15px !important;
  }
`
const StyledImage = styled(Img)`
  height: 200px;
  width: 300px;
  border-radius: 4.5px 4.5px 0 0;
  border-bottom: 1.5px solid #d5d6da;
`

const StyledTitle = styled.h1`
  font-size: 20px;
  padding-left: 10px;
  margin: 18px 0 0 0;
  color: #2d3047;
  text-transform: uppercase;
`
const StyledInfoWrapper = styled.div`
  background-color: white;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 6px 6px;
`
const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledTag = styled.p`
  color: #15cc79;
  padding-left: 10px;
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
        <StyledInfoWrapper>
          <StyledTitle>{project.title}</StyledTitle>
          <StyledInfo>
            <StyledTag>{project.tag}</StyledTag>
            <StyledDescription>{project.description}</StyledDescription>
          </StyledInfo>
        </StyledInfoWrapper>
      </StyledCard>
    </StyledLink>
  )
}

export default ProjectCard
