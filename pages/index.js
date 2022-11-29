import Head from 'next/head'
import Navbar from './components/Navbar'
import Splash from './components/Splash'
import { SmallSocials } from './components/Socials'
import Footer from './components/Footer'
import Home from './components/Home'

function Index() {
    return (
        <div className='text-center'>
            <Splash />
            <Head>
                <title>Leona DA</title>
            </Head>
            <Navbar />

            <Home />
            <SmallSocials />
            <Footer />
        </div>
    )
}

export default Index
