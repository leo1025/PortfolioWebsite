import Link from "next/link"

function Guide() {
    return (
        <div className="guide-bubble">
            <h2 className="title">Wanna see more?</h2>
            <p>You can download my resume. Or check out all of my projects on my portfolio. If you want to see my other work that I don't publish here. Go to my socials or check out my contact page.</p>
            <p>Web Museum (Coming soon) is where you can check out my work in a web based 3D experience.</p>
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