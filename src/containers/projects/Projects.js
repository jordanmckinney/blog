import React from 'react';
import './Projects.scss';
import Project from '../../components/project/Project'
import Docchain from '../../documents/Docchain.md';
import Article from '../../components/article/Article';

const Projects = () => (
  <div className="projects-container">
    <Article source={Docchain}/>
  </div>
)

export default Projects;
