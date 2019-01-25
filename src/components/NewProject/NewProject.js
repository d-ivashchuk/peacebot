import React, { Component } from 'react'
import styled from 'styled-components'

import Button from '../../ui/Button/Button'

const StyledNewProject = styled.div`
  width: 500px;
  min-height: 400px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  button {
    margin: auto;
  }
  @media (max-width: 500px) {
    min-height:250px;
  }
`
const StyledList = styled.ul`
  position: relative;
  margin: auto;
  left: -11px;
  padding-left: 0;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  @media (min-width: 1015px) {
    transition: all 0.3s;
    left: -40px;
  }
  @media (max-width: 500px) {
    transition: all 0.3s;
    margin-top: 0;
    margin-bottom: 0;
  }

  li {
    color: #2d3047;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.67;
    letter-spacing: normal;
    margin-bottom: 10px;

    @media (min-width: 1015px) {
      font-size: 19px;
    }
    @media (max-width: 500px) {
      font-size: 16px;
      text-align: center;
    }
  }
`

class NewProject extends Component {
  render() {
    const listItems = [
      'Logotypes / Brand Identity',
      'UI Design / Social Media Posts',
      'Illustrations / Icons',
    ]

    const list = listItems.map(item => {
      return <li key={item}>{item}</li>
    })
    return (
      <StyledNewProject>
        <StyledList>{list}</StyledList>
        <Button />
      </StyledNewProject>
    )
  }
}

export default NewProject
