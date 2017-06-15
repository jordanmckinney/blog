import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'


const NavBar = () => (
    <div>
        <div className="header"></div>
        <div className="navbar">
            <Link to="/projects" className="projects">Projects</Link>
            <Link to="/writing" className="writing">Writing</Link>
            <Link to="/about" className="about">About</Link>
        </div>
    </div>
)

export default NavBar;
