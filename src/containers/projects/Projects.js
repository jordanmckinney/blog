import React from 'react';
import Article from '../../components/article/Article';

import BTC from '../../documents/projects/BTC.md';
import Notes from '../../documents/projects/Notes.md';
import DocChain from '../../documents/projects/DocChain.md';
import DotFiles from '../../documents/projects/DotFiles.md';
import PersonalSite from '../../documents/projects/PersonalSite.md';


const Projects = () => (
  <div className="projects-container">
    <Article source={BTC}/>
    <Article source={Notes}/>
    <Article source={PersonalSite}/>
    <Article source={DocChain}/>
    <Article source={DotFiles}/>
  </div>
)

export default Projects;
