import React from 'react';
import Article from '../../components/article/Article';
import MoneyPost from '../../documents/posts/medium/money.md';
import CryptoNotes from '../../documents/posts/CryptoNotes.md';


const Writing = () => (
  <div className="writing-container">
    <Article source={MoneyPost}/>
    <Article source={CryptoNotes}/>
  </div>
)

export default Writing;
