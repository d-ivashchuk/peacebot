import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 360px;
  height: 80px;
  border-radius: 8px;
  font-size: 30px;
  background-color: #15cc79;
  color: white;
  cursor: pointer;
  box-shadow: #15cc79 0px 0px 0px 0px;
  transition: all 0.3s;
  &:hover {
    &:hover {
      transform: translateY(-2px);
      transition: all 0.3s;
      box-shadow: rgba(21, 204, 121, 0.68) 1px 4px 16px;
    }
  }
`
const Button = () => {
  return (
    <StyledButton onClick={() => alert('new project')}>
      New Project
    </StyledButton>
  )
}

export default Button
