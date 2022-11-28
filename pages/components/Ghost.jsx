import { getAllPosts } from '../../lib/posts';

export async function getStaticProps() {
    const posts = await getAllPosts();
    return { props: { posts } };
}

function Ghost({posts}) {
    console.log(posts);
    <ul>
        {posts?.map((post) => (
            <li key={post.uuid}>{post.title}</li>
        ))}
    </ul>
}

export default Ghost