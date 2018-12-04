import React, { Component } from 'react'
import styled from 'styled-components'

import Button from '../../ui/Button/Button'

const StyledNewProject = styled.div`
  padding: 25px;
  width: 500px;
  min-height: 400px;
  border-radius: 8px;
  background-color: #2d3047;
  display: flex;
  flex-direction: column;
  button {
    margin: auto;
  }
`
const StyledList = styled.ul`
  padding: 20px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: auto;
  li {
    color: white;
    font-size: 24px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.67;
    letter-spacing: normal;
    margin-bottom: 10px;
  }
`

class NewProject extends Component {
  render() {
    const listItems = [
      'Logotypes',
      'Brand Identity',
      'Design Audit',
      'Social Media Posts',
      'Illustrations',
      'Icons',
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
