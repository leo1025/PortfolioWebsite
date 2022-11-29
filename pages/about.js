import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './components/Profile'
import CoolThing from './components/CoolThing'
import { SmallSocials } from './components/Socials'


function About() {
    return (
        <div>
            <Navbar />
            <div className='about'>
                <Profile />
                <CoolThing />
            </div>
            <SmallSocials />
            <Footer />
        </div>
    )
}

export default About