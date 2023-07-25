import FriendList from "../FriendsList/FriendsList";
import PostsList from "../PostList/PostList";
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { USER_POSTS, GET_FRIENDS } from '../../../utils/queries';
import './ProfileWindow.css';
import Auth from '../../../utils/auth';

const ProfileWindow = ({userId}) => {
    const [myPosts, setMyPosts] = useState(true);
    const [myFriends, setMyFriends] = useState(false);

    
    const { loading, error, friendData } = useQuery(GET_FRIENDS, {
        variables: { userId },
    });

    const friends = friendData?.userFriends || [];

    const toggleMyPosts = (e) => {
        e.preventDefault();
        setMyFriends(false);
        setMyPosts(true);
    }

    const toggleMyFriends = (e) => {
        e.preventDefault();
        setMyPosts(false);
        setMyFriends(true);
    }
    

    const { data } = useQuery(USER_POSTS, { variables:{userId: userId}});
    console.log(data)
    console.log(userId);
;    const userPosts = data?.userPosts || [];

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
                    {myPosts && !loading && (
                        <PostsList posts={userPosts} />
                    )}

                    {myFriends && (
                        <FriendList friends={friends} />
                    )}

                    {loading && <p>Loading...</p>}
                </section>
            </div>
        </>
    );
}

export default ProfileWindow;
