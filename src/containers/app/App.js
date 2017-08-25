import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import About from '../../containers/about/About';
import Projects from '../../containers/projects/Projects';
import Writing from '../../containers/writing/Writing';
import Books from '../../containers/books/Books';
import Header from '../../components/header/Header';
import './App.scss';


const App = () => (
  <Router>
    <div className="app">
      <Header />
        <Route exact path="/" component={Writing}/>
        <Route path="/about" component={About}/>
        <Route path="/writing" component={Writing}/>
        <Route path="/books" component={Books}/>
        <Route path="/projects" component={Projects}/>
    </div>
  </Router>
)

export default App
