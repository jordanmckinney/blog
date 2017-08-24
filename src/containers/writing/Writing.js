import React from 'react';
import Article from '../../components/article/Article';
import Guide from '../../components/guide/Guide';
import Technology from '../../documents/posts/Technology.md';
import MoneyPost from '../../documents/posts/medium/money.md';
// import { Route, Link } from 'react-router-dom'


const Writing = () => (
  <div className="writing-container">
    <Article source={MoneyPost}/>
  </div>
)

export default Writing;
