import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import ProfileWindow from '../../containers/ProfileWindow/ProfileWindow';
import './profile.css';
import { YOUR_PROFILE } from '../../../utils/queries';
import jwt_decode from 'jwt-decode';
import Profile1 from '../../../images/Profile1.png';
import Profile2 from '../../../images/Profile2.png';
import Profile3 from '../../../images/Profile3.png';

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
                    <ProfileWindow userId={userId}></ProfileWindow>
                </div>
            </div>
        </>
    );
};

export default Profile;
