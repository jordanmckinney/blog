import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Article.scss';


const Article = ({source}) => (
    <div className="article-container">
        <div className="article">
            <ReactMarkdown source={source} />
        </div>
    </div>
)


export default Article;
