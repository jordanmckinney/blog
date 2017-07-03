import React from 'react';
import './SideNav.scss';
import { Link } from 'react-router-dom'


const SideNav = () => (
    <div className="sidenav">
      <li className="series-title">Blockchain Series</li>
      <div className="series-body">
        <li><Link to="/writing/hashing" className="published">Hashing</Link> </li>
        <li className="unpublished">Blockchain</li>
        <li className="unpublished">Bitcoin</li>
        <li className="unpublished">Ethereum</li>
      </div>
    </div>
)

export default SideNav;
