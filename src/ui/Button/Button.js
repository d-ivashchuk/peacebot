import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 360px;
  height: 80px;
  border-radius: 8px;
  font-size: 30px;
  background-color: #15cc79;
  color:white;
  cursor:pointer;

`
const Button = () => {
    return (
        <StyledButton onClick={() => console.log('clicked')}>New Project</StyledButton>
    );
}

export default Button;