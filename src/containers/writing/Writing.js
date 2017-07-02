import React from 'react';
import Article from '../../components/article/Article';
import SideNav from '../../components/sidenav/SideNav';
import Ethereum from '../../documents/Ethereum.md';
import {
  Route,
  Link
} from 'react-router-dom'
import './Writing.scss';


const Writings = () => (
  <div className="writing-container">
      <SideNav />
      <Article source={Ethereum}/>
  </div>
)

export default Writings;
