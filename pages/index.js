import Ghost from "./components/Ghost"
import { getAllPosts } from '../lib/posts';

export async function getStaticProps() {
    const posts = await getAllPosts();
    return { props: { posts } };
}


function HomePage({posts}) {
    console.log(posts)
    return (
        <div>
            <h1>Hello World!</h1>
            <Ghost />
            <p>This is my portfolio website.</p>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage
