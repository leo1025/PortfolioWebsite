import parse from 'html-react-parser'

function ProjectFocus({post, tags}) {
    const postString = post.html.toString();

    return (
        <div className='container resume-base p-5'>
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
                    {tags.map((tag) => {
                        return <li>{tag.name}</li>
                    })}
                </ul>
                <hr className='py-2'/>
                <div>
                    {parse(postString)}
                </div>
            </div>
        </div>
    )
}

export default ProjectFocus