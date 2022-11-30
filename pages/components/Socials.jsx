function Socials() {
    return (
        <div>
            <div className="big-socials">
                <h2>Check out my socials!</h2>
                <span>
                    <button className="btn btn-primary" type="button">
                        <i className="bi bi-twitter"></i>
                    </button>
                    <a className="btn btn-primary" href="#!" role="button">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a className="btn btn-primary" href="#!" role="button">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a className="btn btn-primary" href="#!" role="button">
                        <i className="bi bi-github"></i>
                    </a>
                </span>
            </div>
            <div className="email">
                <h2>Something on your mind?</h2>
                <p>Check out the contacts pages for more information.</p>
                <a className="btn btn-primary btn-email" href="#!" role="button">
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
                <button className="btn btn-primary" type="button">
                    <i className="si bi-twitter"></i>
                </button>
                <a className="btn btn-primary" href="#!" role="button">
                    <i className="si bi-instagram"></i>
                </a>
                <a className="btn btn-primary" href="#!" role="button">
                    <i className="si bi-linkedin"></i>
                </a>
                <a className="btn btn-primary" href="#!" role="button">
                    <i className="si bi-github"></i>
                </a>
                <a className="btn btn-primary" href="#!" role="button">
                    <i className="si bi-envelope"></i>
                </a>
            </span>
        </div>
    )
}

export default Socials
export {Socials, SmallSocials}