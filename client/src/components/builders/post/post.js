import React, { useState } from 'react';
import CommentsContainer from '../../containers/CommentsContainer/CommentsContainer';

const Post = ({ artist, title, photo, username, songURL, comments }) => {
    const [showComment, setShowComment] = useState(false);

    const toggleComments = (e) => {
        e.preventDefault()

        if(showComment){
            setShowComment(false)
        } else {
            setShowComment(true)
        }
    }

    return (
        <>
            <div>
                <div id="postPhoto">
                    <img src={photo} alt="Cover for Song" ></img></div>
                <h2 id="postUsername">{username}</h2>
                <br></br>
                <h3 id="postTitle">{title}</h3>
                <h2 id="postArtist">{artist}</h2>
                <iframe  src={songURL} title="Link To Song"/>
            </div>
            <div>
                <button onClick={toggleComments}></button>
            </div>
            {/* This code below should mean that if showComment is true we display this following code */}
            {showComment && (
                <div>
                    <CommentsContainer comments={comments} />
                </div>
            )}
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