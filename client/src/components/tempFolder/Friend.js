
const Friend = ({username, profileUrl}) => {


    return (
        <>  
            {/* get the profile endpoint */}
            <a href="*">
                <div>
                    <div>
                        <img alt={`${username} profile pic`} src={profileUrl}></img>
                    </div>
                    <p>{username}</p>
                </div>
            </a>
        </>
    )
}

export default Friend