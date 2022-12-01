import Education from './components/Education'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import WorkCarousel from './components/WorkCarousel'
import Footer from './components/Footer'
import { SmallSocials } from './components/Socials'
import Guide from './components/Guide'

function Resume() {
    return (
        <div>
            <Navbar />
            <div className='resume-base text-start'>
                <button>Download Resume</button>
                <div className='title-name'>
                    <h1>Leona - Iosef Leonardo Casas Gutierrez</h1>
                    <p>The Arts and Sciences are inseparable, one can't exist without the other.</p>
                </div>
                <Education />
                <Experience />
                <div className='text-center'>
                    <WorkCarousel />
                    <Skills />
                    <Guide />
                </div>
            </div>
            <div className='text-center'>
                <SmallSocials />
                <Footer />
            </div>
        </div>
    )
}

export default Resume