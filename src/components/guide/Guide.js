import React from 'react';
import './Guide.scss';


const Guide = () => (
    <div className="guide-container">
        <div className="guide">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-hashtag fa-stack-1x"></i>
            </span>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-link fa-stack-1x"></i>
            </span>
            <img src="/public/images/BTC.svg" alt="hash"/>
            <img src="/public/images/ETH-alt.svg" alt="ethereum"/>
            <img src="/public/images/DAO-alt.svg" alt="ethereum"/>
        </div>
    </div>
)


export default Guide;

            // <a href="https://github.com/JordanMcKinney" target="_blank" rel="noopener noreferrer"><i className="fa fa-hashtag fa-lg"></i></a>
            // <a href="https://medium.com/@jordanmm" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium fa-lg"></i></a>
            // <a href="https://twitter.com/JordanMMcKinney" target="_blank" rel="noopener noreferrer"><i className="fa fa-btc fa-lg"></i></a>
            // <a href="https://www.linkedin.com/in/JordanMMcKinney" target="_blank" rel="noopener noreferrer"><i className="fa fa-eth fa-lg"></i></a>
            // <a href="mailto@jordanmmck@gmail.com" target="_top"><i className="fa fa-envelope fa-lg"></i></a>
