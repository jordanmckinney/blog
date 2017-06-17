import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import About from '../../containers/about/About';
import Projects from '../../containers/projects/Projects';
import Writings from '../../containers/writing/Writing';
import NavBar from '../../components/navbar/NavBar';
import './App.scss';


const App = () => (
  <Router>
    <div className="app">
      <NavBar />
        <Route exact path="/" component={About}/>
        <Route path="/about" component={About}/>
        <Route path="/writing" component={Writings}/>
        <Route path="/projects" component={Projects}/>
    </div>
  </Router>
)

export default App
