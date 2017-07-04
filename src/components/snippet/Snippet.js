import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Snippet.scss';


const Snippet = ({source}) => (
    <div className="snippet-container">
        <div className="snippet">
            <ReactMarkdown source={source} />
        </div>
    </div>
)


export default Snippet;
