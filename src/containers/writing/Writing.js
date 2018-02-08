import React from 'react';
import Article from '../../components/article/Article';
import CryptoLife from '../../documents/posts/medium/cryptolife.md';
import MoneyPost from '../../documents/posts/medium/money.md';
import Notes from '../../documents/projects/Notes.md';


const Writing = () => (
  <div className="writing-container">
    <Article source={CryptoLife}/>
    <Article source={MoneyPost}/>
    <Article source={Notes}/>
  </div>
)

export default Writing;
