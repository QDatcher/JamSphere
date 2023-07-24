import React from 'react';
import { Link } from 'react-router-dom';
import './friend.css';

const Friend = ({ coverPicId, username, friendId }) => {
    return (
        <div className="friend-container">  
            <div className="friend-cover">
                <img alt={`${username}'s profile`} src={coverPicId}></img>
            </div>
            <div className="friend-username">
                <p>{username}</p>
            </div>
            <Link to={`/profile/${friendId}`}>{username}</Link>
        </div>
    );
}

export default Friend;