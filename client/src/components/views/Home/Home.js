import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import PostList from '../../containers/PostList/PostList';
import  Auth  from '../../../utils/auth';
import './Home.css';

// Import the CREATE_POST mutation from your file (assuming it's in a 'mutations.js' file)
import { CREATE_POST } from '../../../utils/mutations';

const Home = () => {
    const isLoggedIn = Auth.loggedIn();
    const posts = [
        {
            artist: 'Beyonce',
            title: 'Ring on it',
            postText: 'I love this song so much it is so my jam',
            songURL: '',
        },
        {}, // Placeholder for post 2 (modify it with actual data)
        {}, // Placeholder for post 3 (modify it with actual data)
    ];

    const [showCreateForm, setShowCreateForm] = useState(false);
    const [formData, setFormData] = useState({
        artist: '',
        title: '',
        postText: '',
        songURL: '',
    });

    const [createPost, { loading, error, data }] = useMutation(CREATE_POST);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await createPost({
                variables: {
                    title: formData.title,
                    songUrl: formData.songURL,
                    artist: formData.artist,
                    postText: formData.postText,
                },
            });

            // Handle successful post creation (if needed)

            // Clear the form data
            setFormData({
                artist: '',
                title: '',
                postText: '',
                songURL: '',
            });
            // Hide the form after submission
            setShowCreateForm(false);
        } catch (err) {
            console.error(err);
        }
    };

    const toggleCreateForm = () => {
        setShowCreateForm((prevShowCreateForm) => !prevShowCreateForm);
    };

    return (
        <>
            <div className="parentContainer">
                {isLoggedIn ? (
                    <>
                        <button id="create" onClick={toggleCreateForm}>
                            +
                        </button>
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
};

export default Home;
