import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Book.scss';


const Book = ({source}) => (
    <div className="book-container">
        <div className="book">
            <ReactMarkdown source={source} />
        </div>
    </div>
)


export default Book;
