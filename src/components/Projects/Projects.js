import React from 'react'
import styled from 'styled-components'

import Arrow from '../../assets/arrow.svg'

import ProjectCard from '../ProjectCard/ProjectCard'

const StyledProjects = styled.div`
  position: relative;
  max-width: 1000px;
  border-radius: 8px;
  background-color: #ffffff;
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
  @media (max-width: 500px) {
    h3 {
      font-size: 20px;
    }
  }
`
const StyledArrow = styled(Arrow)`
  opacity: 0.8;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(1.2);
    transition: all 0.3s;
  }
`
const ProjectsBody = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Projects = props => {
  const allCards = props.projects.map(project => (
    <div>
      <ProjectCard key={project.node.id} project={project} />
    </div>
  ))

  return (
    <StyledProjects>
      <ProjectsHeader>
        <h3>Three latest projects</h3>
        <StyledArrow />
      </ProjectsHeader>
      <ProjectsBody>{allCards}</ProjectsBody>
    </StyledProjects>
  )
}

export default Projects
