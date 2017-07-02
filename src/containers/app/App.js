import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import About from '../../containers/about/About';
import Projects from '../../containers/projects/Projects';
import Writings from '../../containers/writing/Writing';
import Header from '../../components/header/Header';
import './App.scss';


const App = () => (
  <Router>
    <div className="app">
      <Header />
        <Route exact path="/" component={Writings}/>
        <Route path="/about" component={About}/>
        <Route path="/writing" component={Writings}/>
        <Route path="/writing/{story}" component={Writings}/>
        <Route path="/writing/blockchain" component={Writings}/>
        <Route path="/writing/bitcoin" component={Writings}/>
        <Route path="/writing/ethereum" component={Writings}/>
        <Route path="/projects" component={Projects}/>
    </div>
  </Router>
)

export default App
