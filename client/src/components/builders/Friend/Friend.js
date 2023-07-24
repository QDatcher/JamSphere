import React from 'react';
import './friend.css';

const Friend = ({ coverPicId, username }) => {
    return (
        <div className="friend-container">  
            <div className="friend-cover">
                <img alt={`${username}'s profile`} src={coverPicId}></img>
            </div>
            <div className="friend-username">
                <p>{username}</p>
            </div>
        </div>
    );
}

export default Friend;