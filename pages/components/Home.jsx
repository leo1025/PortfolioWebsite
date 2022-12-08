import Link from "next/link"

function Home() {
    return (
        <div id="welcome" className="greeting container">
            <h5>Hi. My name is <strong>Leona</strong>.</h5>
            <h1 className="title">I'm a <strong>Digital Artist</strong></h1>
            <p>Welcome to my Creative Portfolio Website and Blog. I do a lot of different things. From Software and Game Development. To Digital Illustration and 3D Animation. All the way to painting and music production. Most of my most interesting and fun projects are recorded here in detail. Take a look around and learn more about me! If you want to, that is.</p>
            <Link className="btn btn-outline-light btn-offer" href='#about' scroll={false}>Keep going?</Link>
        </div>
    )
}

export default Home