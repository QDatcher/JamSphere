import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_FRIENDS } from '../../../utils/queries'; 
import './ProfileWindow.css';
import FriendList from "../FriendsList/FriendsList"
import PostsList from "../PostList/PostList"


const ProfileWindow = ({ userId }) => {
    const [myPosts, setMyPosts] = useState(true)
    const [myFriends, setMyFriends] = useState(false)
    const userPosts = []

    const { loading, error, data } = useQuery(GET_FRIENDS, {
        variables: { userId },
    });

    const friends = data?.userFriends || [];

    const toggleMyPosts = (e) => {
        e.preventDefault()
        setMyFriends(false)
        setMyPosts(true)
    }

    const toggleMyFriends = (e) => {
        e.preventDefault()
        setMyPosts(false)
        setMyFriends(true)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li><button onClick={toggleMyPosts}>My Posts</button></li>
                        <li><button onClick={toggleMyFriends}>Friends</button></li>
                    </ul>
                </nav>
                <section>
                    {myPosts && (
                        <PostsList posts={userPosts}></PostsList>
                    )}

                    {myFriends && (
                        <FriendList friends={friends}></FriendList>
                    )}
                </section>
            </div>
        </>
    )
}

export default ProfileWindow;
