import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'
import './Projects.css';


const Project = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Projects = ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to={`${match.url}/project_1`}>
          Project 1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/project_2`}>
          Project 2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/project_3`}>
          Project 3
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Project}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

export default Projects;
