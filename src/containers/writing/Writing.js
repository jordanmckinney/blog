import React from 'react';
import Article from '../../components/article/Article';
import Guide from '../../components/guide/Guide';
import Hashing from '../../documents/posts/Hashing.md';
import Technology from '../../documents/posts/Technology.md';
// import { Route, Link } from 'react-router-dom'


const Writing = () => (
  <div className="writing-container">
      <Guide />
      <Article source={Technology}/>
  </div>
)

export default Writing;
