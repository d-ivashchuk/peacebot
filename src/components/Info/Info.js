import React from 'react'
import styled from 'styled-components'

import SocialBlock from '../SocialBlock/SocialBlock'

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const StyledInfo = styled.div`
  max-width: 500px;
  padding-left: 30px;
  font-size: 50px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.23;
  letter-spacing: normal;
  color: #2d3047;
  transition: all 0.3s;
  @media (max-width: 1015px) {
    transition: all 0.3s;
    margin-top: 50px;
    text-align: center;
    font-size: 50px;
    padding-left: 0;
  }
`

const Info = () => {
  return (
    <StyledInfoWrapper>
      <StyledInfo>
        Visuals with minimalist <br />
        approach
      </StyledInfo>
      <SocialBlock />
    </StyledInfoWrapper>
  )
}

export default Info
