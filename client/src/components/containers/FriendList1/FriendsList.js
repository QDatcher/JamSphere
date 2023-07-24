import Friend from "../../builders/Friend/friend1";


const FriendList = ({friends}) => {

    return (
        <>
            <section>
                <h3>Friends List</h3>
                <div>
                    {friends.map((friend) => {
                       return <Friend profileUrl={friend.profileURL} username={friend.username} />
                    })}

                </div>

            </section>
        </>
    )
}

export default FriendList