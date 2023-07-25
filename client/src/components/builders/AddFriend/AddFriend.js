import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_FRIEND } from '../../../utils/mutations';
import { YOUR_PROFILE, User_Profile } from '../../../utils/queries';

const AddFriendButton = ({ currentUserId, friendId }) => {
    const [addFriend, { loading }] = useMutation(ADD_FRIEND);
    const [isSuccess, setIsSuccess] = useState(false);
    const { refetch } = useQuery(friendId ? User_Profile : YOUR_PROFILE, {
        variables: { userId: friendId },
        skip: true  // Skip the initial query and only use this for refetching
    });
    console.log(currentUserId)
    const handleAddFriend = async () => {
        if (friendId !== currentUserId) {
            try {
                await addFriend({
                    variables: {
                        userId: currentUserId,
                        friendId: friendId,
                    },
                    
                });
                
                setIsSuccess(true);  // Set success state to true after a successful mutation
                refetch();  // Refetch the user's profile data
            } catch (error) {
                console.error("Error adding friend: ", error);
            }
        }
    };

    return (
        <>
            {currentUserId && friendId !== currentUserId && (
                <button onClick={handleAddFriend} disabled={loading}>
                    {loading ? "Loading..." : isSuccess ? "Friend Added!" : "Add Friend"}
                </button>
            )}
            {!loading && !isSuccess && <p></p>}
        </>
    );
}

export default AddFriendButton;
