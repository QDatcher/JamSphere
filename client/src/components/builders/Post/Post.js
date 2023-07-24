import React, { useState } from 'react';
import "./post.css"
import CommentsContainer from '../../containers/CommentsContainer/CommentsContainer';

const Post = ({ artist, title, photo, username, songURL, comments }) => {
    const [showComment, setShowComment] = useState(false);

    const toggleComments = (e) => {
        e.preventDefault()

        if (showComment) {
            setShowComment(false)
        } else {
            setShowComment(true)
        }
    }

    return (
        <>
            <div class="post-container">
                <div class="post-content">
                    <div id="postPhoto">
                        <img src={photo} alt="Cover for Song" ></img></div>
                    <h2 id="postTitle">{title}</h2>
                    <h3 id="postArtist">{artist}</h3>
                    <iframe src={songURL} title="Link To Song"></iframe>
                    <h2 id="postUsername">Posted by @{username}</h2>
                </div>
                <div>
                    <button onClick={toggleComments}>Show Comments</button>
                </div>
                {/* This code below should mean that if showComment is true we display this following code */}
                {showComment && (
                    <div>
                        <CommentsContainer comments={comments} />
                    </div>
                )}
            </div>
        </>
    )

}

// Post.propTypes = {
//     artist: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     photo: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired,
//     songURL: PropTypes.string.isRequired,
// };


export default Post;