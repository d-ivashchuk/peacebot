import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  max-width: 500px;
  margin: auto;
  text-align: center;
  margin-bottom: 20px;
  color: #d5d6da;
  @media (min-height: 1200px) and (min-width: 1000px) {
    margin-top: 250px;
    transition: all 0.3s;
  }
`

const Emoji = styled.span`
  font-size: 20px;
  color: #15cc79;
  margin: 0 5px 0 5px;
`

const Footer = () => (
  <StyledFooter>
    2019<span style={{ margin: '0 5px 0 5px' }}>©</span>With
    <Emoji>♥</Emoji>
    Peacebot
  </StyledFooter>
)
export default Footer
