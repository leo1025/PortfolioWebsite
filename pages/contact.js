import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Socials from './components/Socials'

function Contact() {
    return (
        <div>
            <Navbar />
            <div className='vh-100 text-center'>
                <h1>Feel free to contact me!</h1>
                <p>I consider myself an Artist first and a Educator second. I'd be more than happy to hear out ideas or answer some questions.</p>
                <p>My commissions are open! If you want to inquire about rates and my other work. Email me and look at my Deviant Art.</p>
                <p>I also stream and make videos! Go to my Twitch and YouTube to take a look.</p>
                <Socials />
            </div>
            <Footer />
        </div>
    )
}

export default Contact