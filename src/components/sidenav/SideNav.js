import React from 'react';
import './SideNav.scss';
import { Link } from 'react-router-dom'
// import { HashRouter } from 'react-router-dom'


const SideNav = () => (
    <div className="sidenav">
      <li><Link to="/writing/hashing" className="article-link">Hashing</Link> </li>
      <li><Link to="/writing/blockchain" className="article-link">Blockchain</Link> </li>
      <li><Link to="/writing/bitcoin" className="article-link">Bitcoin</Link> </li>
      <li><Link to="/writing/ethereum" className="article-link">Ethereum</Link> </li>
    </div>
)

export default SideNav;
