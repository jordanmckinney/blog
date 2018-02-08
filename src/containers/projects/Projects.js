import React from 'react';
import Article from '../../components/article/Article';

import Notes from '../../documents/projects/Notes.md';
import DocChain from '../../documents/projects/DocChain.md';
import TwitterBot from '../../documents/projects/TwitterBot.md';
import DotFiles from '../../documents/projects/DotFiles.md';
import MachineLearning from '../../documents/projects/MachineLearning.md';
import HTTPClientServer from '../../documents/projects/HTTPClientServer.md';
import PersonalSite from '../../documents/projects/PersonalSite.md';


const Projects = () => (
  <div className="projects-container">
    <Article source={Notes}/>
    <Article source={DocChain}/>
    <Article source={PersonalSite}/>
    <Article source={TwitterBot}/>
    <Article source={MachineLearning}/>
    <Article source={DotFiles}/>
    <Article source={HTTPClientServer}/>
  </div>
)

export default Projects;
