import React from 'react';
import Article from '../../components/article/Article';
import Guide from '../../components/guide/Guide';
// import SideNav from '../../components/sidenav/SideNav';
import Hashing from '../../documents/posts/Hashing.md';
import Snippet from '../../components/snippet/Snippet';
import Hashing_snippet from '../../documents/snippets/Hashing_snippet.md';
import Blockchain_snippet from '../../documents/snippets/Blockchain_snippet.md';
import Bitcoin_snippet from '../../documents/snippets/Bitcoin_snippet.md';
import DAO_snippet from '../../documents/snippets/DAO_snippet.md';
import Ethereum_snippet from '../../documents/snippets/Ethereum_snippet.md';
// import { Route, Link } from 'react-router-dom'
import './Writing.scss';


const Writing = () => (
  <div className="writing-container">
      <Guide />
      <Article source={Hashing}/>
  </div>
)

export default Writing;
