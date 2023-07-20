import FriendList from "../../containers/friendList/FriendsList"
import PostsList from "../../containers/postContainer/PostList"
import React, { useState } from 'react';


const Profile = () => {
    const [myPosts, setMyPosts] = useState(true)
    const [myFriends, setMyFriends] = useState(false)
    const [myFavorites, setMyFavorites] = useState(false)

    const toggleMyPosts = (e) => {
        e.preventDefault()

        setMyFavorites(false)
        setMyFriends(false)
        setMyPosts(true)
    }

    const toggleMyFavorites = (e) => {
        e.preventDefault()

        setMyFriends(false)
        setMyPosts(false)
        setMyFavorites(true)
    }

    const toggleMyFriends = (e) => {
        e.preventDefault()

        setMyPosts(false)
        setMyFavorites(false)
        setMyFriends(true)
    }
    

    return (
        <>
            <div>
                <section>
                    <div>
                        <img></img>
                    </div>
                    <button></button>
                </section>
                <section>
                    <div>
                        <h3>{name}</h3>
                        <h4>{username}</h4>
                    </div>
                    <section>
                        <nav>
                            <button onClick={toggleMyPosts}>My Posts</button>
                            <button onClick={toggleMyFavorites}>Favorites</button>
                            <button onClick={toggleMyFriends}>Friends</button>
                        </nav>
                        {myPosts && (
                            <PostsList posts={userPosts}></PostsList>
                        )}

                        {myFavorites && (
                            <PostsList posts={favorites}></PostsList>
                        )}

                        {myFriends && (
                            <FriendList friends={friends}></FriendList>
                        )}
                    </section>
                </section>
            </div>

        </>
    )
}

export default Profile;