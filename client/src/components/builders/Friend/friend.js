import React from 'react';

const Friend =({profileURL, username}) => {
    return (
        <div>
            <img src={profileURL} alt="Profile Picture"></img>
            <p>@{username}</p>
        </div>
    )
}

export default Friend