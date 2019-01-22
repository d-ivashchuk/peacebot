import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  position: relative;
  top: 22px;
  width: 500px;
  height: 78px;
  border: 1.5px solid #15cc79;
  border-radius: 0 6px 6px 0;
  font-size: 30px;
  color: #15cc79;
  cursor: pointer;
  box-shadow: #15cc79 0px 0px 0px 0px;
  transition: all 0.3s;
  @media (max-width: 1015px) {
    transition: all 0.3s;
    font-size: 22px;
    width: 300px;
    height: 70px;
    border-radius: 6px;
  }
  @media (max-width: 500px) {
    transition: all 0.3s;
    font-size: 22px;
    width: 250px;
    height: 70px;
  }
`
const Button = () => {
  return (
    <StyledButton onClick={() => alert('new project')}>
      Start Project
    </StyledButton>
  )
}

export default Button
