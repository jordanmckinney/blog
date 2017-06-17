import React from 'react';
import Article from '../../components/article/Article';
import SideNav from '../../components/sidenav/SideNav';
import {
  Route,
  Link
} from 'react-router-dom'
import './Writing.scss';

const input = 'I am a 4th year Computer Science student at UVIC. I am currently on an 8 month co-op at Bambora in Victoria.\nMy main interests are in Machine Learning, AI and Blockchain technology.\n\nI am a 4th year Computer Science student at UVIC. I am currently on an 8 month co-op at Bambora in Victoria.\nMy main interests are in Machine Learning, AI and Blockchain technology. I am a 4th year Computer Science student at UVIC. I am currently on an 8 month co-op at Bambora in Victoria.\nMy main interests are in Machine Learning, AI and Blockchain technology.'

const Writings = () => (
  <div className="writingContainer">
      <SideNav />
      <Article source={input}/>
  </div>
)

export default Writings;
