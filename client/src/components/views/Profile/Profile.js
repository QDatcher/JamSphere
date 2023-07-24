import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import ProfileWindow from '../../containers/ProfileWindow/ProfileWindow';
import './profile.css';
import { YOUR_PROFILE } from '../../../utils/queries';
import jwt_decode from 'jwt-decode';

const Profile = () => {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('id_token');
        if (token) {
            const decodedToken = jwt_decode(token);
            setUserId(decodedToken.data._id);
        }
    }, []);

    const { loading, error, data } = useQuery(YOUR_PROFILE, {
        variables: { userId }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { username, name, coverPicId } = data?.getUser || {};

    return (
        <>
            <div className="profile-container">
                <div className="profile-info">
                    <h2 id="username"><em>@</em>{username}</h2>
                    <h2>{name}</h2>
                    <img src={coverPicId} alt="Profile Pic"></img>
                    <ProfileWindow></ProfileWindow>
                </div>
  
            </div>
        </>
    )
}

export default Profile;
