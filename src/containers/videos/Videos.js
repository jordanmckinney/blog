import React from 'react';
import Video from '../../components/video/Video';
import FunToImagine from '../../documents/videos/funtoimagine.md';
import MapsOfMeaning from '../../documents/videos/mapsofmeaning.md';
import SamHarrisAI from '../../documents/videos/samharrisai.md';
import PayAttention from '../../documents/videos/payattention.md';
import Money from '../../documents/videos/andreasmoney.md';
import UnityAdam from '../../documents/videos/unityadam.md';
import './Videos.scss';

const Books = () => (
  <div className="videos-container">
    <div id="preamble-container">
      <div id="preamble">Interesting, inspirational, profound, or just awesome videos that I love.</div>
    </div>
    <hr></hr>
    <Video source={FunToImagine} />
    <Video source={MapsOfMeaning} />
    <Video source={SamHarrisAI} />
    <Video source={Money} />
    <Video source={PayAttention} />
    <Video source={UnityAdam} />
  </div>
)

export default Books;
