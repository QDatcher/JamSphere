
import PostList from '../../containers/PostList/PostList';
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { YOUR_PROFILE, GET_POST } from '../../../utils/queries';


const Home = () => {

    const posts = [{}, {}, {}]

    return (
        <>
            <button id="create">+</button>
            <PostList posts={posts} ></PostList>
        </>

    )
}

export default Home;