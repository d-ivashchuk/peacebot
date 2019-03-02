import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  max-width: 500px;
  margin: auto;
  text-align: center;
  margin-bottom: 20px;
  opacity: 0.5;
  @media (min-height: 1200px) and (min-width: 1000px) {
    margin-top: 250px;
    transition: all 0.3s;
  }
`

const Emoji = styled.span`
  filter: hue-rotate(140deg);
`

const Footer = () => (
  <StyledFooter>
    2019 © With{' '}
    <Emoji>
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </Emoji>{' '}
    Peacebot
  </StyledFooter>
)
export default Footer
