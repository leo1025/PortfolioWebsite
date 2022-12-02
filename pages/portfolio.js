import Ghost from "./components/Ghost"
import { getAllPosts } from '../lib/posts';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Get master list of posts from Ghost CMS
export async function getStaticProps() {
    const posts = await getAllPosts();
    return { props: { posts } };
}

function Portfolio({posts}) {
    return (
        <div>
            <Navbar />
            <div className="vh-100">
                
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio