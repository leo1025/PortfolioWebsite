import Head from 'next/head'
import Navbar from './components/Navbar'

function Home() {
    return (
        <div>
            <Head>
                <title>Leona DA</title>
            </Head>
            <Navbar />
            <h1>Hello World!</h1>
            <p>This is my portfolio website.</p>
        </div>
    )
}

export default Home
