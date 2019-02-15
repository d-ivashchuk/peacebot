import React from 'react'
import styled from 'styled-components'

import NewProject from '../NewProject/NewProject'
import Info from '../Info/Info'

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Hero = ({ toggleForm }) => {
  return (
    <StyledHero>
      <Info />
      <NewProject toggleForm={toggleForm} />
    </StyledHero>
  )
}

export default Hero
