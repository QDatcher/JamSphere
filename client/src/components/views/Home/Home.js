
import PostList from '../../containers/postContainer/PostList';
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { YOUR_PROFILE, GET_POST } from '../../../utils/queries';


const Home = () => {
    const [userId, setUserId] = useState(null)

    useEffect(()=>{

    })

    useEffect(()=>{
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        }
    })

    const {loading, data} = useQuery(YOUR_PROFILE, {
        variables: {
            userId
        }
    })
    

   

    
   
    const [posts, setPosts] = useState([])
    const post = [{},{},{}]

    const getPosts = () => {

    }

    return (
        <>
        
        <div>helloooooooooooooooooooooooooooo</div>
        <PostList posts={posts} ></PostList>
        </>
        
    )
}

export default Home;