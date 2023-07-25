import Post from '../../builders/Post/Post'
import "./PostList.css";

const PostsList = ({posts}) => {

    return (
        <>
            <section>
            
                <div>
                    {posts.map((post)  => {
                 
                        return <Post key={post._id} artist={post.artist} username={post.username} userId={post.authorId._id} title={post.title} postText={post.postText} songURL={post.songURL} />
                    })}

                </div>

            </section>
        </>
    )
}

export default PostsList;