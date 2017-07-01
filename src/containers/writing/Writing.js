import React from 'react';
import Article from '../../components/article/Article';
import ArticleNav from '../../components/articlenav/ArticleNav';
import zshvimtmux from '../../documents/zshvimtmux.md';
import {
  Route,
  Link
} from 'react-router-dom'
import './Writing.scss';


const Writings = () => (
  <div className="writing-container">
      <ArticleNav />
      <Article source={zshvimtmux}/>
  </div>
)

export default Writings;
