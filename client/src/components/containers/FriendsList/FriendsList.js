import Friend from "../../builders/Friend/Friend";

const FriendList = ({friends}) => {
    return (
        <>
            <section>

                <div>
                    {friends.map((friend) => {
                       return (
                           <Friend 
                              key={friend._id} 
                              coverPicId={friend.coverPicId} 
                              username={friend.username} 
                              friendId={friend._id} //Passing the friendId to the Friend component
                           />
                       );
                    })}
                </div>
            </section>
        </>
    );
}

export default FriendList;
