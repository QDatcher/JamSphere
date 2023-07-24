
import PostList from '../../containers/PostList/PostList';
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { YOUR_PROFILE, GET_POST } from '../../../utils/queries';
import Auth from '../../../utils/auth';


const Home = () => {
    const isLoggedIn = Auth.loggedIn();
    const posts = [{}, {}, {}]

    return (
        <>
          {isLoggedIn ? (
            <>
              <button id="create">+</button>
              <PostList posts={posts} />
            </>
          ) : (
            <PostList posts={posts} />
          )}
        </>
      );

export default Home;