import React from 'react'
import Logo from '../../assets/pb_logo.svg'
import styled from 'styled-components'

const StyledSVG = styled(Logo)`
  padding: 10px;
  width: 10em;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  /* .cls-1{
        opacity:0.8;
        transition:all 0.3s ease-in;
    }
    &:hover{
        .cls-1{
            transition:all 0.3s ease-in;
            opacity:1;
        }
    } */
`

const logo = () => {
  return <StyledSVG />
}

export default logo
