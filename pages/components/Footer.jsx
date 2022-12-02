function Footer() {
    const currYear = new Date().getFullYear();

    return (
        <div className="footer w-100">
            <span>
                <p className="float-start footer-text">Copyright © {currYear}. All Rights Reserved.</p>
                <p className="float-end footer-text">Designed by LeonaDA</p>
            </span>
        </div>
    )
}

export default Footer