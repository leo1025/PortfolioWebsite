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
            <div className='text-center resume-base text-start'>
                <button className='btn btn-outline-light btn-guide p-2 w-25' >Download Resume</button>
                <div className='alt-resume p-5 title-name'>
                    <h1 className='title'><strong>LEONA</strong> - IOSEF LEONARDO CASAS GUTIERREZ</h1>
                    <p className='fs-4 p-2' >The <strong>Arts</strong> and <strong>Sciences</strong> are inseparable, one can't exist without the other.</p>
                </div>
                <Education />
                <Experience />
                <div className='text-center'>
                    <WorkCarousel />
                    <Skills />
                    <Guide />
                    <div className='py-2'></div>
                </div>
            </div>
            <div className='text-center'>
                <div className='py-2'></div>
                <SmallSocials />
                <Footer />
            </div>
        </div>
    )
}

export default Resume