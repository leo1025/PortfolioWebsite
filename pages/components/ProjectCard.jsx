import Link from "next/link";

function ProjectCard({post}) {
    return (
        <div className="col-4">
            <Link
                style={{textDecoration: 'none', color: 'inherit'}}
                href={{
                    pathname: `/${post.slug}`,
                    query: {id: post.id},
                }}>
                <div className="my-card">
                    <img className="img-fluid" src={post.feature_image} alt="project-img" />
                    <h1>{post.title}</h1>
                    <p>{post.excerpt.substring(0,100)}...</p>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard