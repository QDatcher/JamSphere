import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { YOUR_PROFILE, User_Profile } from '../../../utils/queries';
import Auth from '../../../utils/auth';
import jwt_decode from 'jwt-decode';
import AddFriendButton from '../../builders/AddFriend/AddFriend';
import Profile1 from '../../../images/Profile1.png';
import Profile2 from '../../../images/Profile2.png';
import Profile3 from '../../../images/Profile3.png';


const Profile = () => {
    const[currentUserId, setcurrentUserId]= useState(null);
    const { userId: friendId } = useParams();

    useEffect(() => {
        const token = localStorage.getItem('id_token');
        if (token) {
            const currentUserId = jwt_decode(token);
            setcurrentUserId(currentUserId.data._id);
        }
    }, []);

    const { loading, data } = useQuery(friendId !== currentUserId ? User_Profile : YOUR_PROFILE, {
        variables: { userId: friendId !== currentUserId ? friendId : currentUserId },
    });
    

    const user = data?.getUser || {};

    // navigate to personal profile page if user id is yours
    if (Auth.loggedIn() && Auth.getProfile().data.userId === friendId) {
        return <Navigate to="/me" />;
    }
    console.log(friendId)
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    }

    const profileImages = {
        'Profile1.png': Profile1,
        'Profile2.png': Profile2,
        'Profile3.png': Profile3,
    };

    const { username, name, coverPicId } = data?.getUser || {};

    return (
        <>
        <div className="profile-container">
            <div className="profile-info">
                <div>
                    <h2>@{username}</h2>
                    <h2>{name}</h2>
                    <div>
                    <img src={coverPicId ? profileImages[coverPicId] : ''} alt="Profile Picture"></img>
                    </div>
                </div>
                <AddFriendButton currentUserId={currentUserId} friendId={friendId} />
            </div>
        </div>
    </>
    );
}

export default Profile;
