import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import ProfileWindow from '../../containers/profileWindow/ProfileWindow';
import './profile.css';
import { YOUR_PROFILE } from '../../../utils/queries';

const Profile = () => {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem('id_token');
        if (storedUserId) {
            setUserId(storedUserId);
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
                    <h2>@{username}</h2>
                    <h2>{name}</h2>
                    <ProfileWindow></ProfileWindow>
                </div>
                <img src={coverPicId} alt="Profile Picture"></img>
            </div>
        </>
    )
}

export default Profile;
