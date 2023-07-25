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
            <div className="friend-cover">
            <img src={coverPicId ? profileImages[coverPicId] : ''} alt="Profile Picture"></img>
            </div>
            <div className="friend-username">
                <p>{username}</p>
            </div>
            <Link to={`/profile/${friendId}`}>{username}</Link>
        </div>
    );
}

export default Friend;