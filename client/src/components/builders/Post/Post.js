import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommentsContainer from '../../containers/CommentsContainer/CommentsContainer';

const Post = ({ artist, title, photo, username, songURL, comments, authorId }) => {
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
                <div id="postPhoto">
                    <img src={photo} alt="Cover for Song" ></img></div>
                <h2 id="postTitle">{title}</h2>
                <h3 id="postArtist">{artist}</h3>
                <iframe src={songURL} title="Link To Song"></iframe>
                {/* <h2 id="postUsername">Posted by @{username}</h2> */}
                <Link to={`/profile/${authorId}`}>{username}</Link>
                <div>
                    <button onClick={toggleComments}></button>
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

export default Post;