import React from 'react';
import { useMutation } from '@apollo/client';
import './friend.css';

const Friend = ({ friendId, username, currentUserId }) => {
    const [addFriend] = useMutation(ADD_FRIEND_MUTATION);

    const handleAddFriend = async () => {
      try {
        await addFriend({
          variables: {
            userId: currentUserId,
            friendId,
          },
        });
      } catch (err) {
        console.error(err);
      }
    };

    return (
        <>    
            <a href="*">
                <div>
                    <div>
                        <img alt={`${username} profile pic`} src={coverPicId}></img>
                    </div>
                    <p>{username}</p>
                    <button onClick={handleAddFriend}>Add Friend</button>
                </div>
            </a>
        </>
    )
}

export default Friend;
