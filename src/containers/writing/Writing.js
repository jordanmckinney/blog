import React from 'react';
import Article from '../../components/article/Article';
import SideNav from '../../components/sidenav/SideNav';
import zshvimtmux from '../../documents/zshvimtmux.md';
import AboutMe from '../../documents/AboutMe.md';
import {
  Route,
  Link
} from 'react-router-dom'
import './Writing.scss';


const Writings = () => (
  <div className="writingContainer">
      <SideNav />
      <Article source={zshvimtmux}/>
  </div>
)

export default Writings;
