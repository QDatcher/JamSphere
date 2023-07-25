import React from 'react';
import { Link } from 'react-router-dom';
import './friend.css';
import Profile1 from '../../../images/Profile1.png';
import Profile2 from '../../../images/Profile2.png';
import Profile3 from '../../../images/Profile3.png';

const profileImages = {
    'Profile1.png': Profile1,
    'Profile2.png': Profile2,
    'Profile3.png': Profile3,
};

const Friend = ({ coverPicId, username, friendId }) => {
    return (
        <div className="friend-container">  
        <div className="friend-picture-container">
            <img src={coverPicId ? profileImages[coverPicId] : ''} alt="Profile Picture" />
        </div>
        <div className="friend-info">
            <p className="friend-username">{username}</p>
            <Link to={`/profile/${friendId}`} className="friend-link">{username}</Link>
        </div>
    </div>
    
    
    );
}

export default Friend;