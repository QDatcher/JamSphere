import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { YOUR_PROFILE, User_Profile } from '../../../utils/queries';
import Auth from '../../../utils/auth';

import ProfileWindow from '../../containers/ProfileWindow/ProfileWindow';
import AddFriendButton from '../../builders/AddFriend/AddFriend';

const Profile = () => {
    const { userId: friendId } = useParams();

    const { loading, data } = useQuery(friendId ? User_Profile : YOUR_PROFILE, {
        variables: { userId: friendId },
    });

    const user = data?.getUser || data?.me || {};

    // navigate to personal profile page if user id is yours
    if (Auth.loggedIn() && Auth.getProfile().data.userId === friendId) {
        return <Navigate to="/me" />;
    }

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

    const currentUserId = localStorage.getItem('currentUserId');

    return (
        <div className="profile-container">
            <div className="profile-info">
                <h2>@{user.username}</h2>
                <h2>{user.name}</h2>
                <ProfileWindow />
                <AddFriendButton currentUserId={currentUserId} friendId={friendId} />
            </div>
            <img src={user.coverPicId} alt="Profile Picture"></img>
        </div>
    );
}

export default Profile;
