import React from 'react';
import Article from '../../components/article/Article';
import Guide from '../../components/guide/Guide';
import Money from '../../documents/posts/Money.md';
// import { Route, Link } from 'react-router-dom'


const Writing = () => (
  <div className="writing-container">
      <Guide />
      <Article source={Money}/>
  </div>
)

export default Writing;
