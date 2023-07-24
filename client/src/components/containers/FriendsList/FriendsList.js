import Friend from "../../builders/Friend/Friend";

const FriendList = ({friends}) => {
    return (
        <>
            <section>
                <h3>Friends List</h3>
                <div>
                    {friends.map((friend) => {
                       return (
                           <Friend 
                              key={friend._id} 
                              coverPicId={friend.coverPicId} 
                              username={friend.username} 
                           />
                       );
                    })}
                </div>
            </section>
        </>
    );
}

export default FriendList;
