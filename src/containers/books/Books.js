import React from 'react';
import Book from '../../components/book/Book';
import Siddhartha from '../../documents/books/siddhartha.md';
import GameTheory from '../../documents/books/gametheory.md';
import DailyStoic from '../../documents/books/dailystoic.md';
import Sapiens from '../../documents/books/sapiens.md';
import ZeroToOne from '../../documents/books/zerotoone.md';
import Superintelligence from '../../documents/books/superintelligence.md';
import SurelyYoureJoking from '../../documents/books/surelyyourejoking.md';
import DoorsOfPerception from '../../documents/books/doorsofperception.md';
import './Books.scss';

const Books = () => (
  <div className="books-container">
    <h3 id="year">2017</h3>
    <hr></hr>
    <Book source={Siddhartha} />
    <Book source={GameTheory} />
    <Book source={DailyStoic} />
    <h3 id="year">2016</h3>
    <hr></hr>
    <Book source={Sapiens} />
    <Book source={ZeroToOne} />
    <Book source={Superintelligence} />
    <Book source={SurelyYoureJoking} />
    <h3 id="year">Earlier</h3>
    <hr></hr>
    <Book source={DoorsOfPerception} />
  </div>
)

export default Books;