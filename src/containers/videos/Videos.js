import React from 'react';
import Video from '../../components/video/Video';
import BitcoinTalk from '../../documents/videos/bitcoin_talk.md';
import Podcast from '../../documents/videos/podcast.md';
import Accelerators from '../../documents/videos/accelerators.md';
import EOS from '../../documents/videos/eos.md';
import FunToImagine from '../../documents/videos/funtoimagine.md';
import MapsOfMeaning from '../../documents/videos/mapsofmeaning.md';
import SamHarrisAI from '../../documents/videos/samharrisai.md';
import PayAttention from '../../documents/videos/payattention.md';
import Money from '../../documents/videos/andreasmoney.md';
import CryptoeconomicWay from '../../documents/videos/cryptoeconomicway.md';
import NavalBlockstack from '../../documents/videos/navalblockstack.md';
import UnityAdam from '../../documents/videos/unityadam.md';
import './Videos.scss';

const Videos = () => (
  <div className="videos-container">
    <div id="preamble-container">
      <div id="preamble">Videos, audio, and presentations by me.</div>
    </div>
    <hr></hr>
    <Video source={BitcoinTalk} />
    <Video source={Podcast} />
    <Video source={Accelerators} />
    <Video source={EOS} />
    <div id="preamble-container">
      <div id="preamble">Enlightening, inspirational, profound, or just plain awesome videos that I love.</div>
    </div>
    <hr></hr>
    <Video source={NavalBlockstack} />
    <Video source={MapsOfMeaning} />
    <Video source={FunToImagine} />
    <Video source={SamHarrisAI} />
    <Video source={Money} />
    <Video source={CryptoeconomicWay} />
    <Video source={PayAttention} />
    <Video source={UnityAdam} />
  </div>
)

export default Videos;
