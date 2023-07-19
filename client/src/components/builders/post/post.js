import React from 'react';

const Post = ({ artist, title, photo, username, songURL }) => {

    return (
        <div>
            <div id="postPhoto">
                <img src={photo} alt="Cover Photo for Song" ></img></div>
            <h2 id="postUsername">{username}</h2>
            <br></br>
            <h3 id="postTitle">{title}</h3>
            <h2 id="postArtist">{artist}</h2>
            <iframe  src={songURL} title="Link To Song"/>
        </div>
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