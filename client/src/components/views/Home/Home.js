import React from 'react';
import PostList from '../../containers/postContainer';

const Home = () => {

    const posts = [{},{},{}]

    return (
        <PostList posts={posts} ></PostList>
    )
}