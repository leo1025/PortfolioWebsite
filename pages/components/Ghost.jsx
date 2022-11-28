function Ghost(props) {
    return (
        <div>
            <ul>
                {props.posts?.map((post) => (
                    <li key={post.uuid}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Ghost