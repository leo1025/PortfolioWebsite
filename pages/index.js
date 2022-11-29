import Head from 'next/head'
import Navbar from './components/Navbar'
import Splash from './components/Splash'
import Socials from './components/Socials'

function Index() {
    return (
        <div className='text-center'>
            <Splash />
            <Head>
                <title>Leona DA</title>
            </Head>
            <Navbar />
            <Socials />
        </div>
    )
}

export default Index
