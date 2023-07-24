import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_FRIEND } from '../../../utils/mutations';

const AddFriendButton = ({ currentUserId, friendId }) => {
    const [addFriend, { loading, error }] = useMutation(ADD_FRIEND);

    const handleAddFriend = async () => {
        if (friendId !== currentUserId) {
            try {
                await addFriend({
                    variables: {
                        userId: currentUserId,
                        friendId: friendId,
                    },
                });
            } catch (error) {
                console.error("Error adding friend: ", error);
            }
        }
    };

    return (
        <>
            {currentUserId && friendId !== currentUserId && (
                <button onClick={handleAddFriend} disabled={loading}>
                    {loading ? "Loading..." : "Add Friend"}
                </button>
            )}
            {error && <p>Error adding friend</p>}
        </>
    );
}

export default AddFriendButton;
