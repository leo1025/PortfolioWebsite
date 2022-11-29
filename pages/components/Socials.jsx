function Socials() {
    return (
        <div>
            <h4>Check out my Socials</h4>
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
                <a className="btn btn-primary" href="#!" role="button">
                    <i className="bi bi-twitch"></i>
                </a>
                <a className="btn btn-primary" href="#!" role="button">
                    <i className="bi bi-youtube"></i>
                </a>
            </span>

            <h3>Something on your mind?</h3>
            <h1>Email me.</h1>
            <a className="btn btn-primary" href="#!" role="button">
                    <i className="bi bi-envelope"> Contact</i>
            </a>
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
                    <i className="si bi-twitch"></i>
                </a>
                <a className="btn btn-primary" href="#!" role="button">
                    <i className="si bi-youtube"></i>
                </a>
            </span>
        </div>
    )
}

export default Socials
export {Socials, SmallSocials}