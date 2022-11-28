import Ghost from "./components/Ghost"
import { getAllPosts } from '../lib/posts';
import Navbar from './components/Navbar'

// Get master list of posts from Ghost CMS
export async function getStaticProps() {
    const posts = await getAllPosts();
    return { props: { posts } };
}

function Portfolio({posts}) {
    return (
        <div>
            <Navbar />
            <h1>This is the Portfolio Page.</h1>
            <Ghost posts={posts} />
        </div>
    )
}

export default Portfolio