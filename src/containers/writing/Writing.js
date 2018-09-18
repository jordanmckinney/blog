import React from 'react';
import Article from '../../components/article/Article';
import Bitcoin_I from '../../documents/posts/medium/bitcoin_I.md';
import Bitcoin_II from '../../documents/posts/medium/bitcoin_II.md';
import CryptoLife from '../../documents/posts/medium/cryptolife.md';
import MoneyPost from '../../documents/posts/medium/money.md';
import Notes from '../../documents/projects/Notes.md';


const Writing = () => (
  <div className="writing-container">
    <Article source={Bitcoin_II}/>
    <Article source={Bitcoin_I}/>
    <Article source={CryptoLife}/>
    <Article source={MoneyPost}/>
    <Article source={Notes}/>
  </div>
)

export default Writing;
