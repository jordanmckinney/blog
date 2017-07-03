import React from 'react';
import Article from '../../components/article/Article';
import './Projects.scss';

import DocChain from '../../documents/projects/DocChain.md';
import TwitterBot from '../../documents/projects/TwitterBot.md';
import DotFiles from '../../documents/projects/DotFiles.md';
import MachineLearning from '../../documents/projects/MachineLearning.md';
import HTTPClientServer from '../../documents/projects/HTTPClientServer.md';
import PersonalSite from '../../documents/projects/PersonalSite.md';


const Projects = () => (
  <div className="projects-container">
    <Article id="project" source={DocChain}/>
    <Article id="project" source={PersonalSite}/>
    <Article id="project" source={TwitterBot}/>
    <Article id="project" source={MachineLearning}/>
    <Article id="project" source={DotFiles}/>
    <Article id="project" source={HTTPClientServer}/>
  </div>
)

export default Projects;
