import React from 'react';
import './friend.css';

const Friend = ({ profileURL, username }) => {
    return (
        <>    
            <a href="*">
                <div>
                    <div>
                        <img alt={`${username} profile pic`} src={profileURL}></img>
                    </div>
                    <p>{username}</p>
                </div>
            </a>
        </>
    )
}

export default Friend;