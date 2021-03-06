import React from 'react'
import styled from 'styled-components'

import Arrow from '../../assets/arrow.svg'

import ProjectCard from '../ProjectCard/ProjectCard'

const StyledProjects = styled.div`
  position: relative;
  max-width: 1000px;
  border-radius: 8px;
  margin: 30px auto 120px auto;
`
const ProjectsHeader = styled.div`
  position: relative;
  display: flex;
  max-width: 1000px;
  align-items: center;
  justify-content: space-between;
  margin: 30px 50px 20px 50px;
  font-size: 20px;
  color: #2d3047;
  @media (max-width: 500px) {
    h3 {
      font-size: 20px;
    }
  }
`
const StyledArrow = styled(Arrow)`
  opacity: 0.8;
  transition: all 0.3s;
  /* &:hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(1.2);
    transition: all 0.3s;
  } */
`
const ProjectsBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1015px) {
    justify-content: center;
  }
  a {
    &:first-child {
      div {
        margin-left: 0;
      }
    }
    &:last-child {
      div {
        margin-right: 0;
      }
    }
  }
`

const Projects = props => {
  const allCards = props.projects.map(project => (
    <ProjectCard key={project.node.id} project={project} />
  ))

  return (
    <StyledProjects>
      <ProjectsHeader>
        <h3>Latest projects</h3>
        <StyledArrow />
      </ProjectsHeader>
      <ProjectsBody>{allCards}</ProjectsBody>
    </StyledProjects>
  )
}

export default Projects
