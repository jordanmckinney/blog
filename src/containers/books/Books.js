import React from 'react';
import Book from '../../components/book/Book';

import Diaspora from '../../documents/books/diaspora.md';
import Elephant from '../../documents/books/elephant.md';
import Rama from '../../documents/books/rama.md';
import WinBigly from '../../documents/books/winbigly.md';
import HowToFail from '../../documents/books/howtofail.md';
import FlashBoys from '../../documents/books/flashboys.md';
import PlayerofGames from '../../documents/books/playerofgames.md';
import ConsiderPhlebas from '../../documents/books/considerphlebas.md';
import TwelveRulesForLife from '../../documents/books/twelverulesforlife.md';
import RationalOptimist from '../../documents/books/rationaloptimist.md';
import Tribe from '../../documents/books/tribe.md';
import LessonsOfHistory from '../../documents/books/lessonsofhistory.md';
import WiganPier from '../../documents/books/wiganpier.md';
import OnTyranny from '../../documents/books/ontyranny.md';
import Siddhartha from '../../documents/books/siddhartha.md';
import GameTheory from '../../documents/books/gametheory.md';
import DailyStoic from '../../documents/books/dailystoic.md';
import Sapiens from '../../documents/books/sapiens.md';
import ZeroToOne from '../../documents/books/zerotoone.md';
import Superintelligence from '../../documents/books/superintelligence.md';
import SurelyYoureJoking from '../../documents/books/surelyyourejoking.md';
import DoorsOfPerception from '../../documents/books/doorsofperception.md';
import HowToWinFriends from '../../documents/books/howtowinfriends.md';
import './Books.scss';

const Books = () => (
  <div className="books-container">
    <h3 id="year">2018</h3>
    <hr></hr>
    <Book source={Diaspora} />
    <Book source={Elephant} />
    <Book source={Rama} />
    <Book source={WinBigly} />
    <Book source={HowToFail} />
    <Book source={FlashBoys} />
    <Book source={PlayerofGames} />
    <Book source={ConsiderPhlebas} />
    <Book source={TwelveRulesForLife} />
    <Book source={RationalOptimist} />
    <Book source={Tribe} />
    <h3 id="year">2017</h3>
    <hr></hr>
    <Book source={LessonsOfHistory} />
    <Book source={WiganPier} />
    <Book source={OnTyranny} />
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
    <Book source={HowToWinFriends} />
  </div>
)

export default Books;
