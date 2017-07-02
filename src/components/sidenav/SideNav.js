import React from 'react';
import './SideNav.scss';
import { Link } from 'react-router-dom'


const SideNav = () => (
    <div className="sidenav">
      <li className="series-title">Blockchain Series</li>
      <div className="series-body">
        <li><Link to="/writing/hashing" className="article-link">Hashing</Link> </li>
        <li><Link to="/writing/blockchain" className="article-link">Blockchain</Link> </li>
        <li><Link to="/writing/bitcoin" className="article-link">Bitcoin</Link> </li>
        <li><Link to="/writing/ethereum" className="article-link">Ethereum</Link> </li>
      <li className="series-title">Blockchain Projects</li>
        <li><Link to="/writing/projects/simple-blockchain" className="article-link">Dochain</Link> </li>
      </div>
    </div>
)

export default SideNav;
