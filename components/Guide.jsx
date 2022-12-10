import Link from "next/link"

function Guide() {
    return (
        <div className="guide-bubble">
            <h2 className="title">Want to see more?</h2>
            <p>You go to my resume page and take a look at a total overview of my expertise and career. Or you can download a PDF resume if you're curious about my availability and professional skillset.</p>
            <p>If you want to see all of my projects, click on the Portfolio link. You can find all of my projects organized in order of time and relevance in a blog style format. Where you can learn about my process in creating them.</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Link className="btn btn-outline-light btn-guide" href="/resume">Resume</Link>
                    </div>
                    <div className="col-md-6">
                        <Link className="btn btn-outline-light btn-guide" href="/portfolio">Portfolio</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guide