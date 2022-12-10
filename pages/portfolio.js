import { getAllPosts } from '../lib/posts';
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import ProjectCard from "/components/ProjectCard";
import { SmallSocials } from '/components/Socials'

// Get master list of posts from Ghost CMS
export async function getStaticProps() {
    const posts = await getAllPosts();
    return { props: { posts } };
}

function Portfolio({posts}) {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className="row">
                    {posts?.map((p) => {
                        return <ProjectCard post={p} />
                    })}
                </div>
            </div>
            <div className='py-5'></div>
            <SmallSocials />
            <Footer />
        </div>
    )
}

export default Portfolio