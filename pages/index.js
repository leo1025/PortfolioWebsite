import Head from 'next/head'
import Navbar from '/components/Navbar'
import Splash from '/components/Splash'
import Socials from '/components/Socials'
import Footer from '/components/Footer'
import Home from '/components/Home'
import WorkCarousel from '/components/WorkCarousel'
import Guide from '/components/Guide'
import { ShortProfile } from '/components/Profile'
import { getTopThree } from '../lib/posts';

export async function getStaticProps() {
    const posts = await getTopThree();
    return { props: { posts } };
}

function Index({posts}) {
    return (
        <div className='text-center'>
            <Splash />
            <Head>
                <title>Leona DA</title>
            </Head>
            <Navbar />
            <div className='content'>
                <Home />
                <ShortProfile />
                <WorkCarousel data={posts}/>
                <Guide />
                <Socials />
            </div>
            <Footer />
        </div>
    )
}

export default Index
