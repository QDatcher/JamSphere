import React from 'react';
import './friend.css';

const Friend = ({ profileURL, username }) => {
    return (
        <div class="profile">
            <img src={profileURL} alt="Profile Picture"></img>
            <p>@{username}</p>
        </div>
    )
}

export default Friend