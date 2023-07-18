


const PostsList = ({posts}) => {

    return (
        <>
            <section>
                <h3>Posts</h3>
                <div>
                    {posts.map((post) => {
                        <Post artist={post.artist} username={post.username} title={post.title} photo={post.photo} />
                    })}

                </div>

            </section>
        </>
    )
}

export default PostsList;