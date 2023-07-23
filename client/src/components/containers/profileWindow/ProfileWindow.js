import FriendList from "../FriendList/FriendsList"
import PostsList from "../postContainer/PostList"
import React, { useState } from 'react';
import './ProfileWindow.css';


const ProfileWindow = () => {
    const [myPosts, setMyPosts] = useState(true)
    const [myFriends, setMyFriends] = useState(false)
    const [friends, setFriend] = useState([])
    const userPosts = []


    const toggleMyPosts = (e) => {
        e.preventDefault()

        // setMyFavorites(false)
         setMyFriends(false)
         setMyPosts(true)
    }

    const toggleMyFriends = (e) => {
        e.preventDefault()

         setMyPosts(false)
        // setMyFavorites(false)
         setMyFriends(true)
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