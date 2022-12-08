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
            <div className='about container vh-auto py-1'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Profile />
                    </div>
                    <div className='col-md-6'>
                        <CoolThing />
                        <h4 className='py-3 title'>Anaru from my college short film "Anaru"</h4>
                    </div>
                </div>
                <Guide />
            </div>
            <SmallSocials />
            <Footer />
        </div>
    )
}

export default About