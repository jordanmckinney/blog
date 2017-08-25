import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Video.scss';


const Video = ({source}) => (
    <div className="video-container">
        <div className="video">
            <ReactMarkdown source={source} />
        </div>
    </div>
)


export default Video;
