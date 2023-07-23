import React from 'react';
import ProfileWindow from '../../containers/profileWindow/ProfileWindow';
import { useQuery } from '@apollo/client';
import {YOUR_PROFILE} from '../../../utils/queries';
import './profile.css';

const Profile = ({ username, firstName, lastName, coverPicId }) => {
    const { loading, error, data } = useQuery(YOUR_PROFILE, {
        variables: { userId: '_id' },
      });

      const {getUser}= data;
    return (
        <>
            <div class="profile-container">
                <div class="profile-info">
                    <h2>@{getUser.username}</h2>
                    <h2>{getUser.Name}</h2>
                    <ProfileWindow></ProfileWindow>
                </div>
                <img src={getUser.coverPicId} alt="Profile Picture"></img>
            </div>
        </>
    )
}

export default Profile;