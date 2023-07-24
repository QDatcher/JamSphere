import React from 'react';
import './comment.css';

const Comment = ({ authorName, commentContent }) => {

    return (
        <div id="commentContent">
            <h4>@{authorName}:</h4>
            <br></br>
            <p>{commentContent}</p>
        </div>
    )
}
export default Comment