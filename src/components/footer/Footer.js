import React from 'react';
import './Footer.scss';


const Footer = () => (
    <div className="footer-container">
        <div className="footer">
            <a href="https://github.com/jordanmmck" title="github" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg"></i></a>
            <a href="https://twitter.com/@jordanmmck" title="twitter" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-lg"></i></a>
            <a href="https://medium.com/@jordanmmck" title="medium" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium fa-lg"></i></a>
            <a href="https://www.linkedin.com/in/JordanMMcKinney" title="linkedin" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-lg"></i></a>
            <a href="mailto@jordanmmck@gmail.com" title="email" target="_top"><i className="fa fa-envelope fa-lg"></i></a>
            <a href="https://docs.google.com/document/d/1zD1RgyvYjjzkKQyvTt18CCDywk88Gdy9Ulc77cNjD4k/edit?usp=sharing" title="resume" target="_top"><i className="fa fa-file-text fa-lg"></i></a>
        </div>
    </div>
)

export default Footer;
