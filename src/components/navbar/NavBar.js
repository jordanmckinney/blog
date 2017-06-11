import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'


const NavBar = () => (
    <div className="header-container">
        <div className="header"></div>
        <div className="navbar">
            <Link to="/projects">Projects</Link>
            <Link to="/writing">Writing</Link>
            <Link to="/about">About</Link>
        </div>
    </div>
)

export default NavBar;
