import React from 'react';
import { useMutation } from '@apollo/client';
import './friend.css';

const Friend = ({ friendId, username, coverPicId }) => {
    
    return (
        <div className="friend-container">  
        <div className="friend-cover">
            <img alt={`${username}'s profile`} src={coverPicId}></img>
        </div>
        <Link to={`/profile/${friendId}`} className="friend-username">
            <p>{username}</p>
        </Link>
    </div>
    )
}

export default Friend;
