function Socials() {
    return (
        <div>
            <div className="big-socials">
                <h2>Check out my socials!</h2>
                <span>
                    <a className="btn btn-primary btn-main" href="https://twitter.com/LaLeonaDA" role="button">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a className="btn btn-primary btn-main" href="https://www.instagram.com/leoleomakesstuff/" role="button">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a className="btn btn-primary btn-main" href="https://www.linkedin.com/in/iosef-casas-71378a15a/" role="button">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a className="btn btn-primary btn-main" href="https://github.com/leo1025" role="button">
                        <i className="bi bi-github"></i>
                    </a>
                </span>
            </div>
            <div className="email">
                <h2>Something on your mind?</h2>
                <a className="btn btn-primary btn-email btn-main" href="mailto:leonardo.da.451@gmail.com" role="button">
                    <span>
                        <i className="bi bi-envelope"></i>
                        <h3>Email Me</h3>
                    </span>
                </a>
            </div>
        </div>
    )
}

function SmallSocials() {
    return (
        <div className="small-socials">
            <span>
                <a className="btn btn-primary btn-main" href="https://twitter.com/LaLeonaDA" role="button">
                    <i className="si bi-twitter"></i>
                </a>
                <a className="btn btn-primary btn-main" href="https://www.instagram.com/leoleomakesstuff/" role="button">
                    <i className="si bi-instagram"></i>
                </a>
                <a className="btn btn-primary btn-main" href="https://www.linkedin.com/in/iosef-casas-71378a15a/" role="button">
                    <i className="si bi-linkedin"></i>
                </a>
                <a className="btn btn-primary btn-main" href="https://github.com/leo1025" role="button">
                    <i className="si bi-github"></i>
                </a>
                <a className="btn btn-primary btn-main" href="mailto:leonardo.da.451@gmail.com" role="button">
                    <i className="si bi-envelope"></i>
                </a>
            </span>
        </div>
    )
}

export default Socials
export {Socials, SmallSocials}