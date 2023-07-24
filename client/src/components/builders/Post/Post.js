import React, { useState } from 'react';
import "./post.css"
import { Link } from 'react-router-dom';
import CommentsContainer from '../../containers/CommentsContainer/CommentsContainer';

const Post = ({ artist, title, postText, username, songURL, comments, authorId }) => {
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
            <div className="post-container">
                <div className="post-content">
                    <h2 id="postTitle">{title}</h2>
                    <h3 id="postArtist">{artist}</h3>
                    <h3 id="postText">{postText}</h3>
                    <Link to={`/profile/${authorId}`}>{username}</Link>
                    <a href={songURL} title="Link To Song">♩♬♪ Listen Here♩♬♪</a>
                    <h3 id="postUsername">Posted by @{username}</h3>

                    {/* Comment button included in the same .post-content div */}
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

export default Post;