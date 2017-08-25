import React from 'react';
import Video from '../../components/video/Video';
import FunToImagine from '../../documents/videos/funtoimagine.md';
import MapsOfMeaning from '../../documents/videos/mapsofmeaning.md';
import SamHarrisAI from '../../documents/videos/samharrisai.md';
import PayAttention from '../../documents/videos/payattention.md';
import './Videos.scss';

const Books = () => (
  <div className="videos-container">
    <div id="preamble-container">
      <div id="preamble">Interesting, inspirational, moving, profound videos that have had an impact on me.</div>
    </div>
    <hr></hr>
    <Video source={FunToImagine} />
    <Video source={MapsOfMeaning} />
    <Video source={SamHarrisAI} />
    <Video source={PayAttention} />
  </div>
)

export default Books;
