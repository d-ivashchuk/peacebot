import React from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'

const StyledCard = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
`
const StyledImage = styled(Img)``

const StyledTitle = styled.h1``

const StyledExcertp = styled.p``

const ProjectCard = () => {
  return (
    <StyledCard>
      {/* <StyledImage /> */}
      <StyledTitle>123</StyledTitle>
      <StyledExcertp>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        laboriosam.
      </StyledExcertp>
    </StyledCard>
  )
}

export default ProjectCard
