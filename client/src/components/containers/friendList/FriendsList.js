import Friend from '../../tempFolder/Friend'


const FriendList = ({friends}) => {

    return (
        <>
            <section>
                <h3>Friends List</h3>
                <div>
                    {friends.map((friend) => {
                        <Friend profileUrl={friend.profileUrl} username={friend.username} />
                    })}

                </div>

            </section>
        </>
    )
}

export default FriendList