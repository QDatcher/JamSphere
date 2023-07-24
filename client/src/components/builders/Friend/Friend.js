import React from 'react';
import './friend.css';

const Friend = ({ coverPicId, username }) => {
    return (
        <>    
            <a href="*">
                <div>
                    <div>
                        <img alt={`${username} profile pic`} src={coverPicId}></img>
                    </div>
                    <p>{username}</p>
                </div>
            </a>
        </>
    )
}

export default Friend;