import React, { useState } from 'react';
import "./post.css"
import { Link } from 'react-router-dom';

import CommentsContainer from '../../containers/CommentsContainer/CommentsContainer';
// import Auth from '../../../utils/auth';


const Post = ({ artist, title, postText, username, userId, songURL, comments }) => {
  // const isLoggedIn = Auth.loggedIn();
  // const [showComment, setShowComment] = useState(false);
  // const [showCommentForm, setShowCommentForm] = useState(false); // New state for comment form visibility


  // const toggleComments = (e) => {
  //   e.preventDefault();

  //   if (showComment) {
  //     setShowComment(false);
  //   } else {
  //     setShowComment(true);
  //   }
  // };

  // const toggleCommentForm = (e) => {
  //   e.preventDefault();
  //   setShowCommentForm((prevShowCommentForm) => !prevShowCommentForm); // Toggle comment form visibility
  // };

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
          <h3 id="postUsername"><Link to={`/profile/${userId}`}>See User Profile</Link></h3>
        </div>
      </div>
    </>
  );
};

export default Post;

