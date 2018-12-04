import React from 'react';

import styled from 'styled-components'


const StyledInfoWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const StyledInfo = styled.h1`
max-width:500px;
font-size:40px;
color:white;
margin:auto;
`
const StyledSocial = styled.div`

`

const Info = () => {
    return (
        <StyledInfoWrapper>
            <StyledInfo>Visuals with minimalist approach</StyledInfo>
            <StyledSocial>123</StyledSocial>
        </StyledInfoWrapper>
    );
}

export default Info;