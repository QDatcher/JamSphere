
import PostList from '../../containers/PostList/PostList';
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { YOUR_PROFILE, GET_POST } from '../../../utils/queries';
import Auth from '../../../utils/auth';
import "./Home.css";


const Home = () => {
    const isLoggedIn = Auth.loggedIn();
    const posts = [{}, {}, {}]

    return (
        <>
        <div className="parentContainer">
            {isLoggedIn ? (
                <>
                    <button id="create">+</button>
                    <PostList posts={posts} />
                </>
            ) : (
                <PostList posts={posts} />
            )}
            </div>
        </>
    );
}
export default Home;