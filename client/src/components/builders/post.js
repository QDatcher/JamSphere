import React from 'react';

const Post = ({ artist, title, photo, username }) => {

    return (
        <div>
            <div id="postPhoto">
                <img src={photo} alt="Cover Photo for Song" ></img></div>
            <h2 id="postUsername">{username}</h2>
            <br></br>
            <h3 id="postTitle">{title}</h3>
            <h2 id="postArtist">{artist}</h2>
        </div>
    )

}

export default Post