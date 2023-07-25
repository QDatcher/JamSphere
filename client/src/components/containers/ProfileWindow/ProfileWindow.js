import FriendList from "../FriendsList/FriendsList";
import PostsList from "../PostList/PostList";
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { USER_POSTS, GET_FRIENDS } from '../../../utils/queries';
import './ProfileWindow.css';


const ProfileWindow = ({ userId }) => {
    const [myPosts, setMyPosts] = useState(true);
    const [myFriends, setMyFriends] = useState(false);

    const {
        loading: loadingFriends,
        error: errorFriends,
        data: friendData,
    } = useQuery(GET_FRIENDS, {
        variables: { userId },
    });

    const {
        loading: loadingPosts,
        error: errorPosts,
        data: postData,
    } = useQuery(USER_POSTS, {
        variables: { userId },
    });

    const friends = friendData?.userFriends || [];
    const userPosts = postData?.userPosts || [];


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

                    {myPosts && !loadingPosts && (
                        <PostsList posts={userPosts} />
                    )}

                    {myFriends && !loadingFriends && (
                        <FriendList friends={friends} />
                    )}

                    {(loadingPosts || loadingFriends) && <p>Loading...</p>}

                </section>
            </div>
        </>
    );
}

export default ProfileWindow;
