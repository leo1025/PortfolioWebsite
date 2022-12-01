import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './components/Profile'
import CoolThing from './components/CoolThing'
import { SmallSocials } from './components/Socials'
import Guide from './components/Guide'

function About() {
    return (
        <div className='text-center'>
            <Navbar />
            <div className='about'>
                <Profile />
                <CoolThing />
            </div>
            <Guide />
            <SmallSocials />
            <Footer />
        </div>
    )
}

export default About