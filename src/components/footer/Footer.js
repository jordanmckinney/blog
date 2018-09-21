import React from 'react';
import './Footer.scss';


const Footer = () => (
    <div className="footer-container">
        <div className="footer">
            <a href="https://twitter.com/@jordanmmck" title="twitter" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-lg"></i></a>
            <a href="https://github.com/jordanmmck" title="github" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-lg"></i></a>
            <a href="https://medium.com/@jordanmmck" title="medium" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium fa-lg"></i></a>
            <a href="https://www.youtube.com/channel/UCB_7Lx25mX9FWEqUjQh7Iiw" title="youtube" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube fa-lg"></i></a>
            <a href="https://vicblockchain.now.sh/" title="slack" target="_blank" rel="noopener noreferrer"><i className="fa fa-slack fa-lg"></i></a>
            <a href="https://docs.google.com/document/d/1zD1RgyvYjjzkKQyvTt18CCDywk88Gdy9Ulc77cNjD4k/edit?usp=sharing" title="resume" target="_top"><i className="fa fa-file-text fa-lg"></i></a>
        </div>
    </div>
)

export default Footer;
