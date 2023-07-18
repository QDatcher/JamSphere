import React from 'react';

const Comment = ({ authorName, commentContent }) => {

    return (
        <div id="commentContent">
            <h4>@{authorName}:</h4>
            <p>{commentContent}</p>
        </div>
    )
}