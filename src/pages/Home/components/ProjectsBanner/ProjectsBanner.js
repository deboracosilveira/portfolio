import React from 'react';
import { ProjectsContainer } from './styles';
import example from '../../../../../assets/img/example.png';

const Projects = () => {
  return (
    <div>
      <ProjectsContainer.Title id="projects">PROJECTS</ProjectsContainer.Title>
      <ProjectsContainer>
        <ProjectsContainer.LeftBox>
          <ProjectsContainer.Items>
            <ProjectsContainer.Item1 src={example} />
            <ProjectsContainer.Item2 src={example} />
            <ProjectsContainer.Item3 src={example} />
          </ProjectsContainer.Items>
          <ProjectsContainer.Button>see more...</ProjectsContainer.Button>
        </ProjectsContainer.LeftBox>
        <ProjectsContainer.RightBox />
      </ProjectsContainer>
    </div>
  );
};

export default Projects;
