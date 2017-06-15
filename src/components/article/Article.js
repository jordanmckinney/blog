import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Article.css';


const Article = ({source}) => (
    <div className="article">
        <ReactMarkdown source={source} />
    </div>
)


export default Article;
