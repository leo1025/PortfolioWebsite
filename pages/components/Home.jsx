import Link from "next/link"

function Home() {
    return (
        <div id="welcome" className="greeting">
            <h5>Hi. Call me <strong>Leona</strong>.</h5>
            <h1 className="title">I'm a <strong>Digital Artist</strong></h1>
            <p>I do a lot of things. From working in teaching and education to developing games and art pieces. I'm interested in all things Computers and Art, always looking for a new way to brings both fields together in a fun and interesting way. Take a look around and enjoy my myriad of endeavors I've undertaken.</p>
            <Link className="btn btn-outline-light btn-offer" href='#about' scroll={false}>Want to know more?</Link>
        </div>
    )
}

export default Home