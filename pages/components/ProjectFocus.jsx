import parse from 'html-react-parser'

function ProjectFocus({post, tags}) {
    return (
        <div className='container resume-base p-4'>
            {post
                ? <div>
                    <div className='project-title title'>
                        <h1>{post.title}</h1>
                    </div>
                    <div className='text-center'>
                        <img className='img-feature' src={post.feature_image} alt="featured" />
                        <h4 className='py-3'>{post.feature_image_caption}</h4>
                    </div>
                    <div className='project-focus'>
                        <hr />
                        <ul className="skills-used">
                            {tags?.map((tag) => {
                                return <li>{tag.name}</li>
                            })}
                        </ul>
                        <hr className='py-2'/>
                        <div>
                            {parse(post.html.toString())}
                        </div>
                    </div>
                </div>
                : <p>Error Loading Project.</p>
            }
        </div>
    )
}

export default ProjectFocus