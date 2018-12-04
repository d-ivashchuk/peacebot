import React from 'react';
import styled from 'styled-components'

import NewProject from '../NewProject/NewProject'
import Info from '../Info/Info'

const StyledHero = styled.div`
display:flex;
flex-wrap:wrap;
`

const Hero = () => {
    return (
        <StyledHero>
            <Info />
            <NewProject />
        </StyledHero>



    )
}

export default Hero;