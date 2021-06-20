import React from 'react';


 const CommentDetails = ({name, date, comment,fakerApi}) =>{

    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={fakerApi} />
                </a>
                <div className='content'>
                <a href="/" className="author"> {name}</a>
                </div>
                <div className="metadata">
                    <span className="date"> {date}</span>
                </div>
                <div className="text"> {comment}</div>
            </div>
    );


}
export default CommentDetails;
