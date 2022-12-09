import Link from "next/link";

function ProjectCard({post}) {
    return (
        <div className="col-md-4">
            {post
                ? <Link
                    style={{textDecoration: 'none', color: 'inherit'}}
                    href={{pathname: `/${post.slug}`}}>
                    <div className="my-card">
                        <img className="img-fluid" src={post.feature_image} alt="project-img" />
                        <h1 className="title fs-2 py-2 text-center">{post.title}</h1>
                        <p>{post.excerpt.substring(0,100)}...</p>
                    </div>
                </Link>
                : <p>Error loading card.</p>
            }
        </div>
    )
}

export default ProjectCard