import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectFocus from "./components/ProjectFocus"
import { getAllPosts, getPostFrom } from '../lib/posts'

function Post(props) {
  return (
      <div>
          <Navbar />
          <ProjectFocus post={props.post} tags={props.post.tags}/>
          <Footer />
      </div>
  )
}


export async function getStaticPaths() {
  const posts = await getAllPosts()

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false }
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const post = await getPostFrom(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post }
  }
}

export default Post