import React from 'react'
import styled, { keyframes } from 'styled-components'

const fx = keyframes`
60% {
            transform: translateX(-100%) rotate(45deg);
  }
  100% {
            transform: translateX(100%) rotate(45deg);
  }
`
const StyledButton = styled.button`
  position: relative;
  top: 31.9px;
  width: 500px;
  height: 78px;
  border: 1.5px solid #15cc79;
  border-radius: 0 6px 6px 0;
  font-size: 30px;
  color: white;
  background-color: #15cc79;
  cursor: pointer;
  box-shadow: #15cc79 0px 0px 0px 0px;
  transition: all 0.3s;
  display: inline-block;
  overflow: hidden;
  &:hover {
    background-color: white;
    color: #15cc79;
  }
  @media (max-width: 1015px) {
    margin-top: 16px !important;
    transition: all 0.3s;
    font-size: 22px;
    width: 300px;
    height: 70px;
    border-radius: 6px;
  }
  @media (max-width: 500px) {
    margin-top: 10px !important;
    transition: all 0.3s;
    font-size: 22px;
    width: 250px;
    height: 70px;
  }
`

const ButtonMask = styled.span`
  display: block;
  position: absolute;
  color:green;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(239, 244, 252,0.5);
  transform: translateX(-100%) rotate(45deg);
  transition: all 0.3s;
  animation: ${fx} 5s ease-out infinite;
  ${StyledButton}:hover & { 
    animation:none;
}
  }
  }
`
const Button = ({ clicked }) => {
  return (
    <StyledButton onClick={clicked}>
      <ButtonMask />
      Start Project
    </StyledButton>
  )
}

export default Button
