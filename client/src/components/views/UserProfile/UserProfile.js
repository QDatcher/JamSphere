import React from 'react';
import { useQuery } from '@apollo/client';
import ProfileWindow from '../../containers/ProfileWindow/ProfileWindow';
import './UserProfile.css';
import { User_Profile } from '../../../utils/queries';
import { useParams } from 'react-router-dom';
import AddFriendButton from '../../builders/AddFriend/AddFriend';


const Profile = () => {
    const { userId: friendId } = useParams();

    const {loading, error, data } = useQuery(User_Profile,{
        variables: {userId: friendId }
    });
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { username, name, coverPicId } = data?.getUser || {};

    const currentUserId = localStorage.getItem('currentUserId');

    return (
        <>
            <div className="profile-container">
                <div className="profile-info">
                    <h2>@{username}</h2>
                    <h2>{name}</h2>
                    <ProfileWindow></ProfileWindow>
                    <AddFriendButton currentUserId={currentUserId} friendId={friendId} />
                </div>
                <img src={coverPicId} alt="Profile Picture"></img>
            </div>
        </>
    );
}

export default Profile;
