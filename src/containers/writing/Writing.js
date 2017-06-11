import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'
import './Writing.css';

const Writing = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Writings = ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to={`${match.url}/essay_1`}>
          On The Topic of Line Segments
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/essay_2`}>
          Vampires in Hip Hop Culture
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/essay_3`}>
          The Plight of Cuttlefish in Modern America
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Writing}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

export default Writings;
