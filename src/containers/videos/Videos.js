import React from 'react';
import Video from '../../components/video/Video';
import Fault_Tolerant_1 from '../../documents/videos/fault_tolerant_1.md';
import Podcast_2 from '../../documents/videos/podcast_2.md';
import BitcoinTalk from '../../documents/videos/bitcoin_talk.md';
import Podcast_1 from '../../documents/videos/podcast_1.md';
import Accelerators from '../../documents/videos/accelerators.md';
import EOS from '../../documents/videos/eos.md';
import './Videos.scss';

const Videos = () => (
  <div className="videos-container">
    <div id="preamble-container">
      <div id="preamble">Videos, audio, and presentations by me.</div>
    </div>
    <hr></hr>
    <Video source={Fault_Tolerant_1} />
    <Video source={Podcast_2} />
    <Video source={BitcoinTalk} />
    <Video source={Podcast_1} />
    <Video source={Accelerators} />
    <Video source={EOS} />
  </div>
)

export default Videos;
