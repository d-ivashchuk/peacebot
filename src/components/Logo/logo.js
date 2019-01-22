import React from 'react'
import LogoText from '../../assets/textLogo.svg'
import Logo from '../../assets/logo.svg'
import styled from 'styled-components'

const StyledLogoText = styled(LogoText)`
  padding: 10px;
  width: 14em;
  height:10em;
  z-index: 1000;
  
  transition: all 0.3s ease-in-out;
    @media (max-width: 500px) {
    width:15em;
    display:none;
   
    }
`
const StyledLogo = styled(Logo)`
  padding: 10px;
  width: 14em;
  height:10em;
  z-index: 1000;
  
  transition: all 0.3s ease-in-out;
    @media (min-width: 500px) {
    width:15em;
    display:none;
   
    }
`


const logo = () => {
    return (
        <>
            <StyledLogo></StyledLogo>
            <StyledLogoText></StyledLogoText>
        </>
    )
}

export default logo
