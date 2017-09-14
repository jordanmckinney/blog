import React from 'react';
import Article from '../../components/article/Article';
import CryptoLife from '../../documents/posts/medium/cryptolife.md';
import MoneyPost from '../../documents/posts/medium/money.md';
import BlockchainNotes from '../../documents/posts/BlockchainNotes.md';


const Writing = () => (
  <div className="writing-container">
    <Article source={CryptoLife}/>
    <Article source={MoneyPost}/>
    <Article source={BlockchainNotes}/>
  </div>
)

export default Writing;
