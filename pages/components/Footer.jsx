function Footer() {
    const currYear = new Date().getFullYear();

    return (
        <div className="w-100 p-3">
            <hr />
            <span>
                <p className="float-start footer-text">Copyright © {currYear}. All Rights Reserved.</p>
                <p className="float-end footer-text">Designed by LeonaDA</p>
            </span>
        </div>
    )
}

export default Footer