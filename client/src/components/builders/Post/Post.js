import React, { useState } from 'react';
import "./post.css"
import { Link } from 'react-router-dom';

import CommentsContainer from '../../containers/CommentsContainer/CommentsContainer';
import Auth from '../../../utils/auth';


const Post = ({ artist, title, postText, username, userId, songURL, comments }) => {
  const isLoggedIn = Auth.loggedIn();
  const [showComment, setShowComment] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false); // New state for comment form visibility


  const toggleComments = (e) => {
    e.preventDefault();

    if (showComment) {
      setShowComment(false);
    } else {
      setShowComment(true);
    }
  };

  const toggleCommentForm = (e) => {
    e.preventDefault();
    setShowCommentForm((prevShowCommentForm) => !prevShowCommentForm); // Toggle comment form visibility
  };

  return (
    <>
      <div className="post-container">
        <div className="post-content">
          <h2 id="postTitle">{title}</h2>
          <h3 id="postArtist">{artist}</h3>
          <h3 id="postText">{postText}</h3>
          <a href={songURL} title="Link To Song">
            ♩♬♪ Listen Here♩♬♪
          </a>
          <h3 id="postUsername">Posted by <Link to={`/profile/${userId}`}>@{username}</Link></h3>
          {/* Comment button included in the same .post-content div */}
          <button onClick={toggleComments}>Show Comments</button>
          <button onClick={toggleCommentForm}>
            Leave Comment
          </button>

          {/* Comment form */}
          {showCommentForm && isLoggedIn && (
            <form>
              <textarea
                name="commentContent"
                placeholder="Write your comment here..."
              />
              <button type="submit">Submit Comment</button>
            </form>
          )}
        </div>

        {/* This code below should mean that if showComment is true we display this following code */}
        {showComment && isLoggedIn && (
          <div>
            <CommentsContainer comments={comments} />
          </div>
        )}
      </div>
    </>
  );
};

export default Post;

