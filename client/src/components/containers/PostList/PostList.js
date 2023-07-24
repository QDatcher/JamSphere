import Post from '../../builders/Post/Post'
import "./PostList.css";

const PostsList = ({posts}) => {

    return (
        <>
            <section>
            
                <div>
                    {posts.map((post) => {
                        return <Post key={post._id} artist={post.artist} username={post.username} title={post.title} photo={post.photo} />
                    })}

                </div>

            </section>
        </>
    )
}

export default PostsList;