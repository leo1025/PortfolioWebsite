import Head from 'next/head'
import Navbar from './components/Navbar'
import Splash from './components/Splash'

function Home() {
    return (
        <div className='text-center'>
            <Splash />
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
