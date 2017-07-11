import React from 'react';
import './Guide.scss';


const Guide = () => (
    <div className="guide-container">
      <div className="guide">
        <a href="#/writing/" className="guide-link">Technology</a>
        <a href="#/writing/hashing" className="guide-link inactive">Hashing</a>
        <a href="#/writing/blockchain" className="guide-link inactive">Blockchain</a>
        <a href="#/writing/bitcoin" className="guide-link inactive">Bitcoin</a>
        <a href="#/writing/ethereum" className="guide-link inactive">Ethereum</a>
        <a href="#/writing/dao" className="guide-link inactive">DAO</a>
      </div>
    </div>
)


export default Guide;
