import React from 'react'
import styled from 'styled-components'

import Arrow from '../../assets/arrow.svg'

import ProjectCard from '../ProjectCard/ProjectCard'

const StyledProjects = styled.div`
  max-width: 1000px;
  height: 552px;
  border-radius: 8px;
  background-color: #ffffff;
  margin: 30px auto 0 auto;
`
const ProjectsHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 850px;
  margin: auto;
  padding-top: 20px;
`
const StyledArrow = styled(Arrow)`
  display: flex;
`
const ProjectsBody = styled.div``

const Projects = () => {
  return (
    <StyledProjects>
      <ProjectsHeader>
        <h3>Latest Projects</h3>
        <StyledArrow />
      </ProjectsHeader>
      <ProjectsBody>
        <ProjectCard />
      </ProjectsBody>
    </StyledProjects>
  )
}

export default Projects
