
import PostList from '../../containers/PostList/PostList';
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { YOUR_PROFILE, GET_POST } from '../../../utils/queries';
import Auth from '../../../utils/auth';
import "./Home.css";


const Home = () => {
    const isLoggedIn = Auth.loggedIn();
    const posts = [{
        artist: 'Beyonce',
        title: 'Ring on it',
        postText: 'I love this song so much it is so my jam',
        songURL: ''
    }, {}, {}]

    const [showCreateForm, setShowCreateForm] = useState(false);
    const [formData, setFormData] = useState({
        artist: '',
        title: '',
        postText: '',
        songURL: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormData({
            artist: '',
            title: '',
            postText: '',
            songURL: '',
        });
        // Hide the form after submission
        setShowCreateForm(false);
    }
    const toggleCreateForm = () => {
        setShowCreateForm((prevShowCreateForm) => !prevShowCreateForm);
    };
    return (
        <>
            <div className="parentContainer">
                {isLoggedIn ? (
                    <>
                        <button id="create" onClick={toggleCreateForm}>+</button>
                        <PostList posts={posts} />
                    </>
                ) : (
                    <PostList posts={posts} />
                )}
            </div>

            {/* Dropdown post Form */}
            {showCreateForm && isLoggedIn && (
                <div className="create-form">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="artist"
                            placeholder="Artist"
                            value={formData.artist}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="postText"
                            placeholder="Leave a thought..."
                            value={formData.postText}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="songURL"
                            placeholder="Song URL"
                            value={formData.songURL}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </>
    );

}
export default Home;