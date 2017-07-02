import React from 'react';
import './Project.scss';


const Project = () => (
    <div className="project-container">
        <div className="project">
            <h2 id="title">Doc Chain</h2>
            <img src="/src/images/doc_chain.png" alt="doc_chain"/>
            <p id="description">Simple blockchain demo which stores hashes of documents in blockchain.</p>
            <a className="links" href="">Github</a>
            <a className="links" href="">Twitter</a>
        </div>
    </div>
)

export default Project;
