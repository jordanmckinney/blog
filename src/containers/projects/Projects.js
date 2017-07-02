import React from 'react';
import './Projects.scss';
import Project from '../../components/project/Project'
import DocChain from '../../documents/DocChain.md';
import TwitterBot from '../../documents/TwitterBot.md';
import DotFiles from '../../documents/DotFiles.md';
import Article from '../../components/article/Article';

const Projects = () => (
  <div className="projects-container">
    <Article source={DocChain}/>
    <Article source={TwitterBot}/>
    <Article source={DotFiles}/>
  </div>
)

export default Projects;
