import React from 'react';
import PostList from '../../containers/postContainer';

const Home = () => {
    const post=[{
        "authorId": "1",
        "artist":"Girl",
        "title":"song",
        "postText":"This"
    }]
    return (
        <PostList></PostList>
    )
}